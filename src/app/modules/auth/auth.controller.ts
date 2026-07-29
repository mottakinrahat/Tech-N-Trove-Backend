import { Request, Response } from "express";
import { catchAsync } from "../../../helpers/trycatch";
import { sendResponse } from "../../../helpers/sendResponse";
import status from "http-status";
import { authServices } from "./auth.service";
import ApiError from "../../errors/apiError";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await authServices.loginUser(req.body);
  const { refreshToken } = result;
  res.cookie("refreshToken", refreshToken, {
    secure: true,
    httpOnly: true,
  });
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "user logged in successfully",
    data: {
      accessToken: result.accessToken,
      needPasswordChange: result.needPasswordChange,
    },
  });
});
const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const token = req.cookies?.refreshToken || req.body?.refreshToken;
  if (!token) {
    throw new ApiError(status.BAD_REQUEST, "Refresh token is required");
  }
  const result = await authServices.refreshToken(token);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Access token generated successfully",
    data: result,
  });
});
const changePassword = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {

    const result = await authServices.changePassword(req?.user, req?.body);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Password reset successfully",
      data: result,
      // data:{
      //     accessToken:result.accessToken,
      //     needPasswordChange:result.needPasswordChange,

      // }
    });
  },
);
const forgotPassword = catchAsync(async (req: Request, res: Response) => {
  const result = await authServices.forgotPassword(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Password updated successfully",
    data: result,
    // data:{
    //     accessToken:result.accessToken,
    //     needPasswordChange:result.needPasswordChange,

    // }
  });
});
const resetPassword = catchAsync(async (req: Request, res: Response) => {
    const token=req.headers.authorization||" ";
  const result = await authServices.resetPassword(token,req.body);
   sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Password reset successfully",
    data: result,

  });
});
export const authController = {
  loginUser,
  refreshToken,
  changePassword,
  forgotPassword,
  resetPassword,
};
