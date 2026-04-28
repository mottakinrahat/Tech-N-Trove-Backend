import status from "http-status";
import { catchAsync } from "../../../helpers/trycatch";
import { sendResponse } from "../../../helpers/sendResponse";
import { DiscountServices } from "./discount.services";

const createDiscount = catchAsync(async (req: any, res: any) => {
  const result = await DiscountServices.createDiscountIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: "Discount created successfully",
    data: result,
  });
});

const getAllDiscounts = catchAsync(async (_req: any, res: any) => {
  const result = await DiscountServices.getDiscountsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Discounts retrieved successfully",
    data: result,
  });
});

const getSingleDiscount = catchAsync(async (req: any, res: any) => {
  const { discountId } = req.params;
  const result = await DiscountServices.getSingleDiscountFromDB(discountId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Discount retrieved successfully",
    data: result,
  });
});

const updateDiscount = catchAsync(async (req: any, res: any) => {
  const { discountId } = req.params;
  const result = await DiscountServices.updateDiscountIntoDB(
    discountId,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Discount updated successfully",
    data: result,
  });
});

const deleteDiscount = catchAsync(async (req: any, res: any) => {
  const { discountId } = req.params;
  await DiscountServices.deleteDiscountFromDB(discountId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Discount deleted successfully",
    data: null,
  });
});

const validateDiscount = catchAsync(async (req: any, res: any) => {
  const { code } = req.body;
  const result = await DiscountServices.validateDiscountCode(code);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Discount code is valid",
    data: result,
  });
});

export const DiscountController = {
  createDiscount,
  getAllDiscounts,
  getSingleDiscount,
  updateDiscount,
  deleteDiscount,
  validateDiscount,
};
