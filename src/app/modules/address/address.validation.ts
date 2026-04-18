import z from "zod";

const addressPayloadSchema = z.object({
  label: z.string().optional(),
  addressType: z.enum(["HOME", "OFFICE", "OTHER"]).optional(),
  recipientName: z.string().min(1, "Recipient name is required").optional(),
  recipientPhone: z.string().min(1, "Recipient phone is required").optional(),
  line1: z.string().min(1, "Address line 1 is required").optional(),
  city: z.string().min(1, "City is required").optional(),
  state: z.string().min(1, "State is required").optional(),
  postalCode: z.string().min(1, "Postal code is required").optional(),
  alternatePhone: z.string().optional(),
  line2: z.string().optional(),
  landmark: z.string().optional(),
  country: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
  logn: z.number().optional(),
  deliveryInstructions: z.string().optional(),
  isDefault: z.boolean().optional(),
  fullName: z.string().optional(),
  phoneNumber: z.string().optional(),
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
});

const createAddressValidationSchema = z.object({
  body: z.union([
    addressPayloadSchema,
    z.object({
      addresses: z.array(addressPayloadSchema).min(1),
    }),
  ]),
});

const updateAddressValidationSchema = z.object({
  body: z
    .object({
      label: z.string().optional(),
      addressType: z.enum(["HOME", "OFFICE", "OTHER"]).optional(),
      recipientName: z.string().min(1).optional(),
      recipientPhone: z.string().min(1).optional(),
      alternatePhone: z.string().optional().nullable(),
      line1: z.string().min(1).optional(),
      line2: z.string().optional().nullable(),
      landmark: z.string().optional().nullable(),
      city: z.string().min(1).optional(),
      state: z.string().min(1).optional(),
      postalCode: z.string().min(1).optional(),
      country: z.string().optional(),
      deliveryInstructions: z.string().optional().nullable(),
      isDefault: z.boolean().optional(),
    })
    .refine((value) => Object.keys(value).length > 0, {
      message: "At least one field is required for update",
    }),
});

export const AddressValidation = {
  createAddressValidationSchema,
  updateAddressValidationSchema,
};
