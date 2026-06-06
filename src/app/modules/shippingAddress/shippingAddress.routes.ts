import express from "express";
import { UserRole } from "../../../../prisma/generated/prisma";
import { auth } from "../../middleWares/auth";
import validateRequest from "../../middleWares/validateRequest";
import { ShippingAddressController } from "./shippingAddress.controller";
import { ShippingAddressValidation } from "./shippingAddress.validation";

const router = express.Router();

router.post(
  "/",
  auth(UserRole.BUYER, UserRole.ADMIN, UserRole.MANAGER, UserRole.SUPER_ADMIN),
  validateRequest(
    ShippingAddressValidation.createShippingAddressValidationSchema,
  ),
  ShippingAddressController.createShippingAddress,
);

router.get(
  "/my-addresses",
  auth(UserRole.BUYER, UserRole.ADMIN, UserRole.MANAGER, UserRole.SUPER_ADMIN),
  ShippingAddressController.getMyShippingAddresses,
);

router.patch(
  "/:id",
  auth(UserRole.BUYER, UserRole.ADMIN, UserRole.MANAGER, UserRole.SUPER_ADMIN),
  validateRequest(
    ShippingAddressValidation.updateShippingAddressValidationSchema,
  ),
  ShippingAddressController.updateMyShippingAddress,
);

router.delete(
  "/:id",
  auth(UserRole.BUYER, UserRole.ADMIN, UserRole.MANAGER, UserRole.SUPER_ADMIN),
  ShippingAddressController.deleteMyShippingAddress,
);

export const shippingAddressRoutes = router;
