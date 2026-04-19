import express from "express";
import { UserRole } from "../../../../prisma/generated/prisma";
import { auth } from "../../middleWares/auth";
import validateRequest from "../../middleWares/validateRequest";
import { ProductController } from "./product.controller";
import { ProductValidation } from "./product.validation";

const router = express.Router();

const adminAuth = auth(UserRole.ADMIN, UserRole.SUPER_ADMIN);

router.delete(
  "/images/:imageId",
  adminAuth,
  ProductController.deleteProductImage,
);

router.post(
  "/",
  adminAuth,
  validateRequest(ProductValidation.createProduct),
  ProductController.createProduct,
);

router.get("/all", adminAuth, ProductController.getAllProductsAdmin);

router.get(
  "/admin/:productId",
  adminAuth,
  ProductController.getProductByIdAdmin,
);

router.post(
  "/:productId/variants/:variantId/images",
  adminAuth,
  validateRequest(ProductValidation.createProductImage),
  ProductController.createVariantImage,
);

router.post(
  "/:productId/images",
  adminAuth,
  validateRequest(ProductValidation.createProductImage),
  ProductController.createProductImage,
);

router.post(
  "/:productId/variants",
  adminAuth,
  validateRequest(ProductValidation.createVariant),
  ProductController.createVariant,
);

router.get("/:productId/variants/:variantId", ProductController.getVariantById);

router.get("/:productId/variants", ProductController.getVariantsByProduct);

router.patch(
  "/:productId/variants/:variantId",
  adminAuth,
  validateRequest(ProductValidation.updateVariant),
  ProductController.updateVariant,
);

router.delete(
  "/:productId/variants/:variantId",
  adminAuth,
  ProductController.deleteVariant,
);

router.patch(
  "/:productId",
  adminAuth,
  validateRequest(ProductValidation.updateProduct),
  ProductController.updateProduct,
);

router.delete("/:productId", adminAuth, ProductController.deleteProduct);

router.get("/", ProductController.getPublishedProducts);

router.get("/:productId", ProductController.getPublishedProductById);

export const productRoutes = router;
