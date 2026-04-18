import express from "express";
import { BuyerController } from "./buyer.controller";
import validateRequest from "../../middleWares/validateRequest";
import { BuyerValidation } from "./buyer.validation";
import { auth } from "../../middleWares/auth";
import { UserRole } from "../../../../prisma/generated/prisma";

const router = express.Router();


router.get("/",auth(UserRole.ADMIN,UserRole.BUYER), BuyerController.getAllBuyerFromDB);
router.get("/:id",auth(UserRole.ADMIN,UserRole.BUYER), BuyerController.getSingleBuyer);
router.patch(
  "/:id",
  validateRequest(BuyerValidation.updateBuyerZodSchema),
  BuyerController.updateBuyerData
);
router.delete("/:id",auth(UserRole.ADMIN,UserRole.BUYER), BuyerController.deleteBuyerData);
router.delete("/soft/:id",auth(UserRole.ADMIN,UserRole.BUYER), BuyerController.softDeleteBuyerData);

export const buyerRoutes = router;
