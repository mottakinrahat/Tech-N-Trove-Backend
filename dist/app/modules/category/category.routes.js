"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../../../../prisma/generated/prisma");
const auth_1 = require("../../middleWares/auth");
const validateRequest_1 = __importDefault(require("../../middleWares/validateRequest"));
const category_controller_1 = require("./category.controller");
const category_validation_1 = require("./category.validation");
const router = express_1.default.Router();
const adminAuth = (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.SUPER_ADMIN);
// Public routes
router.get("/", category_controller_1.CategoryController.getAllCategories);
router.get("/:categoryId", category_controller_1.CategoryController.getSingleCategory);
// Admin-only routes
router.post("/", adminAuth, (0, validateRequest_1.default)(category_validation_1.CategoryValidation.createCategory), category_controller_1.CategoryController.createCategory);
router.patch("/:categoryId", adminAuth, (0, validateRequest_1.default)(category_validation_1.CategoryValidation.updateCategory), category_controller_1.CategoryController.updateCategory);
router.delete("/:categoryId", adminAuth, category_controller_1.CategoryController.deleteCategory);
exports.categoryRoutes = router;
