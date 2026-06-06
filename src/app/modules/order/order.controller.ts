import { Request, Response } from "express";
import status from "http-status";
import { sendResponse } from "../../../helpers/sendResponse";
import { catchAsync } from "../../../helpers/trycatch";
import { OrderServices } from "./order.services";

const createOrder = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const result = await OrderServices.createOrder(req.user.email, req.body);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Order created successfully",
    data: result,
  });
});

const getMyOrders = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const result = await OrderServices.getOrdersForUser(req.user.email);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Orders retrieved successfully",
    data: result,
  });
});

const getOrderById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await OrderServices.getOrderById(id as string);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Order retrieved successfully",
    data: result,
  });
});

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderServices.getAllOrders();
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "All orders retrieved successfully",
    data: result,
  });
});

const updateOrderStatus = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status: orderStatus } = req.body;
  const result = await OrderServices.updateOrderStatus(id as string, orderStatus);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Order status updated successfully",
    data: result,
  });
});

const confirmOrderWithOtp = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { otp } = req.body;
  const result = await OrderServices.confirmOrderWithOtp(id as string, otp);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Order confirmed successfully",
    data: result,
  });
});

export const OrderController = {
  createOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
  confirmOrderWithOtp,
};
