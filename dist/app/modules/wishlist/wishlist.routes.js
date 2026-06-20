"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wishlistRoutes = void 0;
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../../../../prisma/generated/prisma");
const auth_1 = require("../../middleWares/auth");
const validateRequest_1 = __importDefault(require("../../middleWares/validateRequest"));
const wishlist_controller_1 = require("./wishlist.controller");
const wishlist_validation_1 = require("./wishlist.validation");
const router = express_1.default.Router();
const buyerAuth = (0, auth_1.auth)(prisma_1.UserRole.BUYER);
// GET my wishlist
router.get("/", buyerAuth, wishlist_controller_1.WishlistController.getMyWishlist);
// POST add to wishlist
router.post("/", buyerAuth, (0, validateRequest_1.default)(wishlist_validation_1.WishlistValidation.addToWishlist), wishlist_controller_1.WishlistController.addToWishlist);
// PATCH toggle (add if not present, remove if present)
router.patch("/toggle/:productId", buyerAuth, wishlist_controller_1.WishlistController.toggleWishlist);
// DELETE remove specific product from wishlist
router.delete("/:productId", buyerAuth, wishlist_controller_1.WishlistController.removeFromWishlist);
exports.wishlistRoutes = router;
