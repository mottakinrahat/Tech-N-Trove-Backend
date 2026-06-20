"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewValidation = void 0;
const zod_1 = require("zod");
const createReview = zod_1.z.object({
    body: zod_1.z.object({
        productId: zod_1.z.string({ error: "productId is required" }),
        orderId: zod_1.z.string().optional(),
        rating: zod_1.z
            .number({ error: "rating is required" })
            .int()
            .min(1, "Rating must be at least 1")
            .max(5, "Rating must be at most 5"),
        comment: zod_1.z.string().optional(),
    }),
});
const updateReview = zod_1.z.object({
    body: zod_1.z.object({
        rating: zod_1.z.number().int().min(1).max(5).optional(),
        comment: zod_1.z.string().optional(),
    }),
});
exports.ReviewValidation = { createReview, updateReview };
