import z from "zod";

const createBrand = z.object({
  body: z.object({
    brandName: z.string().min(1, "Brand name is required"),
    description: z.string().optional(),
  }),
});

const updateBrand = z.object({
  body: z
    .object({
      brandName: z.string().min(1).optional(),
      description: z.string().optional().nullable(),
    })
    .refine((value) => Object.keys(value).length > 0, {
      message: "At least one field is required for update",
    }),
});

export const BrandValidation = {
  createBrand,
  updateBrand,
};
