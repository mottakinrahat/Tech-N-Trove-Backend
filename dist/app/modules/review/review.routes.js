"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRoutes = void 0;
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../../../../prisma/generated/prisma");
const auth_1 = require("../../middleWares/auth");
const validateRequest_1 = __importDefault(require("../../middleWares/validateRequest"));
const review_controller_1 = require("./review.controller");
const review_validation_1 = require("./review.validation");
const router = express_1.default.Router();
const buyerAuth = (0, auth_1.auth)(prisma_1.UserRole.BUYER);
const adminAuth = (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.SUPER_ADMIN);
const anyAuth = (0, auth_1.auth)(prisma_1.UserRole.BUYER, prisma_1.UserRole.ADMIN, prisma_1.UserRole.SUPER_ADMIN, prisma_1.UserRole.MANAGER);
// Public
router.get("/product/:productId", review_controller_1.ReviewController.getReviewsByProduct);
// Authenticated buyer
router.post("/", buyerAuth, (0, validateRequest_1.default)(review_validation_1.ReviewValidation.createReview), review_controller_1.ReviewController.createReview);
router.get("/my", buyerAuth, review_controller_1.ReviewController.getMyReviews);
router.patch("/:reviewId", buyerAuth, (0, validateRequest_1.default)(review_validation_1.ReviewValidation.updateReview), review_controller_1.ReviewController.updateReview);
// Owner OR admin can delete
router.delete("/:reviewId", anyAuth, review_controller_1.ReviewController.deleteReview);
// Admin only
router.get("/", adminAuth, review_controller_1.ReviewController.getAllReviews);
exports.reviewRoutes = router;
