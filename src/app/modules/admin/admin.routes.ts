import express from "express";
import { AdminController } from "./admin.controller";
import validateRequest from "../../middleWares/validateRequest";
import { AdminValidation } from "./admin.validation";
import { auth } from "../../middleWares/auth";
import { UserRole } from "../../../../prisma/generated/prisma";

const router = express.Router();


router.get("/",auth(UserRole.ADMIN,UserRole.SUPER_ADMIN), AdminController.getAllAdminFromDB);
router.get("/:id",auth(UserRole.ADMIN,UserRole.SUPER_ADMIN), AdminController.getSingleAdmin);
router.patch(
  "/:id",
  validateRequest(AdminValidation.updateAdminZodSchema),
  AdminController.updateAdminData
);
router.delete("/:id", AdminController.deleteAdminData);
router.delete("/soft/:id", AdminController.softDeleteAdminData);

export const adminRoutes = router;
