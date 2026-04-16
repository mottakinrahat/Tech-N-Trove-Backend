import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";
import { auth } from "../../middleWares/auth";
import { UserRole } from "../../../../prisma/generated/prisma";
import { fileUploader } from "../../../helpers/fileUploader";
import { UserValidation } from "./user.validation";

const router = express.Router();

router.get(
  "/me",
  auth(UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
  UserController.getMyProfile,
);
router.post(
  "/create-admin",
  
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    return UserController.createAdminUser(req, res);
  },
); //

router.post(
  "/create-doctor",
  // auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createDoctorValidationSchema.parse(
      JSON.parse(req.body.data),
    );
    return UserController.createDoctor(req, res);
  },
); //
router.post(
  "/create-patient",
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createPatientValidationSchema.parse(
      JSON.parse(req.body.data),
    );
    return UserController.createPatient(req, res); //controller for creating patient
  },
); //
router.get(
  "/",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  UserController.getAllUser,
);

router.patch(
  "/:id/status",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  UserController.changeProfileStatus,
);
router.patch(
  "/update-my-profile",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body=JSON.parse(req.body.data)
    return UserController.updateMyProfile(req, res,next);
  }
);
export const userRoutes = router;
