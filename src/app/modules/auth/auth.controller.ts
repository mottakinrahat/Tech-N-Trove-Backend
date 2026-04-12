import { Request, Response } from "express";
import { catchAsync } from "../../../helpers/trycatch";

import { sendResponse } from "../../../helpers/sendResponse";
import status from "http-status";
import { authServices } from "./auth.service";

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
  const { refreshToken } = req.cookies;
  const result = await authServices.refreshToken(refreshToken);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Access token generated successfully",
    data: result,
    // data:{
    //     accessToken:result.accessToken,
    //     needPasswordChange:result.needPasswordChange,

    // }
  });
});
const changePassword = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    console.log(req.user);
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
