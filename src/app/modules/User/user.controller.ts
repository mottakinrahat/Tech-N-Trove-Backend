import { Request, Response } from "express";
import { UserServices } from "./user.services";
import { catchAsync } from "../../../helpers/trycatch";
import { sendResponse } from "../../../helpers/sendResponse";
import { pick } from "../../../shared/pick";
import { userFilterableFields } from "./user.constant";
import status from "http-status";

const createAdminUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.createAdmin(req);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Admin user created successfully",
    data: result,
  });
});

const createManager = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.createManagerIntoDB(req);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Manager created successfully",
    data: result,
  });
});

const createBuyer = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.createBuyerIntoDB(req);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Buyer created successfully",
    data: result,
  });
});

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
  createManager,
  createBuyer,
  getAllUser,
  changeProfileStatus,
  getMyProfile,
  updateMyProfile,
};
