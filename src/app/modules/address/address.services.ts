import status from "http-status";
import ApiError from "../../errors/apiError";
import prisma from "../../../shared/prisma";

const getUserRecord = async (user: any) => {
  const userRecord = await prisma.user.findUnique({
    where: { email: user?.email },
    select: { id: true },
  });

  if (!userRecord) {
    throw new ApiError(status.UNAUTHORIZED, "User not found");
  }

  return userRecord;
};

const createAddressIntoDB = async (user: any, payload: any) => {
  const userRecord = await getUserRecord(user);

  const userInfoData = {
    line1: payload.line1 ?? payload.addressLine1,
    line2: payload.line2 ?? payload.addressLine2,
    landmark: payload.landmark,
    city: payload.city,
    state: payload.state,
    postalCode: payload.postalCode,
    country: payload.country ?? "Bangladesh",
  };

  return prisma.userInfo.upsert({
    where: { userId: userRecord.id },
    create: {
      userId: userRecord.id,
      ...userInfoData,
    },
    update: userInfoData,
  });
};

const getMyAddressesFromDB = async (user: any) => {
  const userRecord = await getUserRecord(user);
  const info = await prisma.userInfo.findUnique({
    where: { userId: userRecord.id },
  });
  return info ? [info] : [];
};

const updateMyAddressFromDB = async (user: any, _addressId: string, payload: any) => {
  return createAddressIntoDB(user, payload);
};

const deleteMyAddressFromDB = async (user: any, _addressId: string) => {
  const userRecord = await getUserRecord(user);
  return prisma.userInfo.update({
    where: { userId: userRecord.id },
    data: {
      line1: null,
      line2: null,
      landmark: null,
      city: null,
      state: null,
      postalCode: null,
    },
  });
};

const setDefaultAddressIntoDB = async (user: any, _addressId: string) => {
  const userRecord = await getUserRecord(user);
  return prisma.userInfo.findUnique({
    where: { userId: userRecord.id },
  });
};

export const AddressServices = {
  createAddressIntoDB,
  getMyAddressesFromDB,
  updateMyAddressFromDB,
  deleteMyAddressFromDB,
  setDefaultAddressIntoDB,
};