"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const trycatch_1 = require("../../../helpers/trycatch");
const sendResponse_1 = require("../../../helpers/sendResponse");
const pick_1 = require("../../../shared/pick");
const product_constant_1 = require("./product.constant");
const product_services_1 = require("./product.services");
const createProduct = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const user = req.user;
    const result = yield product_services_1.ProductServices.createProductIntoDB(body, user);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Product created successfully",
        data: result,
    });
}));
const getPublishedProducts = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = (0, pick_1.pick)(req.query, product_constant_1.productFilterableFields);
    const options = (0, pick_1.pick)(req.query, ["page", "limit", "sortBy", "sortOrder"]);
    const result = yield product_services_1.ProductServices.getProductsFromDB(filter, options);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Products retrieved successfully",
        meta: result.meta,
        data: result.data,
    });
}));
const getAllProductsAdmin = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = (0, pick_1.pick)(req.query, product_constant_1.productFilterableFields);
    const options = (0, pick_1.pick)(req.query, ["page", "limit", "sortBy", "sortOrder"]);
    const result = yield product_services_1.ProductServices.getProductsFromDB(filter, options);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Products retrieved successfully",
        meta: result.meta,
        data: result.data,
    });
}));
const getPublishedProductById = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_services_1.ProductServices.getSingleProductFromDB(productId, {
        publishedOnly: true,
    });
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product retrieved successfully",
        data: result,
    });
}));
const getProductByIdAdmin = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_services_1.ProductServices.getSingleProductFromDB(productId, {
        publishedOnly: false,
    });
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product retrieved successfully",
        data: result,
    });
}));
const updateProduct = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const body = req.body;
    const result = yield product_services_1.ProductServices.updateProductIntoDB(productId, body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product updated successfully",
        data: result,
    });
}));
const deleteProduct = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    yield product_services_1.ProductServices.deleteProductIntoDB(productId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product deleted successfully",
        data: null,
    });
}));
const createVariant = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_services_1.ProductServices.createVariantIntoDB(productId, req);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Variant created successfully",
        data: result,
    });
}));
// const createVariant = catchAsync(async (req: any, res: any) => {
//   const { productId } = req.params;
//   const body = req.body;
//   const result = await ProductServices.createVariantIntoDB(productId, body);
//   sendResponse(res, {
//     success: true,
//     statusCode: status.CREATED,
//     message: "Variant created successfully",
//     data: result,
//   });
// });
const getVariantsByProduct = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_services_1.ProductServices.getVariantsByProductFromDB(productId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Variants retrieved successfully",
        data: result,
    });
}));
const getVariantById = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, variantId } = req.params;
    const result = yield product_services_1.ProductServices.getSingleVariantFromDB(productId, variantId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Variant retrieved successfully",
        data: result,
    });
}));
const updateVariant = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, variantId } = req.params;
    const body = req.body;
    const data = {
        sku: body.sku,
        title: body.title,
        price: body.price,
        comparePrice: body.comparePrice,
        costPrice: body.costPrice,
        stock: body.stock,
        lowStockThreshold: body.lowStockThreshold,
        color: body.color,
        size: body.size,
        material: body.material,
        weight: body.weight,
        barcode: body.barcode,
        isActive: body.isActive,
    };
    const filtered = Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined));
    const result = yield product_services_1.ProductServices.updateVariantIntoDB(productId, variantId, filtered);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Variant updated successfully",
        data: result,
    });
}));
const deleteVariant = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, variantId } = req.params;
    yield product_services_1.ProductServices.deleteVariantIntoDB(productId, variantId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Variant deleted successfully",
        data: null,
    });
}));
const createVariantImage = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, variantId } = req.params;
    const result = yield product_services_1.ProductServices.createVariantImageIntoDB(productId, variantId, req.body.url);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Image added to variant successfully",
        data: result,
    });
}));
const deleteProductImage = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { imageId } = req.params;
    yield product_services_1.ProductServices.deleteProductImageIntoDB(imageId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Image deleted successfully",
        data: null,
    });
}));
exports.ProductController = {
    createProduct,
    getPublishedProducts,
    getAllProductsAdmin,
    getPublishedProductById,
    getProductByIdAdmin,
    updateProduct,
    deleteProduct,
    createVariant,
    getVariantsByProduct,
    getVariantById,
    updateVariant,
    deleteVariant,
    createVariantImage,
    deleteProductImage,
};
