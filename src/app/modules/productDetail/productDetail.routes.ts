import express from "express";
import { UserRole } from "../../../../prisma/generated/prisma";
import { auth } from "../../middleWares/auth";
import validateRequest from "../../middleWares/validateRequest";
import { ProductDetailController } from "./productDetail.controller";
import { ProductDetailValidation } from "./productDetail.validation";

const router = express.Router({ mergeParams: true });

const adminAuth = auth(UserRole.ADMIN, UserRole.SUPER_ADMIN);

// POST   /products/:productId/details
router.post(
  "/",
  adminAuth,
  validateRequest(ProductDetailValidation.createDetail),
  ProductDetailController.createDetail,
);

// GET    /products/:productId/details
router.get("/", ProductDetailController.getDetailsByProduct);

// GET    /products/:productId/details/:detailId
router.get("/:detailId", ProductDetailController.getSingleDetail);

// PATCH  /products/:productId/details/:detailId
router.patch(
  "/:detailId",
  adminAuth,
  validateRequest(ProductDetailValidation.updateDetail),
  ProductDetailController.updateDetail,
);

// DELETE /products/:productId/details/:detailId
router.delete("/:detailId", adminAuth, ProductDetailController.deleteDetail);

export const productDetailRoutes = router;
