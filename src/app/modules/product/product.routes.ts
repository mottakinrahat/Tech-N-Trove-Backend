import express, { NextFunction, Request, Response } from "express";
import { UserRole } from "../../../../prisma/generated/prisma";
import { auth } from "../../middleWares/auth";
import validateRequest from "../../middleWares/validateRequest";
import { ProductController } from "./product.controller";
import { ProductValidation } from "./product.validation";
import { fileUploader } from "../../../helpers/fileUploader";

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
  validateRequest(ProductValidation.createImage),
  ProductController.createVariantImage,
);



// router.post(
//   "/:productId/variants",
//   adminAuth,
//   validateRequest(ProductValidation.createVariant),
//   ProductController.createVariant,
// );
router.post(
  "/:productId/variants",
  adminAuth,
  fileUploader.upload.single("file"),   
  (req: Request, res: Response, next: NextFunction  ) => {
    req.body = JSON.parse(req.body.data)
    return ProductController.createVariant(req, res, next);
  }
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
