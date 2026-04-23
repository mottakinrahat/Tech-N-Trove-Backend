import express from "express";
import { UserRole } from "../../../../prisma/generated/prisma";
import { auth } from "../../middleWares/auth";
import validateRequest from "../../middleWares/validateRequest";
import { WishlistController } from "./wishlist.controller";
import { WishlistValidation } from "./wishlist.validation";

const router = express.Router();

const buyerAuth = auth(UserRole.BUYER);

// GET my wishlist
router.get("/", buyerAuth, WishlistController.getMyWishlist);

// POST add to wishlist
router.post(
  "/",
  buyerAuth,
  validateRequest(WishlistValidation.addToWishlist),
  WishlistController.addToWishlist
);

// PATCH toggle (add if not present, remove if present)
router.patch(
  "/toggle/:productId",
  buyerAuth,
  WishlistController.toggleWishlist
);

// DELETE remove specific product from wishlist
router.delete("/:productId", buyerAuth, WishlistController.removeFromWishlist);

export const wishlistRoutes = router;
