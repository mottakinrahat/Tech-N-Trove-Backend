import z from "zod";

// Defines a single attribute field in the category's dynamic schema
const attributeFieldSchema = z.object({
  key: z.string().min(1, "Attribute key is required"),
  label: z.string().min(1, "Attribute label is required"),
  type: z.enum(["text", "number", "select", "boolean", "textarea"] as const),
  options: z.array(z.string()).optional(), // only relevant when type === "select"
  required: z.boolean().default(false),
});

const createCategory = z.object({
  body: z.object({
    categoryName: z.string().min(1, "Category name is required"),
    description: z.string().optional(),
    slug: z.string().optional(),
    attributeSchema: z.array(attributeFieldSchema).optional(),
  }),
});

const updateCategory = z.object({
  body: z
    .object({
      categoryName: z.string().min(1).optional(),
      description: z.string().optional(),
      slug: z.string().optional(),
      attributeSchema: z.array(attributeFieldSchema).optional(),
    })
    .refine((value) => Object.keys(value).length > 0, {
      message: "At least one field is required for update",
    }),
});

export const CategoryValidation = {
  createCategory,
  updateCategory,
};
