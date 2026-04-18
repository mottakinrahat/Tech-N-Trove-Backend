import express from "express";
import { UserRole } from "../../../../prisma/generated/prisma";
import { auth } from "../../middleWares/auth";
import validateRequest from "../../middleWares/validateRequest";
import { AddressController } from "./address.controller";
import { AddressValidation } from "./address.validation";

const router = express.Router();

router.post(
  "/",
  auth(UserRole.ADMIN, UserRole.BUYER, UserRole.MANAGER),
  AddressController.createAddress,
);

router.get(
  "/my-addresses",
  auth(UserRole.ADMIN, UserRole.BUYER, UserRole.MANAGER),
  AddressController.getMyAddresses,
);

router.patch(
  "/:id",
  auth(UserRole.ADMIN, UserRole.BUYER, UserRole.MANAGER),
  validateRequest(AddressValidation.updateAddressValidationSchema),
  AddressController.updateMyAddress,
);

router.patch(
  "/:id/set-default",
  auth(UserRole.ADMIN, UserRole.BUYER, UserRole.MANAGER),
  AddressController.setDefaultAddress,
);

router.delete(
  "/:id",
  auth(UserRole.ADMIN, UserRole.BUYER, UserRole.MANAGER),
  AddressController.deleteMyAddress,
);

export const addressRoutes = router;
