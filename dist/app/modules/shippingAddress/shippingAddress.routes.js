"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shippingAddressRoutes = void 0;
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../../../../prisma/generated/prisma");
const auth_1 = require("../../middleWares/auth");
const validateRequest_1 = __importDefault(require("../../middleWares/validateRequest"));
const shippingAddress_controller_1 = require("./shippingAddress.controller");
const shippingAddress_validation_1 = require("./shippingAddress.validation");
const router = express_1.default.Router();
router.post("/", (0, auth_1.auth)(prisma_1.UserRole.BUYER, prisma_1.UserRole.ADMIN, prisma_1.UserRole.MANAGER, prisma_1.UserRole.SUPER_ADMIN), (0, validateRequest_1.default)(shippingAddress_validation_1.ShippingAddressValidation.createShippingAddressValidationSchema), shippingAddress_controller_1.ShippingAddressController.createShippingAddress);
router.get("/my-addresses", (0, auth_1.auth)(prisma_1.UserRole.BUYER, prisma_1.UserRole.ADMIN, prisma_1.UserRole.MANAGER, prisma_1.UserRole.SUPER_ADMIN), shippingAddress_controller_1.ShippingAddressController.getMyShippingAddresses);
router.patch("/:id", (0, auth_1.auth)(prisma_1.UserRole.BUYER, prisma_1.UserRole.ADMIN, prisma_1.UserRole.MANAGER, prisma_1.UserRole.SUPER_ADMIN), (0, validateRequest_1.default)(shippingAddress_validation_1.ShippingAddressValidation.updateShippingAddressValidationSchema), shippingAddress_controller_1.ShippingAddressController.updateMyShippingAddress);
router.delete("/:id", (0, auth_1.auth)(prisma_1.UserRole.BUYER, prisma_1.UserRole.ADMIN, prisma_1.UserRole.MANAGER, prisma_1.UserRole.SUPER_ADMIN), shippingAddress_controller_1.ShippingAddressController.deleteMyShippingAddress);
exports.shippingAddressRoutes = router;
