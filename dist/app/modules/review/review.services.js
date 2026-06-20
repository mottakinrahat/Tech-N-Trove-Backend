"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// ── Create / Update / Delete ──────────────────────────────────────────────────
const createReview = (email, payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user)
        throw new Error("User not found");
    // If orderId provided, ensure the order belongs to this user
    if (payload.orderId) {
        const order = yield prisma_1.default.order.findUnique({
            where: { id: payload.orderId },
        });
        if (!order || order.userId !== user.id) {
            throw new Error("Order not found or does not belong to you");
        }
    }
    // Prevent duplicate: same user + product + order
    const existing = yield prisma_1.default.review.findFirst({
        where: {
            userId: user.id,
            productId: payload.productId,
            orderId: (_a = payload.orderId) !== null && _a !== void 0 ? _a : null,
        },
    });
    if (existing)
        throw new Error("You have already reviewed this product");
    return prisma_1.default.review.create({
        data: {
            userId: user.id,
            productId: payload.productId,
            orderId: (_b = payload.orderId) !== null && _b !== void 0 ? _b : null,
            rating: payload.rating,
            comment: payload.comment,
        },
        include: { user: { select: { email: true, buyer: true } } },
    });
});
const updateReview = (email, reviewId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user)
        throw new Error("User not found");
    const review = yield prisma_1.default.review.findUnique({ where: { id: reviewId } });
    if (!review || review.userId !== user.id)
        throw new Error("Review not found or you are not authorized");
    return prisma_1.default.review.update({
        where: { id: reviewId },
        data: Object.assign({}, payload),
        include: { user: { select: { email: true, buyer: true } } },
    });
});
const deleteReview = (email, reviewId, role) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user)
        throw new Error("User not found");
    const review = yield prisma_1.default.review.findUnique({ where: { id: reviewId } });
    if (!review)
        throw new Error("Review not found");
    const isAdminOrSuper = role === "ADMIN" || role === "SUPER_ADMIN";
    if (!isAdminOrSuper && review.userId !== user.id) {
        throw new Error("You are not authorized to delete this review");
    }
    return prisma_1.default.review.delete({ where: { id: reviewId } });
});
// ── Reads ─────────────────────────────────────────────────────────────────────
const getReviewsByProduct = (productId, query) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;
    const [reviews, total] = yield Promise.all([
        prisma_1.default.review.findMany({
            where: { productId },
            include: {
                user: {
                    select: {
                        email: true,
                        buyer: { select: { name: true, profilePhoto: true } },
                    },
                },
            },
            orderBy: { createdAt: "desc" },
            skip,
            take: limit,
        }),
        prisma_1.default.review.count({ where: { productId } }),
    ]);
    // Average rating
    const agg = yield prisma_1.default.review.aggregate({
        where: { productId },
        _avg: { rating: true },
        _count: { rating: true },
    });
    return {
        reviews,
        total,
        page,
        limit,
        averageRating: (_a = agg._avg.rating) !== null && _a !== void 0 ? _a : 0,
        totalRatings: agg._count.rating,
    };
});
const getMyReviews = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user)
        throw new Error("User not found");
    return prisma_1.default.review.findMany({
        where: { userId: user.id },
        include: {
            product: {
                select: {
                    id: true,
                    name: true,
                    variants: {
                        take: 1,
                        select: {
                            variantImages: { take: 1, select: { url: true } },
                        },
                    },
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });
});
const getAllReviews = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 20;
    const skip = (page - 1) * limit;
    const [reviews, total] = yield Promise.all([
        prisma_1.default.review.findMany({
            include: {
                user: {
                    select: {
                        email: true,
                        buyer: { select: { name: true, profilePhoto: true } },
                    },
                },
                product: { select: { id: true, name: true } },
            },
            orderBy: { createdAt: "desc" },
            skip,
            take: limit,
        }),
        prisma_1.default.review.count(),
    ]);
    return { reviews, total, page, limit };
});
exports.ReviewServices = {
    createReview,
    updateReview,
    deleteReview,
    getReviewsByProduct,
    getMyReviews,
    getAllReviews,
};
