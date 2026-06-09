import express from "express";
import { auth } from "../../middleWares/auth";
import { UserRole } from "../../../../prisma/generated/prisma";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post(
  "/",
  auth(UserRole.BUYER, UserRole.ADMIN, UserRole.MANAGER, UserRole.SUPER_ADMIN),
  OrderController.createOrder
);

router.get(
  "/my-orders",
  auth(UserRole.BUYER, UserRole.ADMIN, UserRole.MANAGER, UserRole.SUPER_ADMIN),
  OrderController.getMyOrders
);

router.get(
  "/all",
  auth(UserRole.ADMIN, UserRole.MANAGER, UserRole.SUPER_ADMIN),
  OrderController.getAllOrders
);

router.get(
  "/:id",
  auth(UserRole.BUYER, UserRole.ADMIN, UserRole.MANAGER, UserRole.SUPER_ADMIN),
  OrderController.getOrderById
);

router.patch(
  "/:id/status",
  auth(UserRole.ADMIN, UserRole.MANAGER, UserRole.SUPER_ADMIN),
  OrderController.updateOrderStatus
);

export const orderRoutes = router;
