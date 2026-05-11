import express from "express";
import { UserRole } from "../../../../prisma/generated/prisma";
import { auth } from "../../middleWares/auth";
import validateRequest from "../../middleWares/validateRequest";
import { DiscountController } from "./discount.controller";
import { DiscountValidation } from "./discount.validation";

const router = express.Router();

const adminAuth = auth(UserRole.ADMIN, UserRole.SUPER_ADMIN);
const userAuth = auth(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.BUYER);

// Admin-only routes
router.post(
  "/",
  adminAuth,
  validateRequest(DiscountValidation.createDiscount),
  DiscountController.createDiscount,
);

router.get("/", DiscountController.getAllDiscounts);

router.get("/:discountId", adminAuth, DiscountController.getSingleDiscount);

router.patch(
  "/:discountId",
  adminAuth,
  validateRequest(DiscountValidation.updateDiscount),
  DiscountController.updateDiscount,
);

router.delete("/:discountId", adminAuth, DiscountController.deleteDiscount);

// User route for validating code
router.post(
  "/validate",
  userAuth,
  DiscountController.validateDiscount,
);

export const discountRoutes = router;
