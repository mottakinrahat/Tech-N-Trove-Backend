import { Prisma, UserRole, UserStatus } from "../../../../prisma/generated/prisma";
import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../interfaces/pagination";
import { IManagerFilterRequest } from "./manager.interface";
import { managerSearchableFields } from "./manager.constants";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import ApiError from "../../errors/apiError";
import status from "http-status";

const getAllFromDB = async (filters: IManagerFilterRequest, options: IPaginationOptions) => {
  const { limit, page, skip, sortBy, sortOrder } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditions: Prisma.UserWhereInput[] = [
    { role: UserRole.MANAGER },
    { isDeleted: false },
  ];

  if (searchTerm) {
    andConditions.push({
      OR: managerSearchableFields.map((field) => ({
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

const getByIdFromDB = async (id: string) => {
  const result = await prisma.user.findFirst({
    where: { id, role: UserRole.MANAGER },
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
  if (!result) throw new ApiError(status.NOT_FOUND, "Manager not found");
  return result;
};

const updateIntoDB = async (id: string, data: { name?: string; contactNumber?: string }) => {
  await getByIdFromDB(id);
  return prisma.user.update({
    where: { id },
    data,
    select: {
      id: true, email: true, role: true, name: true,
      contactNumber: true, status: true, updatedAt: true, userInfo: true,
    },
  });
};

const deleteFromDB = async (id: string) => {
  await getByIdFromDB(id);
  return prisma.user.delete({ where: { id } });
};

const softDeleteFromDB = async (id: string) => {
  await getByIdFromDB(id);
  return prisma.user.update({
    where: { id },
    data: { isDeleted: true, status: UserStatus.BLOCKED },
  });
};

export const ManagerServices = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  softDeleteFromDB,
};