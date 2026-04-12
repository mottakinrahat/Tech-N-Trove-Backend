import { Request, Response } from "express";
import { catchAsync } from "../../../helpers/trycatch";
import { sendResponse } from "../../../helpers/sendResponse";
import status from "http-status";
import { pick } from "../../../shared/pick";
import { ScheduleService } from "./schedule.service";

const inserIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ScheduleService.inserIntoDB(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Schedule created successfully!",
    data: result,
  });
});

const getAllFromDB = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const filters = pick(req.query, ["startDate", "endDate"]);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);

    const result = await ScheduleService.getAllFromDB(
      filters,
      options,
    );

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Schedule fetched successfully!",
      data: result,
    });
  },
);

// const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const result = await ScheduleService.getByIdFromDB(id);
//     sendResponse(res, {
//         statusCode: status.OK,
//         success: true,
//         message: 'Schedule retrieval successfully',
//         data: result,
//     });
// });

// const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const result = await ScheduleService.deleteFromDB(id);
//     sendResponse(res, {
//         statusCode: status.OK,
//         success: true,
//         message: 'Schedule deleted successfully',
//         data: result,
//     });
// });

export const ScheduleController = {
  inserIntoDB,
  getAllFromDB,
  // getByIdFromDB,
  // deleteFromDB
};
