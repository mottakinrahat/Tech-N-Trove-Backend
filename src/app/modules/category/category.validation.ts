import z from "zod";

const createCategory = z.object({
  body: z.object({
    categoryName: z.string().min(1, "Category name is required"),
    description: z.string().min(1, "Description is required"),
  }),
});

const updateCategory = z.object({
  body: z
    .object({
      categoryName: z.string().min(1).optional(),
      description: z.string().min(1).optional(),
    })
    .refine((value) => Object.keys(value).length > 0, {
      message: "At least one field is required for update",
    }),
});

export const CategoryValidation = {
  createCategory,
  updateCategory,
};
