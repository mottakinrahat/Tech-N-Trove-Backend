import { z } from "zod";

const addToWishlist = z.object({
  body: z.object({
    productId: z.string({ error: "productId is required" }),
  }),
});

export const WishlistValidation = { addToWishlist };
