import * as bcrypt from "bcrypt";
import { triggerN8NWebhook } from "../../middleWares/n8n.services";
import { fileUploader } from "../../../helpers/fileUploader";
import { IPaginationOptions } from "../../interfaces/pagination";
import { userSearchableFields } from "./user.constant";
import { UserRole, Prisma, UserStatus } from "../../../../prisma/generated/prisma";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import ApiError from "../../errors/apiError";
import status from "http-status";
import prisma from "../../../shared/prisma";

const ensureEmailIsAvailable = async (email: string) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new ApiError(status.CONFLICT, "This email already exists. Please login.");
  }
};

const createUserWithRole = async (req: any, role: UserRole) => {
  const file = req.file;
  let profilePhotoUrl = req.body.profilePhoto || req.body.userInfo?.profilePhoto;
  if (file) {
    const uploaded = await fileUploader.uploadToCloudinary(file?.path);
    profilePhotoUrl = uploaded?.url;
  }

  const { email, password, name, contactNumber, userInfo } = req.body;
  await ensureEmailIsAvailable(email);

  const hashedPassword = await bcrypt.hash(password, 12);

  const result = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role,
      name,
      contactNumber,
      needPasswordChange: role === UserRole.ADMIN || role === UserRole.MANAGER,
      ...(profilePhotoUrl || userInfo
        ? {
            userInfo: {
              create: {
                profilePhoto: profilePhotoUrl,
                bio: userInfo?.bio,
                line1: userInfo?.line1 ?? userInfo?.addressLine1,
                line2: userInfo?.line2 ?? userInfo?.addressLine2,
                landmark: userInfo?.landmark,
                city: userInfo?.city,
                state: userInfo?.state,
                postalCode: userInfo?.postalCode,
                country: userInfo?.country ?? "Bangladesh",
              },
            },
          }
        : {}),
    },
    select: {
      id: true,
      email: true,
      role: true,
      name: true,
      contactNumber: true,
      status: true,
      createdAt: true,
      userInfo: true,
    },
  });

  triggerN8NWebhook("user-registered", { name: result.name, email, role });

  return result;
};

const createAdmin = (req: any) => createUserWithRole(req, UserRole.ADMIN);
const createManagerIntoDB = (req: any) => createUserWithRole(req, UserRole.MANAGER);
const createBuyerIntoDB = (req: any) => createUserWithRole(req, UserRole.BUYER);

const getAllUserFromDB = async (params: any, options: IPaginationOptions) => {
  const { page, limit, sortBy, sortOrder, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = params;
  const andConditions: Prisma.UserWhereInput[] = [{ isDeleted: false }];

  if (searchTerm) {
    andConditions.push({
      OR: userSearchableFields.map((field) => ({
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
      orderBy: sortBy && sortOrder ? [{ [sortBy]: sortOrder }] : [{ createdAt: "asc" }],
      select: {
        id: true,
        email: true,
        role: true,
        name: true,
        contactNumber: true,
        needPasswordChange: true,
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

const changeProfileStatus = async (id: string, newStatus: UserStatus) => {
  await prisma.user.findUniqueOrThrow({ where: { id } });
  return prisma.user.update({ where: { id }, data: { status: newStatus } });
};

const getMyProfile = async (user: any) => {
  return prisma.user.findUnique({
    where: { email: user.email },
    select: {
      id: true,
      email: true,
      role: true,
      name: true,
      contactNumber: true,
      status: true,
      needPasswordChange: true,
      isDeleted: true,
      createdAt: true,
      updatedAt: true,
      userInfo: true,
    },
  });
};

const updateMyProfile = async (user: any, req: any) => {
  const userRecord = await prisma.user.findUnique({
    where: { email: user?.email, status: UserStatus.ACTIVE },
    select: { id: true },
  });

  if (!userRecord) throw new ApiError(status.NOT_FOUND, "User not found");

  const file = req.file;
  let profilePhotoUrl = req.body.profilePhoto;
  if (file) {
    const uploaded = await fileUploader.uploadToCloudinary(file?.path);
    profilePhotoUrl = uploaded?.url;
  }

  const { name, contactNumber, userInfo } = req.body;

  const updateData: any = {};
  if (name !== undefined) updateData.name = name;
  if (contactNumber !== undefined) updateData.contactNumber = contactNumber;

  const userInfoData: any = {};
  if (profilePhotoUrl !== undefined) userInfoData.profilePhoto = profilePhotoUrl;
  if (userInfo?.bio !== undefined) userInfoData.bio = userInfo.bio;
  if (userInfo?.line1 !== undefined) userInfoData.line1 = userInfo.line1;
  if (userInfo?.line2 !== undefined) userInfoData.line2 = userInfo.line2;
  if (userInfo?.landmark !== undefined) userInfoData.landmark = userInfo.landmark;
  if (userInfo?.city !== undefined) userInfoData.city = userInfo.city;
  if (userInfo?.state !== undefined) userInfoData.state = userInfo.state;
  if (userInfo?.postalCode !== undefined) userInfoData.postalCode = userInfo.postalCode;
  if (userInfo?.country !== undefined) userInfoData.country = userInfo.country;

  if (Object.keys(userInfoData).length > 0) {
    updateData.userInfo = {
      upsert: {
        create: userInfoData,
        update: userInfoData,
      },
    };
  }

  return prisma.user.update({
    where: { id: userRecord.id },
    data: updateData,
    select: {
      id: true,
      email: true,
      role: true,
      name: true,
      contactNumber: true,
      status: true,
      updatedAt: true,
      userInfo: true,
    },
  });
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