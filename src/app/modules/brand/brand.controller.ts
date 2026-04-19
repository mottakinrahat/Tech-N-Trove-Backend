import status from "http-status";
import { catchAsync } from "../../../helpers/trycatch";
import { sendResponse } from "../../../helpers/sendResponse";
import { BrandServices } from "./brand.services";

const createBrand = catchAsync(async (req: any, res: any) => {


  const result = await BrandServices.createBrandIntoDB(req);

  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: "Brand created successfully",
    data: result,
  });
});

const getAllBrands = catchAsync(async (_req: any, res: any) => {
  const result = await BrandServices.getBrandsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Brands retrieved successfully",
    data: result,
  });
});

const getSingleBrand = catchAsync(async (req: any, res: any) => {
  const { brandId } = req.params;
  const result = await BrandServices.getSingleBrandFromDB(brandId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Brand retrieved successfully",
    data: result,
  });
});

const updateBrand = catchAsync(async (req: any, res: any) => {
  const { brandId } = req.params;
  const body = {
    brandName: req.body.brandName,
    description: req.body.description,
  };

  // Remove undefined fields so we don't accidentally null-out values
  const filteredBody = Object.fromEntries(
    Object.entries(body).filter(([, v]) => v !== undefined),
  );

  const result = await BrandServices.updateBrandIntoDB(
    brandId,
    filteredBody,
    req.file,
  );

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Brand updated successfully",
    data: result,
  });
});

const deleteBrand = catchAsync(async (req: any, res: any) => {
  const { brandId } = req.params;
  await BrandServices.deleteBrandFromDB(brandId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Brand deleted successfully",
    data: null,
  });
});

export const BrandController = {
  createBrand,
  getAllBrands,
  getSingleBrand,
  updateBrand,
  deleteBrand,
};
