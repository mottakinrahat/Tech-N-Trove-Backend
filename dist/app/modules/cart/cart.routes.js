"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middleWares/auth");
const prisma_1 = require("../../../../prisma/generated/prisma");
const cart_controller_1 = require("./cart.controller");
const router = express_1.default.Router();
router.get("/", (0, auth_1.auth)(prisma_1.UserRole.BUYER, prisma_1.UserRole.ADMIN, prisma_1.UserRole.MANAGER, prisma_1.UserRole.SUPER_ADMIN), cart_controller_1.CartController.getCart);
router.post("/", (0, auth_1.auth)(prisma_1.UserRole.BUYER, prisma_1.UserRole.ADMIN, prisma_1.UserRole.MANAGER, prisma_1.UserRole.SUPER_ADMIN), cart_controller_1.CartController.addToCart);
router.patch("/:id", (0, auth_1.auth)(prisma_1.UserRole.BUYER, prisma_1.UserRole.ADMIN, prisma_1.UserRole.MANAGER, prisma_1.UserRole.SUPER_ADMIN), cart_controller_1.CartController.updateCartItemQuantity);
router.delete("/:id", (0, auth_1.auth)(prisma_1.UserRole.BUYER, prisma_1.UserRole.ADMIN, prisma_1.UserRole.MANAGER, prisma_1.UserRole.SUPER_ADMIN), cart_controller_1.CartController.removeCartItem);
router.delete("/", (0, auth_1.auth)(prisma_1.UserRole.BUYER, prisma_1.UserRole.ADMIN, prisma_1.UserRole.MANAGER, prisma_1.UserRole.SUPER_ADMIN), cart_controller_1.CartController.clearCart);
exports.cartRoutes = router;
