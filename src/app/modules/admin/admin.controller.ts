import status from "http-status";
import { sendResponse } from "../../../helpers/sendResponse";
import { catchAsync } from "../../../helpers/trycatch";
import { pick } from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";
import { AdminServices } from "./admin.services";


const getAllAdminFromDB = catchAsync(async (req, res, next) => {
  const filter = pick(req.query, adminFilterableFields);
  const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
  const result = await AdminServices.getAllAdmin(filter, options);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Admin data retrieved successfully",
    meta: result?.meta,
    data: result?.data,
  });
});

const getSingleAdmin = catchAsync(async (req: any, res: any) => {
  const { id } = req.params;
  const result = await AdminServices.getSingleAdminFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Single data retrieved successfully",
    data: result,
  });
});

const updateAdminData = catchAsync(async (req: any, res: any) => {
  const { id } = req.params;
  const result = await AdminServices.updateAdminDataFromDB(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Admin data updated successfully",
    data: result,
  });
});

const deleteAdminData = catchAsync(async (req: any, res: any) => {
  const { id } = req.params;
  const result = await AdminServices.deleteAdminFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Admin data deleted successfully",
    data: result,
  });
});

const softDeleteAdminData = catchAsync(async (req: any, res: any) => {
  const { id } = req.params;
  const result = await AdminServices.softDeleteAdminFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Admin data softly deleted successfully",
    data: result,
  });
});

export const AdminController = {
  getAllAdminFromDB,
  getSingleAdmin,
  updateAdminData,
  deleteAdminData,
  softDeleteAdminData,
};
