"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createProduct = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.string().min(1),
        slug: zod_1.default.string().min(1),
        categoryId: zod_1.default.string().min(1),
        description: zod_1.default.string().optional(),
        brandId: zod_1.default.string().optional(),
        tags: zod_1.default.array(zod_1.default.string()).optional(),
        isPublished: zod_1.default.boolean().optional(),
        isFeatured: zod_1.default.boolean().optional(),
        metaTitle: zod_1.default.string().optional(),
        metaDescription: zod_1.default.string().optional(),
    }),
});
const updateProduct = zod_1.default.object({
    body: zod_1.default
        .object({
        name: zod_1.default.string().min(1).optional(),
        slug: zod_1.default.string().min(1).optional(),
        categoryId: zod_1.default.string().min(1).optional(),
        description: zod_1.default.string().optional().nullable(),
        brandId: zod_1.default.string().optional().nullable(),
        tags: zod_1.default.array(zod_1.default.string()).optional(),
        isPublished: zod_1.default.boolean().optional(),
        isFeatured: zod_1.default.boolean().optional(),
        metaTitle: zod_1.default.string().optional().nullable(),
        metaDescription: zod_1.default.string().optional().nullable(),
    })
        .refine((value) => Object.keys(value).length > 0, {
        message: "At least one field is required for update",
    }),
});
const createVariant = zod_1.default.object({
    body: zod_1.default.object({
        sku: zod_1.default.string().min(1),
        title: zod_1.default.string().optional(),
        price: zod_1.default.number().nonnegative(),
        comparePrice: zod_1.default.number().nonnegative().optional(),
        costPrice: zod_1.default.number().nonnegative().optional(),
        stock: zod_1.default.number().int().nonnegative(),
        lowStockThreshold: zod_1.default.number().int().nonnegative().optional(),
        color: zod_1.default.string().optional(),
        size: zod_1.default.string().optional(),
        material: zod_1.default.string().optional(),
        weight: zod_1.default.number().nonnegative().optional(),
        barcode: zod_1.default.string().optional(),
        isActive: zod_1.default.boolean().optional(),
    }),
});
const updateVariant = zod_1.default.object({
    body: zod_1.default
        .object({
        sku: zod_1.default.string().min(1).optional(),
        title: zod_1.default.string().optional().nullable(),
        price: zod_1.default.number().nonnegative().optional(),
        comparePrice: zod_1.default.number().nonnegative().optional().nullable(),
        costPrice: zod_1.default.number().nonnegative().optional().nullable(),
        stock: zod_1.default.number().int().nonnegative().optional(),
        lowStockThreshold: zod_1.default.number().int().nonnegative().optional().nullable(),
        color: zod_1.default.string().optional().nullable(),
        size: zod_1.default.string().optional().nullable(),
        material: zod_1.default.string().optional().nullable(),
        weight: zod_1.default.number().nonnegative().optional().nullable(),
        barcode: zod_1.default.string().optional().nullable(),
        isActive: zod_1.default.boolean().optional(),
    })
        .refine((value) => Object.keys(value).length > 0, {
        message: "At least one field is required for update",
    }),
});
const createImage = zod_1.default.object({
    body: zod_1.default.object({
        url: zod_1.default.string().min(1),
    }),
});
exports.ProductValidation = {
    createProduct,
    updateProduct,
    createVariant,
    updateVariant,
    createImage,
};
