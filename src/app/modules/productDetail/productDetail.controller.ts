import status from "http-status";
import { catchAsync } from "../../../helpers/trycatch";
import { sendResponse } from "../../../helpers/sendResponse";
import { ProductDetailServices } from "./productDetail.services";

const createDetail = catchAsync(async (req: any, res: any) => {
  const { productId } = req.params;
  const result = await ProductDetailServices.createDetailIntoDB(productId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: "Product detail created successfully",
    data: result,
  });
});

const getDetailsByProduct = catchAsync(async (req: any, res: any) => {
  const { productId } = req.params;
  const result = await ProductDetailServices.getDetailsByProductFromDB(productId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Product details retrieved successfully",
    data: result,
  });
});

const getSingleDetail = catchAsync(async (req: any, res: any) => {
  const { productId, detailId } = req.params;
  const result = await ProductDetailServices.getSingleDetailFromDB(productId, detailId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Product detail retrieved successfully",
    data: result,
  });
});

const updateDetail = catchAsync(async (req: any, res: any) => {
  const { productId, detailId } = req.params;
  const result = await ProductDetailServices.updateDetailIntoDB(productId, detailId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Product detail updated successfully",
    data: result,
  });
});

const deleteDetail = catchAsync(async (req: any, res: any) => {
  const { productId, detailId } = req.params;
  await ProductDetailServices.deleteDetailFromDB(productId, detailId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Product detail deleted successfully",
    data: null,
  });
});

export const ProductDetailController = {
  createDetail,
  getDetailsByProduct,
  getSingleDetail,
  updateDetail,
  deleteDetail,
};
