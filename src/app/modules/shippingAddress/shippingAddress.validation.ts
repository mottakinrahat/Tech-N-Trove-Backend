import z from "zod";

const shippingAddressCreatePayloadSchema = z.object({
  houseStreet: z.string().optional(),
  village: z.string().optional(),
  postOffice: z.string().min(1, "Post office is required"),
  upazilla: z.string().min(1, "Upazilla is required"),
  district: z.string().min(1, "District is required"),
  division: z.string().min(1, "Division is required"),
  country: z.string().optional(),
  phoneNumber: z.string().optional(),
  altPhoneNumber: z.string().optional(),
});

const shippingAddressUpdatePayloadSchema = shippingAddressCreatePayloadSchema.partial();

export type ShippingAddressCreatePayload = z.infer<
  typeof shippingAddressCreatePayloadSchema
>;
export type ShippingAddressUpdatePayload = z.infer<
  typeof shippingAddressUpdatePayloadSchema
>;

const createShippingAddressValidationSchema = z.object({
  body: shippingAddressCreatePayloadSchema,
});

const updateShippingAddressValidationSchema = z.object({
  body: shippingAddressUpdatePayloadSchema.refine((value) =>
    Object.keys(value).length > 0
  , {
    message: "At least one field is required for update",
  }),
});

export const ShippingAddressValidation = {
  createShippingAddressValidationSchema,
  updateShippingAddressValidationSchema,
};
