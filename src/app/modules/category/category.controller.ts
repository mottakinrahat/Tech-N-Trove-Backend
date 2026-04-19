import status from "http-status";
import { catchAsync } from "../../../helpers/trycatch";
import { sendResponse } from "../../../helpers/sendResponse";
import { CategoryServices } from "./category.services";

const createCategory = catchAsync(async (req: any, res: any) => {
  const result = await CategoryServices.createCategoryIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: "Category created successfully",
    data: result,
  });
});

const getAllCategories = catchAsync(async (_req: any, res: any) => {
  const result = await CategoryServices.getCategoriesFromDB();

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Categories retrieved successfully",
    data: result,
  });
});

const getSingleCategory = catchAsync(async (req: any, res: any) => {
  const { categoryId } = req.params;
  const result = await CategoryServices.getSingleCategoryFromDB(categoryId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Category retrieved successfully",
    data: result,
  });
});

const updateCategory = catchAsync(async (req: any, res: any) => {
  const { categoryId } = req.params;
  const result = await CategoryServices.updateCategoryIntoDB(
    categoryId,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Category updated successfully",
    data: result,
  });
});

const deleteCategory = catchAsync(async (req: any, res: any) => {
  const { categoryId } = req.params;
  await CategoryServices.deleteCategoryFromDB(categoryId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Category deleted successfully",
    data: null,
  });
});

export const CategoryController = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
