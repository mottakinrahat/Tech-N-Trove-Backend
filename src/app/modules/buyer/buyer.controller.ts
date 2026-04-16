import status from "http-status";
import { sendResponse } from "../../../helpers/sendResponse";
import { catchAsync } from "../../../helpers/trycatch";
import { pick } from "../../../shared/pick";
import { buyerFilterableFields } from "./buyer.constant";
import { BuyerServices } from "./buyer.services";


const getAllBuyerFromDB = catchAsync(async (req, res, next) => {
  const filter = pick(req.query, buyerFilterableFields);
  const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
  const result = await BuyerServices.getAllBuyer(filter, options);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Buyer data retrieved successfully",
    meta: result?.meta,
    data: result?.data,
  });
});

const getSingleBuyer = catchAsync(async (req: any, res: any) => {
  const { id } = req.params;
  const result = await BuyerServices.getSingleBuyerFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Single data retrieved successfully",
    data: result,
  });
});

const updateBuyerData = catchAsync(async (req: any, res: any) => {
  const { id } = req.params;
  const result = await BuyerServices.updateBuyerDataFromDB(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Buyer data updated successfully",
    data: result,
  });
});

const deleteBuyerData = catchAsync(async (req: any, res: any) => {
  const { id } = req.params;
  const result = await BuyerServices.deleteBuyerFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Buyer data deleted successfully",
    data: result,
  });
});

const softDeleteBuyerData = catchAsync(async (req: any, res: any) => {
  const { id } = req.params;
  const result = await BuyerServices.softDeleteBuyerFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Buyer data softly deleted successfully",
    data: result,
  });
});

export const BuyerController = {
  getAllBuyerFromDB,
  getSingleBuyer,
  updateBuyerData,
  deleteBuyerData,
  softDeleteBuyerData,
};
