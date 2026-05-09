import prisma from "../../../shared/prisma";

// ── Create / Update / Delete ──────────────────────────────────────────────────

const createReview = async (
  email: string,
  payload: {
    productId: string;
    orderId?: string;
    rating: number;
    comment?: string;
  }
) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");

  // If orderId provided, ensure the order belongs to this user
  if (payload.orderId) {
    const order = await prisma.order.findUnique({
      where: { id: payload.orderId },
    });
    if (!order || order.userId !== user.id) {
      throw new Error("Order not found or does not belong to you");
    }
  }

  // Prevent duplicate: same user + product + order
  const existing = await prisma.review.findFirst({
    where: {
      userId: user.id,
      productId: payload.productId,
      orderId: payload.orderId ?? null,
    },
  });
  if (existing) throw new Error("You have already reviewed this product");

  return prisma.review.create({
    data: {
      userId: user.id,
      productId: payload.productId,
      orderId: payload.orderId ?? null,
      rating: payload.rating,
      comment: payload.comment,
    },
    include: { user: { select: { email: true, buyer: true } } },
  });
};

const updateReview = async (
  email: string,
  reviewId: string,
  payload: { rating?: number; comment?: string }
) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");

  const review = await prisma.review.findUnique({ where: { id: reviewId } });
  if (!review || review.userId !== user.id)
    throw new Error("Review not found or you are not authorized");

  return prisma.review.update({
    where: { id: reviewId },
    data: { ...payload },
    include: { user: { select: { email: true, buyer: true } } },
  });
};

const deleteReview = async (email: string, reviewId: string, role: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");

  const review = await prisma.review.findUnique({ where: { id: reviewId } });
  if (!review) throw new Error("Review not found");

  const isAdminOrSuper = role === "ADMIN" || role === "SUPER_ADMIN";
  if (!isAdminOrSuper && review.userId !== user.id) {
    throw new Error("You are not authorized to delete this review");
  }

  return prisma.review.delete({ where: { id: reviewId } });
};

// ── Reads ─────────────────────────────────────────────────────────────────────

const getReviewsByProduct = async (
  productId: string,
  query: { page?: number; limit?: number }
) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  const skip = (page - 1) * limit;

  const [reviews, total] = await Promise.all([
    prisma.review.findMany({
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
    prisma.review.count({ where: { productId } }),
  ]);

  // Average rating
  const agg = await prisma.review.aggregate({
    where: { productId },
    _avg: { rating: true },
    _count: { rating: true },
  });

  return {
    reviews,
    total,
    page,
    limit,
    averageRating: agg._avg.rating ?? 0,
    totalRatings: agg._count.rating,
  };
};

const getMyReviews = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");

  return prisma.review.findMany({
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
};

const getAllReviews = async (query: { page?: number; limit?: number }) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 20;
  const skip = (page - 1) * limit;

  const [reviews, total] = await Promise.all([
    prisma.review.findMany({
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
    prisma.review.count(),
  ]);

  return { reviews, total, page, limit };
};

export const ReviewServices = {
  createReview,
  updateReview,
  deleteReview,
  getReviewsByProduct,
  getMyReviews,
  getAllReviews,
};
