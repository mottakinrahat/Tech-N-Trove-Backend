import { Request, Response } from "express";
import status from "http-status";
import { sendResponse } from "../../../helpers/sendResponse";
import { catchAsync } from "../../../helpers/trycatch";
import { PaymentServices } from "./payment.services";

const initPayment = catchAsync(async (req: Request, res: Response) => {
  const { orderId } = req.body;
  const result = await PaymentServices.initPayment(orderId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Payment initialized successfully",
    data: result
  });
});

const confirmation = catchAsync(async (req: Request, res: Response) => {
    const { transactionId, status } = req.query;
    const result = await PaymentServices.confirmationService(transactionId as string, status as string);
    res.send(result);
});

export const paymentController = {
    initPayment,
    confirmation
}