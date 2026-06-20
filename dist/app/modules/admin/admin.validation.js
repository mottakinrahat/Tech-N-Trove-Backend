"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createAdminZodSchema = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.string(),
        contactNumber: zod_1.default.string(),
    }),
});
const updateAdminZodSchema = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.string(),
        contactNumber: zod_1.default.string(),
    }),
});
exports.AdminValidation = {
    createAdminZodSchema,
    updateAdminZodSchema,
};
