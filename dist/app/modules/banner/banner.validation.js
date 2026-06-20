"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerValidation = void 0;
const zod_1 = require("zod");
const createBanner = zod_1.z.object({
    title: zod_1.z.string().min(1).optional(),
    description: zod_1.z.string().optional(),
    buttonText: zod_1.z.string().optional(),
    buttonLink: zod_1.z.string().optional(),
    sortOrder: zod_1.z.number().int().optional(),
    isActive: zod_1.z.boolean().optional(),
    bannerType: zod_1.z.enum(["HERO", "OFFER", "PROMO"]).optional(),
});
const updateBanner = zod_1.z.object({
    title: zod_1.z.string().min(1).optional(),
    description: zod_1.z.string().optional(),
    buttonText: zod_1.z.string().optional(),
    buttonLink: zod_1.z.string().optional(),
    sortOrder: zod_1.z.number().int().optional(),
    isActive: zod_1.z.boolean().optional(),
    bannerType: zod_1.z.enum(["HERO", "OFFER", "PROMO"]).optional(),
});
exports.BannerValidation = { createBanner, updateBanner };
