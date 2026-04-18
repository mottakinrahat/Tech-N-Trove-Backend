import * as bcrypt from "bcrypt";
import { fileUploader } from "../../../helpers/fileUploader";
import { IPaginationOptions } from "../../interfaces/pagination";
import { userSearchableFields } from "./user.constant";
import {
  UserRole,
  Prisma,
  PrismaClient,
  UserStatus,
} from "../../../../prisma/generated/prisma";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
const prisma = new PrismaClient();
const createAdmin = async (req: any) => {

  const file = req.file;
  if (file) {
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(
      file?.path,
    );
    req.body.admin.profilePhoto = uploadToCloudinary?.url;
  }

  const hashedPassword: string = await bcrypt.hash(req.body.password, 12);

  const userData = {
    email: req.body.admin.email,
    password: hashedPassword,
    role: UserRole.ADMIN,
  };
  const result = await prisma.$transaction(async (transactionClient: any) => {
    await transactionClient.user.create({
      data: userData,
    });
    const createdAdminData = await transactionClient.admin.create({
      data: req.body.admin,
    });
    return createdAdminData;
  });
  return result;
};
const createManagerIntoDB = async (req: any) => {

  const file = req.file;
  if (file) {
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(
      file?.path,
    );
    req.body.manager.profilePhoto = uploadToCloudinary?.url;
  }
  const hashedPassword: string = await bcrypt.hash(req.body.password, 12);
  const userData = {
    email: req.body.manager.email,
    password: hashedPassword,
    role: UserRole.MANAGER,
  };
  const result = await prisma.$transaction(async (transactionClient: any) => {
    await transactionClient.user.create({
      data: userData,
    });
    const createdManagerData = await transactionClient.manager.create({
      data: req.body.manager,
    });
    return createdManagerData;
  });
  return result;
};
const createBuyerIntoDB = async (req: any) => {
  const file = req.file;
  if (file) {
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(
      file?.path,
    );
    req.body.buyer.profilePhoto = uploadToCloudinary?.url;
  }
  const hashedPassword: string = await bcrypt.hash(req.body.password, 12);
  const userData = {
    email: req.body.buyer.email,
    password: hashedPassword,
    role: UserRole.BUYER,
  };
  const result = await prisma.$transaction(async (transactionClient: any) => {
    await transactionClient.user.create({
      data: userData,
    });
    const createdBuyerData = await transactionClient.buyer.create({
      data: req.body.buyer,
    });
    return createdBuyerData;
  });
  return result;
};

const getAllUserFromDB = async (params: any, options: IPaginationOptions) => {
  const { page, limit, sortBy, sortOrder, skip } =
    paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = params;
  const andConditions: Prisma.UserWhereInput[] = [];
  if (params?.searchTerm) {
    andConditions.push({
      OR: userSearchableFields.map((field) => ({
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

  const whereConditions: Prisma.UserWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.user.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      sortBy && sortOrder ? [{ [sortBy]: sortOrder }] : [{ createdAt: "asc" }],
    select: {
      id: true,
      email: true,
      role: true,
      needPasswordChange: true,
      status: true,
      createdAt: true,
      updatedAt: true,
      admin: true,
      manager: true,
      buyer: true,
    },
  });
  const total = await prisma.user.count({ where: whereConditions });
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const changeProfileStatus = async (id: string, status: UserStatus) => {
  await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
  });
  const updateUserData = await prisma.user.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
  return updateUserData;
};

const getMyProfile = async (user: any) => {
  const userInfo = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
    select: {
      email: true,
      role: true,
      id: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  let profileInfo;
  if (userInfo?.role === UserRole.ADMIN) {
    profileInfo = await prisma.admin.findUnique({
      where: {
        email: userInfo.email,
      },
    });
  } else if (userInfo?.role === UserRole.MANAGER) {
    profileInfo = await prisma.manager.findUnique({
      where: {
        email: userInfo.email,
      },
    });
  } else if (userInfo?.role === UserRole.BUYER) {
    profileInfo = await prisma.buyer.findUnique({
      where: {
        email: userInfo.email,
      },
    });
  }
  return { ...userInfo, ...profileInfo };
};

const updateMyProfile = async (user: any, req: any) => {
  const userInfo = await prisma.user.findUnique({
    where: {
      email: user?.email,
      status: UserStatus.ACTIVE,
    },
  });

  const file = req.file;
  if (file) {
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(
      file?.path,
    );
    req.body.profilePhoto = uploadToCloudinary?.url;
  }

  let profileInfo;
  if (userInfo?.role === UserRole.ADMIN) {
    profileInfo = await prisma.admin.update({
      where: {
        email: userInfo.email,
      },
      data: req.body,
    });
  } else if (userInfo?.role === UserRole.MANAGER) {
    profileInfo = await prisma.manager.update({
      where: {
        email: userInfo.email,
      },
      data: req.body,
    });
  } else if (userInfo?.role === UserRole.BUYER) {
    profileInfo = await prisma.buyer.update({
      where: {
        email: userInfo.email,
      },
      data: req.body,
    });
  }
  return { ...userInfo, ...profileInfo };
};
export const UserServices = {
  createAdmin,
  createManagerIntoDB,
  createBuyerIntoDB,
  getAllUserFromDB,
  changeProfileStatus,
  getMyProfile,
  updateMyProfile,
};
