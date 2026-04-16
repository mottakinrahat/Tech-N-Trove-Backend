import express from "express";
import { BuyerController } from "./buyer.controller";
import validateRequest from "../../middleWares/validateRequest";
import { BuyerValidation } from "./buyer.validation";
import { auth } from "../../middleWares/auth";
import { UserRole } from "../../../../prisma/generated/prisma";

const router = express.Router();


router.get("/",auth(UserRole.ADMIN), BuyerController.getAllBuyerFromDB);
router.get("/:id",auth(UserRole.ADMIN), BuyerController.getSingleBuyer);
router.patch(
  "/:id",
  validateRequest(BuyerValidation.updateBuyerZodSchema),
  BuyerController.updateBuyerData
);
router.delete("/:id", BuyerController.deleteBuyerData);
router.delete("/soft/:id", BuyerController.softDeleteBuyerData);

export const buyerRoutes = router;
