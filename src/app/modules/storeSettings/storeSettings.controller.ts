import status from "http-status";
import { catchAsync } from "../../../helpers/trycatch";
import { sendResponse } from "../../../helpers/sendResponse";
import { StoreSettingsServices } from "./storeSettings.services";

const getSettings = catchAsync(async (_req: any, res: any) => {
  const result = await StoreSettingsServices.getSettingsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Store settings retrieved successfully",
    data: result,
  });
});

const upsertSettings = catchAsync(async (req: any, res: any) => {
  const result = await StoreSettingsServices.upsertSettingsIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Store settings updated successfully",
    data: result,
  });
});

export const StoreSettingsController = {
  getSettings,
  upsertSettings,
};
