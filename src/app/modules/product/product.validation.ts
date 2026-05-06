import z from "zod";

const createProduct = z.object({
  body: z.object({
    name: z.string().min(1),
    slug: z.string().min(1),
    categoryId: z.string().min(1),
    description: z.string().optional(),
    brandId: z.string().optional(),
    images: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    isPublished: z.boolean().optional(),
    isFeatured: z.boolean().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

const updateProduct = z.object({
  body: z
    .object({
      name: z.string().min(1).optional(),
      slug: z.string().min(1).optional(),
      categoryId: z.string().min(1).optional(),
      description: z.string().optional().nullable(),
      brandId: z.string().optional().nullable(),
      images: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      isPublished: z.boolean().optional(),
      isFeatured: z.boolean().optional(),
      metaTitle: z.string().optional().nullable(),
      metaDescription: z.string().optional().nullable(),
    })
    .refine((value) => Object.keys(value).length > 0, {
      message: "At least one field is required for update",
    }),
});

const createVariant = z.object({
  body: z.object({
    sku: z.string().min(1),
    title: z.string().optional(),
    price: z.number().nonnegative(),
    comparePrice: z.number().nonnegative().optional(),
    costPrice: z.number().nonnegative().optional(),
    stock: z.number().int().nonnegative(),
    lowStockThreshold: z.number().int().nonnegative().optional(),
    color: z.string().optional(),
    size: z.string().optional(),
    material: z.string().optional(),
    weight: z.number().nonnegative().optional(),
    barcode: z.string().optional(),
    isActive: z.boolean().optional(),
  }),
});

const updateVariant = z.object({
  body: z
    .object({
      sku: z.string().min(1).optional(),
      title: z.string().optional().nullable(),
      price: z.number().nonnegative().optional(),
      comparePrice: z.number().nonnegative().optional().nullable(),
      costPrice: z.number().nonnegative().optional().nullable(),
      stock: z.number().int().nonnegative().optional(),
      lowStockThreshold: z.number().int().nonnegative().optional().nullable(),
      color: z.string().optional().nullable(),
      size: z.string().optional().nullable(),
      material: z.string().optional().nullable(),
      weight: z.number().nonnegative().optional().nullable(),
      barcode: z.string().optional().nullable(),
      isActive: z.boolean().optional(),
    })
    .refine((value) => Object.keys(value).length > 0, {
      message: "At least one field is required for update",
    }),
});

const createProductImage = z.object({
  body: z.object({
    url: z.string().min(1),
  }),
});

export const ProductValidation = {
  createProduct,
  updateProduct,
  createVariant,
  updateVariant,
  createProductImage,
};
