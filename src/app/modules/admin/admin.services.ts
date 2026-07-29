import { Prisma, UserRole, UserStatus } from "../../../../prisma/generated/prisma";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../interfaces/pagination";
import { adminSearchableFields } from "./admin.constant";
import { IAdminFilterRequest } from "./admin.interface";
import ApiError from "../../errors/apiError";
import status from "http-status";

const getAllAdmin = async (params: IAdminFilterRequest, options: IPaginationOptions) => {
  const { page, limit, sortBy, sortOrder, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.UserWhereInput[] = [
    { role: UserRole.ADMIN },
    { isDeleted: false },
  ];

  if (searchTerm) {
    andConditions.push({
      OR: adminSearchableFields.map((field) => ({
        [field]: { contains: searchTerm, mode: "insensitive" },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: { equals: filterData[key as keyof typeof filterData] },
      })),
    });
  }

  const whereConditions: Prisma.UserWhereInput = { AND: andConditions };

  const [result, total] = await prisma.$transaction([
    prisma.user.findMany({
      where: whereConditions,
      skip,
      take: limit,
      orderBy: sortBy && sortOrder ? [{ [sortBy]: sortOrder }] : [{ name: "asc" }],
      select: {
        id: true,
        email: true,
        role: true,
        name: true,
        contactNumber: true,
        status: true,
        isDeleted: true,
        createdAt: true,
        updatedAt: true,
        userInfo: true,
      },
    }),
    prisma.user.count({ where: whereConditions }),
  ]);

  return { meta: { page, limit, total }, data: result };
};

const getSingleAdminFromDB = async (id: string) => {
  const result = await prisma.user.findFirst({
    where: { id, role: UserRole.ADMIN },
    select: {
      id: true,
      email: true,
      role: true,
      name: true,
      contactNumber: true,
      status: true,
      isDeleted: true,
      createdAt: true,
      updatedAt: true,
      userInfo: true,
    },
  });
  if (!result) throw new ApiError(status.NOT_FOUND, "Admin not found");
  return result;
};

const updateAdminDataFromDB = async (id: string, data: { name?: string; contactNumber?: string }) => {
  await getSingleAdminFromDB(id);
  return prisma.user.update({
    where: { id },
    data,
    select: {
      id: true, email: true, role: true, name: true,
      contactNumber: true, status: true, updatedAt: true, userInfo: true,
    },
  });
};

const deleteAdminFromDB = async (id: string) => {
  await getSingleAdminFromDB(id);
  return prisma.user.delete({ where: { id } });
};

const softDeleteAdminFromDB = async (id: string) => {
  await getSingleAdminFromDB(id);
  return prisma.user.update({
    where: { id },
    data: { isDeleted: true, status: UserStatus.BLOCKED },
  });
};

export const AdminServices = {
  getAllAdmin,
  getSingleAdminFromDB,
  updateAdminDataFromDB,
  deleteAdminFromDB,
  softDeleteAdminFromDB,
};