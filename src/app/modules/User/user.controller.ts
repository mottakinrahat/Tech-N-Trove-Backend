import { Request, Response } from "express";
import { UserServices } from "./user.services";
import { catchAsync } from "../../../helpers/trycatch";
import { sendResponse } from "../../../helpers/sendResponse";
import { pick } from "../../../shared/pick";
import { userFilterableFields } from "./user.constant";
import status from "http-status";

const createAdminUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.createAdmin(req);
    res.status(200).json({
      success: true,
      message: "Admin user created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create admin user", //failed
      error: error,
    });
  }
};
const createDoctor = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.createDoctorIntoDB(req);
    res.status(200).json({
      success: true,
      message: "Doctor created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create Doctor",
      error: error,
    });
  }
};
const createPatient = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.createPatientIntoDB(req);
    res.status(200).json({
      success: true,
      message: "Patient created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create Patient",
      error: error,
    });
  }
};

const getAllUser = catchAsync(async (req, res, next) => {
  const filter = pick(req.query, userFilterableFields);
  const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
  const result = await UserServices.getAllUserFromDB(filter, options);

  sendResponse(res, {
    //for response
    success: true,
    statusCode: status.OK,
    message: "User data retrieved successfully",
    meta: result?.meta,
    data: result?.data,
  });
});
const changeProfileStatus = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await UserServices.changeProfileStatus(
    req.params.id as string,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "User data updated successfully",
    data: result,
  });
});
const getMyProfile = catchAsync(async (req, res) => {
  const result = await UserServices.getMyProfile(req?.user);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "profile retrieved successfully",
    data: result,
  });
});

const updateMyProfile = catchAsync(async (req, res) => {
  const result = await UserServices.updateMyProfile(
    req.user,
    req,
  );

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "User data updated successfully",
    data: result,
  });
});

export const UserController = {
  createAdminUser,
  createDoctor,
  createPatient,
  getAllUser,
  changeProfileStatus,
  getMyProfile,
  updateMyProfile,
};
