"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.discountRoutes = void 0;
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../../../../prisma/generated/prisma");
const auth_1 = require("../../middleWares/auth");
const validateRequest_1 = __importDefault(require("../../middleWares/validateRequest"));
const discount_controller_1 = require("./discount.controller");
const discount_validation_1 = require("./discount.validation");
const router = express_1.default.Router();
const adminAuth = (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.SUPER_ADMIN);
const userAuth = (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.SUPER_ADMIN, prisma_1.UserRole.BUYER);
// Admin-only routes
router.post("/", adminAuth, (0, validateRequest_1.default)(discount_validation_1.DiscountValidation.createDiscount), discount_controller_1.DiscountController.createDiscount);
router.get("/", discount_controller_1.DiscountController.getAllDiscounts);
router.get("/:discountId", adminAuth, discount_controller_1.DiscountController.getSingleDiscount);
router.patch("/:discountId", adminAuth, (0, validateRequest_1.default)(discount_validation_1.DiscountValidation.updateDiscount), discount_controller_1.DiscountController.updateDiscount);
router.delete("/:discountId", adminAuth, discount_controller_1.DiscountController.deleteDiscount);
// User route for validating code
router.post("/validate", userAuth, discount_controller_1.DiscountController.validateDiscount);
exports.discountRoutes = router;
