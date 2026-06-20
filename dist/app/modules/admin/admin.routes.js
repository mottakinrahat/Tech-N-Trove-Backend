"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const validateRequest_1 = __importDefault(require("../../middleWares/validateRequest"));
const admin_validation_1 = require("./admin.validation");
const auth_1 = require("../../middleWares/auth");
const prisma_1 = require("../../../../prisma/generated/prisma");
const router = express_1.default.Router();
router.get("/", (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.SUPER_ADMIN), admin_controller_1.AdminController.getAllAdminFromDB);
router.get("/:id", (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.SUPER_ADMIN), admin_controller_1.AdminController.getSingleAdmin);
router.patch("/:id", (0, validateRequest_1.default)(admin_validation_1.AdminValidation.updateAdminZodSchema), admin_controller_1.AdminController.updateAdminData);
router.delete("/:id", admin_controller_1.AdminController.deleteAdminData);
router.delete("/soft/:id", admin_controller_1.AdminController.softDeleteAdminData);
exports.adminRoutes = router;
