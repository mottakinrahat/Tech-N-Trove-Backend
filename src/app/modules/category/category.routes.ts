import express from "express";
import { UserRole } from "../../../../prisma/generated/prisma";
import { auth } from "../../middleWares/auth";
import validateRequest from "../../middleWares/validateRequest";
import { CategoryController } from "./category.controller";
import { CategoryValidation } from "./category.validation";

const router = express.Router();

const adminAuth = auth(UserRole.ADMIN, UserRole.SUPER_ADMIN);

// Public routes
router.get("/", CategoryController.getAllCategories);
router.get("/:categoryId", CategoryController.getSingleCategory);

// Admin-only routes
router.post(
  "/",
  adminAuth,
  validateRequest(CategoryValidation.createCategory),
  CategoryController.createCategory,
);

router.patch(
  "/:categoryId",
  adminAuth,
  validateRequest(CategoryValidation.updateCategory),
  CategoryController.updateCategory,
);

router.delete("/:categoryId", adminAuth, CategoryController.deleteCategory);

export const categoryRoutes = router;
