import express from "express";
import { auth } from "../../middleWares/auth";
import { UserRole } from "../../../../prisma/generated/prisma";
import { CartController } from "./cart.controller";

const router = express.Router();

router.get(
  "/",
  auth(UserRole.BUYER, UserRole.ADMIN, UserRole.MANAGER, UserRole.SUPER_ADMIN),
  CartController.getCart
);

router.post(
  "/",
  auth(UserRole.BUYER, UserRole.ADMIN, UserRole.MANAGER, UserRole.SUPER_ADMIN),
  CartController.addToCart
);

router.patch(
    "/:id",
    auth(UserRole.BUYER, UserRole.ADMIN, UserRole.MANAGER, UserRole.SUPER_ADMIN),
    CartController.updateCartItemQuantity
);

router.delete(
  "/:id",
  auth(UserRole.BUYER, UserRole.ADMIN, UserRole.MANAGER, UserRole.SUPER_ADMIN),
  CartController.removeCartItem
);

router.delete(
  "/",
  auth(UserRole.BUYER, UserRole.ADMIN, UserRole.MANAGER, UserRole.SUPER_ADMIN),
  CartController.clearCart
);

export const cartRoutes = router;
