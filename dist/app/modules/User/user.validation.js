"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = exports.GenderEnum = void 0;
const zod_1 = __importDefault(require("zod"));
exports.GenderEnum = zod_1.default.enum(["MALE", "FEMALE"]);
const createAdminValidation = zod_1.default.object({
    password: zod_1.default.string().min(1, { message: "Password is required" }),
    admin: zod_1.default.object({
        name: zod_1.default.string().min(1, { message: "Name is required" }),
        email: zod_1.default
            .string()
            .email({ message: "Invalid email address" })
            .min(1, { message: "Email is required" }),
        contactNumber: zod_1.default.string().min(1, { message: "Phone number is required" }),
    }),
});
const createManagerValidationSchema = zod_1.default.object({
    password: zod_1.default.string().min(1, { message: "Password is required" }),
    manager: zod_1.default.object({
        name: zod_1.default.string().min(1, "Name is required"),
        profilePhoto: zod_1.default.string().url("Invalid photo URL").optional(),
        contactNumber: zod_1.default
            .string()
            .min(10, "Contact number must be at least 10 digits"),
        email: zod_1.default.string().email("Invalid email address"),
    }),
});
const createBuyerValidationSchema = zod_1.default.object({
    password: zod_1.default.string().min(1, { message: "Password is required" }),
    buyer: zod_1.default.object({
        email: zod_1.default.string().email(),
        name: zod_1.default.string().min(1, "Name is required"),
        profilePhoto: zod_1.default.string().url().optional(),
        contactNumber: zod_1.default.string().optional(),
    }),
});
exports.UserValidation = {
    createAdminValidation,
    createManagerValidationSchema,
    createBuyerValidationSchema,
};
