import status from "http-status";
import { sendResponse } from "../../../helpers/sendResponse";
import { catchAsync } from "../../../helpers/trycatch";
import { DoctorScheduleService } from "./doctorSchedule.service";
import { Request, Response } from "express";

const insertIntoDB = catchAsync(async (req: Request & { user?: any }, res: Response) => {

    const user = req.user;
    const result = await DoctorScheduleService.insertIntoDB(user, req.body);

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Doctor Schedule created successfully!",
        data: result
    });
});

export const DoctorScheduleController = {
    insertIntoDB
}