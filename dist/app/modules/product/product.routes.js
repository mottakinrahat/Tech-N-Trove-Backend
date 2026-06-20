"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../../../../prisma/generated/prisma");
const auth_1 = require("../../middleWares/auth");
const validateRequest_1 = __importDefault(require("../../middleWares/validateRequest"));
const product_controller_1 = require("./product.controller");
const product_validation_1 = require("./product.validation");
const fileUploader_1 = require("../../../helpers/fileUploader");
const router = express_1.default.Router();
const adminAuth = (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.SUPER_ADMIN);
router.delete("/images/:imageId", adminAuth, product_controller_1.ProductController.deleteProductImage);
router.post("/", adminAuth, (0, validateRequest_1.default)(product_validation_1.ProductValidation.createProduct), product_controller_1.ProductController.createProduct);
router.get("/all", adminAuth, product_controller_1.ProductController.getAllProductsAdmin);
router.get("/admin/:productId", adminAuth, product_controller_1.ProductController.getProductByIdAdmin);
router.post("/:productId/variants/:variantId/images", adminAuth, (0, validateRequest_1.default)(product_validation_1.ProductValidation.createImage), product_controller_1.ProductController.createVariantImage);
// router.post(
//   "/:productId/variants",
//   adminAuth,
//   validateRequest(ProductValidation.createVariant),
//   ProductController.createVariant,
// );
router.post("/:productId/variants", adminAuth, fileUploader_1.fileUploader.upload.single("file"), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    return product_controller_1.ProductController.createVariant(req, res, next);
});
router.get("/:productId/variants/:variantId", product_controller_1.ProductController.getVariantById);
router.get("/:productId/variants", product_controller_1.ProductController.getVariantsByProduct);
router.patch("/:productId/variants/:variantId", adminAuth, (0, validateRequest_1.default)(product_validation_1.ProductValidation.updateVariant), product_controller_1.ProductController.updateVariant);
router.delete("/:productId/variants/:variantId", adminAuth, product_controller_1.ProductController.deleteVariant);
router.patch("/:productId", adminAuth, (0, validateRequest_1.default)(product_validation_1.ProductValidation.updateProduct), product_controller_1.ProductController.updateProduct);
router.delete("/:productId", adminAuth, product_controller_1.ProductController.deleteProduct);
router.get("/", product_controller_1.ProductController.getPublishedProducts);
router.get("/:productId", product_controller_1.ProductController.getPublishedProductById);
exports.productRoutes = router;
