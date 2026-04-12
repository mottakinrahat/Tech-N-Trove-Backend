import express, { NextFunction, Request, Response } from "express";
import { specialtiesController } from "./specialities.controller";
import { fileUploader } from "../../../helpers/fileUploader";
import { specialtiesValidation } from "./specialties.validation";
const router = express.Router();

router.post(
  "/createSpecialties",
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = specialtiesValidation.specialitiesValidation.parse(JSON.parse(req.body.data))
    return specialtiesController.createSpecialties(req, res, next);
  },
);
export const specialtiesRoutes = router;
