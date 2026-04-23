import express from "express";
import { UserRole } from "../../../../prisma/generated/prisma";
import { auth } from "../../middleWares/auth";
import validateRequest from "../../middleWares/validateRequest";
import { ReviewController } from "./review.controller";
import { ReviewValidation } from "./review.validation";

const router = express.Router();

const buyerAuth = auth(UserRole.BUYER);
const adminAuth = auth(UserRole.ADMIN, UserRole.SUPER_ADMIN);
const anyAuth = auth(
  UserRole.BUYER,
  UserRole.ADMIN,
  UserRole.SUPER_ADMIN,
  UserRole.MANAGER
);

// Public
router.get("/product/:productId", ReviewController.getReviewsByProduct);

// Authenticated buyer
router.post(
  "/",
  buyerAuth,
  validateRequest(ReviewValidation.createReview),
  ReviewController.createReview
);

router.get("/my", buyerAuth, ReviewController.getMyReviews);

router.patch(
  "/:reviewId",
  buyerAuth,
  validateRequest(ReviewValidation.updateReview),
  ReviewController.updateReview
);

// Owner OR admin can delete
router.delete("/:reviewId", anyAuth, ReviewController.deleteReview);

// Admin only
router.get("/", adminAuth, ReviewController.getAllReviews);

export const reviewRoutes = router;
