"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createCategory = zod_1.default.object({
    body: zod_1.default.object({
        categoryName: zod_1.default.string().min(1, "Category name is required"),
        description: zod_1.default.string().min(1, "Description is required"),
    }),
});
const updateCategory = zod_1.default.object({
    body: zod_1.default
        .object({
        categoryName: zod_1.default.string().min(1).optional(),
        description: zod_1.default.string().min(1).optional(),
    })
        .refine((value) => Object.keys(value).length > 0, {
        message: "At least one field is required for update",
    }),
});
exports.CategoryValidation = {
    createCategory,
    updateCategory,
};
