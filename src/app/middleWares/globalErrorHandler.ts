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
    // Prisma record not found error (thrown by findUniqueOrThrow)
    if (err.code === "P2025") {
      statusCode = status.NOT_FOUND;
      message = "Record not found";
    }
  }

  res.status(statusCode).json({
    success: false,
    message,
    error: config.env === "development" ? error : {},
    stack: config.env === "development" ? err?.stack : undefined,
  });
};