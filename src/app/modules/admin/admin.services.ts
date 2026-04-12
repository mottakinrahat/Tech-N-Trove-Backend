
import { Admin, Prisma, UserStatus } from "../../../../prisma/generated/prisma";
import { calculatePagination } from "../../../helpers/paginationHelpers";
import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../interfaces/pagination";
import { adminSearchableFields } from "./admin.constant";
import { IAdminFilterRequest } from "./admin.interface";

const getAllAdmin = async (params: IAdminFilterRequest, options: IPaginationOptions) => {
  const { page, limit, sortBy, sortOrder, skip } = calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.AdminWhereInput[] = [];
  if (params.searchTerm) {
    andConditions.push({
      OR: adminSearchableFields.map((field) => ({
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
  const whereConditions: Prisma.AdminWhereInput = { AND: andConditions }; // Ensure consistent type
  const result = await prisma.admin.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      sortBy && sortOrder ? [{ [sortBy]: sortOrder }] : [{ name: "asc" }], // Fallback to 'name' for sorting if not provided
  });
  const total = await prisma.admin.count({ where: whereConditions });
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleAdminFromDB = async (id: string) => {
  const result = await prisma.admin.findUnique({
    where: {
      id,
    },
  });
  return result;
};
const updateAdminDataFromDB = async (id: string, data: Partial<Admin>) => {
  await prisma.admin.findUniqueOrThrow({
    where: { id },
  });
  const result = await prisma.admin.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteAdminFromDB = async (id: string) => {
  // Check if the admin exists before proceeding with deletion
  const admin = await prisma.admin.findUnique({
    where: { id },
  });

  if (!admin) {
    throw new Error("Admin not found");
  }

  // Perform the delete operation in a transaction
  const result = await prisma.$transaction(async (transactionClient:any) => {
    // Deleting the admin record
    const adminDeleteData = await transactionClient.admin.delete({
      where: { id },
    });

    await transactionClient.user.delete({
      where: { email: adminDeleteData.email },
    });

    return adminDeleteData;
  });

  return result;
};
const softDeleteAdminFromDB = async (id: string) => {
  // Check if the admin exists before proceeding with deletion

  // Perform the delete operation in a transaction
  const result = await prisma.$transaction(async (transactionClient:any) => {
    // Deleting the admin record
    const adminDeleteData = await transactionClient.admin.update({
      where: { id },
      data: { isDeleted: true },
    });

    await transactionClient.user.update({
      where: { email: adminDeleteData.email },
      data: { status: UserStatus.BLOCKED },
    });

    return adminDeleteData;
  });

  return result;
  
};

export const AdminServices = {
  getAllAdmin,
  getSingleAdminFromDB,
  updateAdminDataFromDB,
  deleteAdminFromDB,
  softDeleteAdminFromDB,
};
