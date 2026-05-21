import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";
import { auth } from "../../middleWares/auth";
import { UserRole } from "../../../../prisma/generated/prisma";
import { fileUploader } from "../../../helpers/fileUploader";
import { UserValidation } from "./user.validation";

const router = express.Router();

router.get(
  "/me",
  auth(UserRole.ADMIN, UserRole.BUYER, UserRole.MANAGER),
  UserController.getMyProfile,
);
router.post(
  "/create-admin",
  
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    return UserController.createAdminUser(req, res, next);
  },
); //

router.post(
  "/create-manager",
  
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    return UserController.createManager(req, res, next);
  },
); //
router.post(
  "/create-buyer",
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createBuyerValidationSchema.parse(
      JSON.parse(req.body.data),
    );
    return UserController.createBuyer(req, res, next);
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
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.BUYER, UserRole.MANAGER),
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body=JSON.parse(req.body.data)
    return UserController.updateMyProfile(req, res,next);
  }
);
export const userRoutes = router;
