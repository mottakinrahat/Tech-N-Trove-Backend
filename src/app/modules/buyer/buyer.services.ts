
import { Buyer, Prisma, UserStatus } from "../../../../prisma/generated/prisma";
import { paginationHelpers } from "../../../helpers/paginationHelpers";

import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../interfaces/pagination";
import { buyerSearchableFields } from "./buyer.constant";
import { IBuyerFilterRequest } from "./buyer.interface";

const getAllBuyer = async (params: IBuyerFilterRequest, options: IPaginationOptions) => {
  const { page, limit, sortBy, sortOrder, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.BuyerWhereInput[] = [];
  if (params.searchTerm) {
    andConditions.push({
      OR: buyerSearchableFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive", // for case-insensitive search
        },
      })),
    });
  }
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: filterData[key as keyof typeof filterData],
        },
      })),
    });
  }
  andConditions.push({ isDeleted: false }); // Exclude soft-deleted records
  // Apply the filter with the search term
  const whereConditions: Prisma.BuyerWhereInput = { AND: andConditions }; // Ensure consistent type
  const result = await prisma.buyer.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      sortBy && sortOrder ? [{ [sortBy]: sortOrder }] : [{ name: "asc" }], // Fallback to 'name' for sorting if not provided
    include: {
      addresses: {
        orderBy: [{ isDefault: "desc" }, { createdAt: "desc" }],
      },
    },
  });
  const total = await prisma.buyer.count({ where: whereConditions });
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleBuyerFromDB = async (id: string) => {
  const result = await prisma.buyer.findUnique({
    where: {
      id,
    },
    include: {
      addresses: {
        orderBy: [{ isDefault: "desc" }, { createdAt: "desc" }],
      },
    },
  });
  return result;
};
const updateBuyerDataFromDB = async (id: string, data: Partial<Buyer>) => {
  await prisma.buyer.findUniqueOrThrow({
    where: { id },
  });
  const result = await prisma.buyer.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteBuyerFromDB = async (id: string) => {
  // Check if the buyer exists before proceeding with deletion
  const buyer = await prisma.buyer.findUnique({
    where: { id },
  });

  if (!buyer) {
    throw new Error("Buyer not found");
  }

  // Perform the delete operation in a transaction
  const result = await prisma.$transaction(async (transactionClient:any) => {
    // Deleting the buyer record
    const buyerDeleteData = await transactionClient.buyer.delete({
      where: { id },
    });

    await transactionClient.user.delete({
      where: { email: buyerDeleteData.email },
    });

    return buyerDeleteData;
  });

  return result;
};
const softDeleteBuyerFromDB = async (id: string) => {
  // Check if the buyer exists before proceeding with deletion

  // Perform the delete operation in a transaction
  const result = await prisma.$transaction(async (transactionClient:any) => {
    // Deleting the buyer record
    const buyerDeleteData = await transactionClient.buyer.update({
      where: { id },
      data: { isDeleted: true },
    });

    await transactionClient.user.update({
      where: { email: buyerDeleteData.email },
      data: { status: UserStatus.DELETED },
    });

    return buyerDeleteData;
  });

  return result;
  
};

export const BuyerServices = {
  getAllBuyer,
  getSingleBuyerFromDB,
  updateBuyerDataFromDB,
  deleteBuyerFromDB,
  softDeleteBuyerFromDB,
};
