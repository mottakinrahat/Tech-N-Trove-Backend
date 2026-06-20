"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const addressPayloadSchema = zod_1.default.object({
    label: zod_1.default.string().optional(),
    addressType: zod_1.default.enum(["HOME", "OFFICE", "OTHER"]).optional(),
    recipientName: zod_1.default.string().min(1, "Recipient name is required").optional(),
    recipientPhone: zod_1.default.string().min(1, "Recipient phone is required").optional(),
    line1: zod_1.default.string().min(1, "Address line 1 is required").optional(),
    city: zod_1.default.string().min(1, "City is required").optional(),
    state: zod_1.default.string().min(1, "State is required").optional(),
    postalCode: zod_1.default.string().min(1, "Postal code is required").optional(),
    alternatePhone: zod_1.default.string().optional(),
    line2: zod_1.default.string().optional(),
    landmark: zod_1.default.string().optional(),
    country: zod_1.default.string().optional(),
    latitude: zod_1.default.number().optional(),
    longitude: zod_1.default.number().optional(),
    lat: zod_1.default.number().optional(),
    lng: zod_1.default.number().optional(),
    logn: zod_1.default.number().optional(),
    deliveryInstructions: zod_1.default.string().optional(),
    isDefault: zod_1.default.boolean().optional(),
    fullName: zod_1.default.string().optional(),
    phoneNumber: zod_1.default.string().optional(),
    addressLine1: zod_1.default.string().optional(),
    addressLine2: zod_1.default.string().optional(),
});
const createAddressValidationSchema = zod_1.default.object({
    body: zod_1.default.union([
        addressPayloadSchema,
        zod_1.default.object({
            addresses: zod_1.default.array(addressPayloadSchema).min(1),
        }),
    ]),
});
const updateAddressValidationSchema = zod_1.default.object({
    body: zod_1.default
        .object({
        label: zod_1.default.string().optional(),
        addressType: zod_1.default.enum(["HOME", "OFFICE", "OTHER"]).optional(),
        recipientName: zod_1.default.string().min(1).optional(),
        recipientPhone: zod_1.default.string().min(1).optional(),
        alternatePhone: zod_1.default.string().optional().nullable(),
        line1: zod_1.default.string().min(1).optional(),
        line2: zod_1.default.string().optional().nullable(),
        landmark: zod_1.default.string().optional().nullable(),
        city: zod_1.default.string().min(1).optional(),
        state: zod_1.default.string().min(1).optional(),
        postalCode: zod_1.default.string().min(1).optional(),
        country: zod_1.default.string().optional(),
        deliveryInstructions: zod_1.default.string().optional().nullable(),
        isDefault: zod_1.default.boolean().optional(),
    })
        .refine((value) => Object.keys(value).length > 0, {
        message: "At least one field is required for update",
    }),
});
exports.AddressValidation = {
    createAddressValidationSchema,
    updateAddressValidationSchema,
};
