import { NextFunction, Request, Response } from "express";
import status from "http-status";
import ApiError from "../errors/apiError";
import config from "../../config";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode: number = status.INTERNAL_SERVER_ERROR;
  let message = err?.message || "Something went wrong";
  let error = err;

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err?.name === "PrismaClientKnownRequestError") {
    if (err.code === "P2025") {
      statusCode = status.NOT_FOUND;
      message = "Record not found";
    } else if (err.code === "P2002") {
      statusCode = status.CONFLICT;
      const target = err.meta?.target as string[] | undefined;
      if (target?.includes("email")) {
        message = "This email already exists. Please login.";
      } else {
        message = "Duplicate value violates unique constraint";
      }
    }
  }

  res.status(statusCode).json({
    success: false,
    message,
    error: config.env === "development" ? error : {},
    stack: config.env === "development" ? err?.stack : undefined,
  });
};