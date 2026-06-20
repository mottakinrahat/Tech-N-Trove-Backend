"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buyerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const buyer_controller_1 = require("./buyer.controller");
const validateRequest_1 = __importDefault(require("../../middleWares/validateRequest"));
const buyer_validation_1 = require("./buyer.validation");
const auth_1 = require("../../middleWares/auth");
const prisma_1 = require("../../../../prisma/generated/prisma");
const router = express_1.default.Router();
router.get("/", (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.BUYER), buyer_controller_1.BuyerController.getAllBuyerFromDB);
router.get("/:id", (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.BUYER), buyer_controller_1.BuyerController.getSingleBuyer);
router.patch("/:id", (0, validateRequest_1.default)(buyer_validation_1.BuyerValidation.updateBuyerZodSchema), buyer_controller_1.BuyerController.updateBuyerData);
router.delete("/:id", (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.BUYER), buyer_controller_1.BuyerController.deleteBuyerData);
router.delete("/soft/:id", (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.BUYER), buyer_controller_1.BuyerController.softDeleteBuyerData);
exports.buyerRoutes = router;
