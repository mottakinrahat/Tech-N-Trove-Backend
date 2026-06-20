"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middleWares/auth");
const prisma_1 = require("../../../../prisma/generated/prisma");
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.post("/", (0, auth_1.auth)(prisma_1.UserRole.BUYER, prisma_1.UserRole.ADMIN, prisma_1.UserRole.MANAGER, prisma_1.UserRole.SUPER_ADMIN), order_controller_1.OrderController.createOrder);
router.get("/my-orders", (0, auth_1.auth)(prisma_1.UserRole.BUYER, prisma_1.UserRole.ADMIN, prisma_1.UserRole.MANAGER, prisma_1.UserRole.SUPER_ADMIN), order_controller_1.OrderController.getMyOrders);
router.get("/all", (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.MANAGER, prisma_1.UserRole.SUPER_ADMIN), order_controller_1.OrderController.getAllOrders);
router.get("/:id", (0, auth_1.auth)(prisma_1.UserRole.BUYER, prisma_1.UserRole.ADMIN, prisma_1.UserRole.MANAGER, prisma_1.UserRole.SUPER_ADMIN), order_controller_1.OrderController.getOrderById);
router.patch("/:id/status", (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.MANAGER, prisma_1.UserRole.SUPER_ADMIN), order_controller_1.OrderController.updateOrderStatus);
exports.orderRoutes = router;
