import { Request, Response } from "express";
import status from "http-status";
import { catchAsync } from "../../../helpers/trycatch";
import { sendResponse } from "../../../helpers/sendResponse";
import { ShippingAddressServices } from "./shippingAddress.services";

type AuthenticatedRequest = Request & {
  user?: {
    email?: string;
    role?: string;
  };
};

const createShippingAddress = catchAsync(async (req: AuthenticatedRequest, res: Response) => {
  const result = await ShippingAddressServices.createShippingAddressIntoDB(req?.user?.email, req.body);
  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: "Shipping address created successfully",
    data: result,
  });
});

const getMyShippingAddresses = catchAsync(async (req: AuthenticatedRequest, res: Response) => {
  const result = await ShippingAddressServices.getMyShippingAddressesFromDB(req?.user?.email);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Shipping addresses retrieved successfully",
    data: result,
  });
});

const updateMyShippingAddress = catchAsync(async (req: AuthenticatedRequest, res: Response) => {
  const result = await ShippingAddressServices.updateMyShippingAddressFromDB(
    req?.user?.email,
    req.params.id as string,
    req.body,
  );
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Shipping address updated successfully",
    data: result,
  });
});

const deleteMyShippingAddress = catchAsync(async (req: AuthenticatedRequest, res: Response) => {
  await ShippingAddressServices.deleteMyShippingAddressFromDB(req?.user?.email, req.params.id as string);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Shipping address deleted successfully",
    data: null,
  });
});

export const ShippingAddressController = {
  createShippingAddress,
  getMyShippingAddresses,
  updateMyShippingAddress,
  deleteMyShippingAddress,
};
