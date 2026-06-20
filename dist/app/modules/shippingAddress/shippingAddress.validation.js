"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingAddressValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const shippingAddressCreatePayloadSchema = zod_1.default.object({
    houseStreet: zod_1.default.string().optional(),
    village: zod_1.default.string().optional(),
    postOffice: zod_1.default.string().min(1, "Post office is required"),
    upazilla: zod_1.default.string().min(1, "Upazilla is required"),
    district: zod_1.default.string().min(1, "District is required"),
    division: zod_1.default.string().min(1, "Division is required"),
    country: zod_1.default.string().optional(),
    phoneNumber: zod_1.default.string().optional(),
    altPhoneNumber: zod_1.default.string().optional(),
});
const shippingAddressUpdatePayloadSchema = shippingAddressCreatePayloadSchema.partial();
const createShippingAddressValidationSchema = zod_1.default.object({
    body: shippingAddressCreatePayloadSchema,
});
const updateShippingAddressValidationSchema = zod_1.default.object({
    body: shippingAddressUpdatePayloadSchema.refine((value) => Object.keys(value).length > 0, {
        message: "At least one field is required for update",
    }),
});
exports.ShippingAddressValidation = {
    createShippingAddressValidationSchema,
    updateShippingAddressValidationSchema,
};
