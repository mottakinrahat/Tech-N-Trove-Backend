import status from "http-status";
import { sendResponse } from "../../../helpers/sendResponse";
import { catchAsync } from "../../../helpers/trycatch";
import { SpecialitiesServices } from "./specialities.services";

const createSpecialties = catchAsync(async (req, res) => {
  const result = await SpecialitiesServices.createSpecialtiesIntoDB(req);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Specialties created successfully",
    data: result,
  });
});

export const specialtiesController = {
  createSpecialties,
};
