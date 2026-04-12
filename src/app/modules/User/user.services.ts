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
  console.log(userData);
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
const createDoctorIntoDB = async (req: any) => {
  const file = req.file;
  if (file) {
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(
      file?.path,
    );
    req.body.doctor.profilePhoto = uploadToCloudinary?.url;
  }
  const hashedPassword: string = await bcrypt.hash(req.body.password, 12);
  const userData = {
    email: req.body.doctor.email,
    password: hashedPassword,
    role: UserRole.DOCTOR,
  };
  const result = await prisma.$transaction(async (transactionClient: any) => {
    await transactionClient.user.create({
      data: userData,
    });
    const createdDoctorData = await transactionClient.doctor.create({
      data: req.body.doctor,
    });
    return createdDoctorData;
  });
  return result;
};

const createPatientIntoDB = async (req: any) => {
  const file = req.file;

  if (file) {
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(
      file?.path,
    );
    req.body.patient.profilePhoto = uploadToCloudinary?.url;
  }
  const hashedPassword: string = await bcrypt.hash(req.body.password, 12);
  const userData = {
    email: req.body.patient.email,
    password: hashedPassword,
    role: UserRole.PATIENT,
  };
  const result = await prisma.$transaction(async (transactionClient: any) => {
    await transactionClient.user.create({
      data: userData,
    });
    const createdPatientData = await transactionClient.Patient.create({
      data: req.body.patient,
    });
    return createdPatientData;
  });
  return result;
};

const getAllUserFromDB = async (params: any, options: IPaginationOptions) => {
  const { page, limit, sortBy, sortOrder, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = params;
  const andConditions: Prisma.UserWhereInput[] = [];
  console.log(filterData);
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

  // Apply the filter with the search term
  const whereConditions: Prisma.UserWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {}; // Ensure consistent type
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
      doctor: true,
      patient: true,
      // Fallback to 'name' for sorting if not provided
    },
    // include:{

    // }
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

const changeProfileStatus = async (id: string, status: UserRole) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
  });
  const updateUserData = await prisma.user.update({
    where: {
      id,
    },
    data: status,
  });
  return updateUserData; //update Data
};

const getMyProfile = async (user: any) => {
  const userInfo = await prisma.user.findUnique({
    //find unique
    where: {
      email: user.email, //checked by email
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
  if (userInfo?.role === UserRole.SUPER_ADMIN) {
    profileInfo = await prisma.admin.findUnique({
      where: {
        email: userInfo?.email,
      },
    });
  } else if (userInfo?.role === UserRole.ADMIN) {
    profileInfo = await prisma.admin.findUnique({
      where: {
        email: userInfo?.email,
      },
    });
  } else if (userInfo?.role === UserRole.PATIENT) {
    profileInfo = await prisma.patient.findUnique({
      where: {
        email: userInfo?.email,
      },
    });
  } else if (userInfo?.role === UserRole.DOCTOR) {
    profileInfo = await prisma.doctor.findUnique({
      where: {
        email: userInfo?.email,
      },
    });
  }
  return { ...userInfo, ...profileInfo };
};

const updateMyProfile = async (user:any, req: any) => {
  const userInfo = await prisma.user.findUnique({
    where:{
      email: user?.email,
      status:UserStatus.ACTIVE
    }
  })

 const file=req.file;
  if(file){
    const uploadToCloudinary=await fileUploader.uploadToCloudinary(file?.path);
    req.body.profilePhoto=uploadToCloudinary?.url;
  }

let profileInfo;
  if (userInfo?.role === UserRole.SUPER_ADMIN) {
    profileInfo = await prisma.admin.update({
      where: {
        email: userInfo?.email,
      },
      data: req.body,
    });
  } else if (userInfo?.role === UserRole.ADMIN) {
    profileInfo = await prisma.admin.update({
      where: {
        email: userInfo?.email,
      },
      data: req.body,
    });
  }
  
  else if (userInfo?.role === UserRole.PATIENT) {
    profileInfo = await prisma.patient.update({
      where: {
        email: userInfo?.email,
      },
      data: req.body,
    });
  } else if (userInfo?.role === UserRole.DOCTOR) {
    profileInfo = await prisma.doctor.update({
      where: {
        email: userInfo?.email,
      },
      data: req.body,
    });
  }
  return { ...userInfo, ...profileInfo };

};
export const UserServices = {
  createAdmin,
  createDoctorIntoDB,
  createPatientIntoDB,
  getAllUserFromDB,
  changeProfileStatus,
  getMyProfile,
  updateMyProfile,
};
