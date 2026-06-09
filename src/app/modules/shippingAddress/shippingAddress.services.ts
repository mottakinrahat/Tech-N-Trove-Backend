import status from "http-status";
import ApiError from "../../errors/apiError";
import prisma from "../../../shared/prisma";
import {
  ShippingAddressCreatePayload,
  ShippingAddressUpdatePayload,
} from "./shippingAddress.validation";



const createShippingAddressIntoDB = async (
  email: string | undefined,
  payload: ShippingAddressCreatePayload,
) => {
  if (!email) {
    throw new ApiError(status.UNAUTHORIZED, "User information is missing");
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new ApiError(status.NOT_FOUND, "User not found");
  }

  const existingShippingAddress = await prisma.shippingAddress.findFirst({
    where: {
      userId: user.id,
      postOffice: payload.postOffice,
      upazilla: payload.upazilla,
      district: payload.district,
      division: payload.division,
      country: payload.country,
      houseStreet: payload.houseStreet,
      village: payload.village,
    },
  });

  if (existingShippingAddress) {
    throw new ApiError(status.CONFLICT, "Shipping address already exists");
  }

  return prisma.shippingAddress.create({
    data: {
      ...payload,
      userId: user.id,
    },
  });
};

const getMyShippingAddressesFromDB = async (email: string | undefined) => {
  if (!email) {
    throw new ApiError(status.UNAUTHORIZED, "User information is missing");
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new ApiError(status.NOT_FOUND, "User not found");
  }

  return prisma.shippingAddress.findMany({
    where: { userId: user.id },
    orderBy: [{ createdAt: "desc" }],
  });
};

const updateMyShippingAddressFromDB = async (
  email: string | undefined,
  addressId: string,
  payload: ShippingAddressUpdatePayload,
) => {
  if (!email) {
    throw new ApiError(status.UNAUTHORIZED, "User information is missing");
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new ApiError(status.NOT_FOUND, "User not found");
  }

  const existingShippingAddress = await prisma.shippingAddress.findUnique({
    where: { id: addressId },
  });

  if (existingShippingAddress?.userId !== user.id) {
    throw new ApiError(status.NOT_FOUND, "Shipping address not found");
  }

  return prisma.shippingAddress.update({
    where: { id: addressId },
    data: payload,
  });
};

const deleteMyShippingAddressFromDB = async (email: string | undefined, addressId: string) => {
  if (!email) {
    throw new ApiError(status.UNAUTHORIZED, "User information is missing");
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new ApiError(status.NOT_FOUND, "User not found");
  }

  const existingShippingAddress = await prisma.shippingAddress.findUnique({
    where: { id: addressId },
  });

  if (existingShippingAddress?.userId !== user.id) {
    throw new ApiError(status.NOT_FOUND, "Shipping address not found");
  }

  await prisma.shippingAddress.delete({
    where: { id: addressId },
  });
};

export const ShippingAddressServices = {
  createShippingAddressIntoDB,
  getMyShippingAddressesFromDB,
  updateMyShippingAddressFromDB,
  deleteMyShippingAddressFromDB,
};
