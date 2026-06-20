"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRoutes = void 0;
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../../../../prisma/generated/prisma");
const auth_1 = require("../../middleWares/auth");
const validateRequest_1 = __importDefault(require("../../middleWares/validateRequest"));
const address_controller_1 = require("./address.controller");
const address_validation_1 = require("./address.validation");
const router = express_1.default.Router();
router.post("/", (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.BUYER, prisma_1.UserRole.MANAGER), address_controller_1.AddressController.createAddress);
router.get("/my-addresses", (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.BUYER, prisma_1.UserRole.MANAGER), address_controller_1.AddressController.getMyAddresses);
router.patch("/:id", (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.BUYER, prisma_1.UserRole.MANAGER), (0, validateRequest_1.default)(address_validation_1.AddressValidation.updateAddressValidationSchema), address_controller_1.AddressController.updateMyAddress);
router.patch("/:id/set-default", (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.BUYER, prisma_1.UserRole.MANAGER), address_controller_1.AddressController.setDefaultAddress);
router.delete("/:id", (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.BUYER, prisma_1.UserRole.MANAGER), address_controller_1.AddressController.deleteMyAddress);
exports.addressRoutes = router;
