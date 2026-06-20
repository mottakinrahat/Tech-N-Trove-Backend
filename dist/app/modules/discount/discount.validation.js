"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountValidation = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../../../../prisma/generated/prisma");
const createDiscount = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            message: "Name is required",
        }),
        type: zod_1.z.nativeEnum(prisma_1.DiscountType, {
            message: "Discount type is required",
        }),
        value: zod_1.z.number({
            message: "Value is required",
        }),
        isGlobal: zod_1.z.boolean().optional(),
        startDate: zod_1.z.string({
            message: "Start date is required",
        }),
        endDate: zod_1.z.string({
            message: "End date is required",
        }),
        isActive: zod_1.z.boolean().optional(),
        priority: zod_1.z.number().optional(),
        code: zod_1.z.string().optional(),
        productIds: zod_1.z.array(zod_1.z.string()).optional(),
        categoryIds: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
const updateDiscount = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        type: zod_1.z.nativeEnum(prisma_1.DiscountType).optional(),
        value: zod_1.z.number().optional(),
        isGlobal: zod_1.z.boolean().optional(),
        startDate: zod_1.z.string().optional(),
        endDate: zod_1.z.string().optional(),
        isActive: zod_1.z.boolean().optional(),
        priority: zod_1.z.number().optional(),
        code: zod_1.z.string().optional(),
        productIds: zod_1.z.array(zod_1.z.string()).optional(),
        categoryIds: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
exports.DiscountValidation = {
    createDiscount,
    updateDiscount,
};
