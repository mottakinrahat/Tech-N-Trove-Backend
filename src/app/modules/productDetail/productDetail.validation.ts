import z from "zod";

const createDetail = z.object({
  body: z.object({
    topic: z.string().min(1, "Topic is required"),
    description: z.string().min(1, "Description is required"),
    sortOrder: z.number().int().nonnegative().optional().default(0),
  }),
});

const updateDetail = z.object({
  body: z
    .object({
      topic: z.string().min(1).optional(),
      description: z.string().min(1).optional(),
      sortOrder: z.number().int().nonnegative().optional(),
    })
    .refine((value) => Object.keys(value).length > 0, {
      message: "At least one field is required for update",
    }),
});

export const ProductDetailValidation = {
  createDetail,
  updateDetail,
};
