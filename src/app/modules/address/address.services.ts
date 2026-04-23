import status from "http-status";
import { Prisma, UserRole } from "../../../../prisma/generated/prisma";
import ApiError from "../../errors/apiError";
import prisma from "../../../shared/prisma";

const normalizeAddressPayload = (payload: any, isUpdate = false) => {
  const source =
    Array.isArray(payload?.addresses) && payload.addresses.length > 0
      ? payload.addresses[0]
      : payload;

  const normalized = {
    label: source?.label,
    addressType: source?.addressType,
    recipientName: source?.recipientName ?? source?.fullName,
    recipientPhone: source?.recipientPhone ?? source?.phoneNumber,
    alternatePhone: source?.alternatePhone,
    line1: source?.line1 ?? source?.addressLine1,
    line2: source?.line2 ?? source?.addressLine2,
    landmark: source?.landmark,
    city: source?.city,
    state: source?.state,
    postalCode: source?.postalCode,
    country: source?.country,
    latitude:
      source?.latitude ??
      source?.lat ??
      source?.location?.coordinates?.latitude,
    longitude:
      source?.longitude ??
      source?.lng ??
      source?.logn ??
      source?.location?.coordinates?.longitude,
    deliveryInstructions: source?.deliveryInstructions,
    isDefault: source?.isDefault,
  };

  if (
    !isUpdate &&
    (!normalized.recipientName ||
      !normalized.recipientPhone ||
      !normalized.line1 ||
      !normalized.city ||
      !normalized.state ||
      !normalized.postalCode)
  ) {
    throw new ApiError(
      status.BAD_REQUEST,
      "recipientName, recipientPhone, line1, city, state and postalCode are required",
    );
  }

  const filtered = Object.fromEntries(
    Object.entries(normalized).filter(([, value]) => value !== undefined),
  );

  return filtered;
};

const getProfileOwnershipFilter = async (user: any) => {
  const userRecord = await prisma.user.findUnique({
    where: { email: user?.email },
    select: { email: true, role: true, status: true },
  });

  if (!userRecord) {
    throw new ApiError(status.UNAUTHORIZED, "User not found");
  }

  if (userRecord.role === UserRole.ADMIN) {
    const admin = await prisma.admin.findUnique({
      where: { email: userRecord.email },
      select: { id: true },
    });
    if (!admin) throw new ApiError(status.NOT_FOUND, "Admin profile not found");
    return { adminId: admin.id };
  }

  if (userRecord.role === UserRole.BUYER) {
    const buyer = await prisma.buyer.findUnique({
      where: { email: userRecord.email },
      select: { id: true },
    });
    if (!buyer) throw new ApiError(status.NOT_FOUND, "Buyer profile not found");
    return { buyerId: buyer.id };
  }

  if (userRecord.role === UserRole.MANAGER) {
    const manager = await prisma.manager.findUnique({
      where: { email: userRecord.email },
      select: { id: true },
    });
    if (!manager) throw new ApiError(status.NOT_FOUND, "Manager profile not found");
    return { managerId: manager.id };
  }

  throw new ApiError(status.FORBIDDEN, "Role is not allowed for addresses");
};

const getOwnershipOrConditions = (profile: {
  adminId?: string;
  buyerId?: string;
  managerId?: string;
}) => {
  const OR: Prisma.AddressWhereInput[] = [];
  if (profile.adminId) OR.push({ adminId: profile.adminId });
  if (profile.buyerId) OR.push({ buyerId: profile.buyerId });
  if (profile.managerId) OR.push({ managerId: profile.managerId });
  return OR;
};

const createAddressIntoDB = async (user: any, payload: any) => {
  const userData = await getProfileOwnershipFilter(user);
 
  const normalizedPayload = normalizeAddressPayload(payload);

  return prisma.$transaction(async (tx) => {
    if (normalizedPayload?.isDefault) {
      await tx.address.updateMany({
        where: userData,
        data: { isDefault: false },
      });
    }

    const createData = {
      ...normalizedPayload,
      ...userData,
    } as Prisma.AddressUncheckedCreateInput;

    return tx.address.create({
      data: createData,
    });
  });
};

const getMyAddressesFromDB = async (user: any) => {
  const profile = await getProfileOwnershipFilter(user);
  return prisma.address.findMany({
    where: profile,
    orderBy: [{ isDefault: "desc" }, { createdAt: "desc" }],
  });
};

const updateMyAddressFromDB = async (user: any, addressId: string, payload: any) => {
  const profile = await getProfileOwnershipFilter(user);
  const ownershipCheck = getOwnershipOrConditions(profile);

  const existingAddress = await prisma.address.findFirst({
    where: {
      id: addressId,
      OR: ownershipCheck,
    },
  });

  if (!existingAddress) {
    throw new ApiError(status.NOT_FOUND, "Address not found");
  }

  const normalizedPayload = normalizeAddressPayload(payload, true);

  return prisma.$transaction(async (tx) => {
    if (normalizedPayload?.isDefault) {
      await tx.address.updateMany({
        where: profile,
        data: { isDefault: false },
      });
    }

    return tx.address.update({
      where: { id: addressId },
      data: normalizedPayload,
    });
  });
};

const deleteMyAddressFromDB = async (user: any, addressId: string) => {
  const profile = await getProfileOwnershipFilter(user);
  const ownershipCheck = getOwnershipOrConditions(profile);

  const existingAddress = await prisma.address.findFirst({
    where: {
      id: addressId,
      OR: ownershipCheck,
    },
  });

  if (!existingAddress) {
    throw new ApiError(status.NOT_FOUND, "Address not found");
  }

  await prisma.address.delete({
    where: { id: addressId },
  });
};

const setDefaultAddressIntoDB = async (user: any, addressId: string) => {
  const profile = await getProfileOwnershipFilter(user);
  const ownershipCheck = getOwnershipOrConditions(profile);

  const existingAddress = await prisma.address.findFirst({
    where: {
      id: addressId,
      OR: ownershipCheck,
    },
  });

  if (!existingAddress) {
    throw new ApiError(status.NOT_FOUND, "Address not found");
  }

  return prisma.$transaction(async (tx) => {
    await tx.address.updateMany({
      where: profile,
      data: { isDefault: false },
    });

    return tx.address.update({
      where: { id: addressId },
      data: { isDefault: true },
    });
  });
};

export const AddressServices = {
  createAddressIntoDB,
  getMyAddressesFromDB,
  updateMyAddressFromDB,
  deleteMyAddressFromDB,
  setDefaultAddressIntoDB,
};
