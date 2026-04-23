import { z } from "zod";

const createReview = z.object({
  body: z.object({
    productId: z.string({ required_error: "productId is required" }),
    orderId: z.string().optional(),
    rating: z
      .number({ required_error: "rating is required" })
      .int()
      .min(1, "Rating must be at least 1")
      .max(5, "Rating must be at most 5"),
    comment: z.string().optional(),
  }),
});

const updateReview = z.object({
  body: z.object({
    rating: z.number().int().min(1).max(5).optional(),
    comment: z.string().optional(),
  }),
});

export const ReviewValidation = { createReview, updateReview };
