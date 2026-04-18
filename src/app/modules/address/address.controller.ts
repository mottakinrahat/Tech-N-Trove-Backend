import status from "http-status";
import { catchAsync } from "../../../helpers/trycatch";
import { sendResponse } from "../../../helpers/sendResponse";
import { AddressServices } from "./address.services";

const createAddress = catchAsync(async (req: any, res: any) => {
  const result = await AddressServices.createAddressIntoDB(req.user, req.body);
  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: "Address created successfully",
    data: result,
  });
});

const getMyAddresses = catchAsync(async (req: any, res: any) => {
  const result = await AddressServices.getMyAddressesFromDB(req.user);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Addresses retrieved successfully",
    data: result,
  });
});

const updateMyAddress = catchAsync(async (req: any, res: any) => {
  const result = await AddressServices.updateMyAddressFromDB(
    req.user,
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Address updated successfully",
    data: result,
  });
});

const deleteMyAddress = catchAsync(async (req: any, res: any) => {
  await AddressServices.deleteMyAddressFromDB(req.user, req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Address deleted successfully",
    data: null,
  });
});

const setDefaultAddress = catchAsync(async (req: any, res: any) => {
  const result = await AddressServices.setDefaultAddressIntoDB(
    req.user,
    req.params.id,
  );
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Default address updated successfully",
    data: result,
  });
});

export const AddressController = {
  createAddress,
  getMyAddresses,
  updateMyAddress,
  deleteMyAddress,
  setDefaultAddress,
};
