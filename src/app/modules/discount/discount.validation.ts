import { z } from "zod";
import { DiscountType } from "../../../../prisma/generated/prisma";

const createDiscount = z.object({
  body: z.object({
    name: z.string({
      message: "Name is required",
    }),
    type: z.nativeEnum(DiscountType, {
      message: "Discount type is required",
    }),
    value: z.number({
      message: "Value is required",
    }),
    isGlobal: z.boolean().optional(),
    startDate: z.string({
      message: "Start date is required",
    }),
    endDate: z.string({
      message: "End date is required",
    }),
    isActive: z.boolean().optional(),
    priority: z.number().optional(),
    code: z.string().optional(),
    productIds: z.array(z.string()).optional(),
    categoryIds: z.array(z.string()).optional(),
  }),
});

const updateDiscount = z.object({
  body: z.object({
    name: z.string().optional(),
    type: z.nativeEnum(DiscountType).optional(),
    value: z.number().optional(),
    isGlobal: z.boolean().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    isActive: z.boolean().optional(),
    priority: z.number().optional(),
    code: z.string().optional(),
    productIds: z.array(z.string()).optional(),
    categoryIds: z.array(z.string()).optional(),
  }),
});

export const DiscountValidation = {
  createDiscount,
  updateDiscount,
};
