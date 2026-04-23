import { z } from "zod";

const addToWishlist = z.object({
  body: z.object({
    productId: z.string({ required_error: "productId is required" }),
  }),
});

export const WishlistValidation = { addToWishlist };
