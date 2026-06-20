"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createBrand = zod_1.default.object({
    body: zod_1.default.object({
        brandName: zod_1.default.string().min(1, "Brand name is required"),
        description: zod_1.default.string().optional(),
    }),
});
const updateBrand = zod_1.default.object({
    body: zod_1.default
        .object({
        brandName: zod_1.default.string().min(1).optional(),
        description: zod_1.default.string().optional().nullable(),
    })
        .refine((value) => Object.keys(value).length > 0, {
        message: "At least one field is required for update",
    }),
});
exports.BrandValidation = {
    createBrand,
    updateBrand,
};
