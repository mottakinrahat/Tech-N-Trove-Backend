import status from "http-status";
import ApiError from "../../errors/apiError";
import prisma from "../../../shared/prisma";

const createDiscountIntoDB = async (payload: any) => {
  const { productIds, categoryIds, ...discountData } = payload;

  if (discountData.code) {
    const existingCode = await prisma.discount.findUnique({
      where: { code: discountData.code },
    });
    if (existingCode) {
      throw new ApiError(status.CONFLICT, "Discount code already exists");
    }
  }

  const result = await prisma.$transaction(async (tx) => {
    // Create the discount first
    const newDiscount = await tx.discount.create({
      data: discountData,
    });

    // If productIds provided, create the relations
    if (productIds && productIds.length > 0) {
      await tx.discountProduct.createMany({
        data: productIds.map((productId: string) => ({
          discountId: newDiscount.id,
          productId,
        })),
      });
    }

    // If categoryIds provided, create the relations
    if (categoryIds && categoryIds.length > 0) {
      await tx.discountCategory.createMany({
        data: categoryIds.map((categoryId: string) => ({
          discountId: newDiscount.id,
          categoryId,
        })),
      });
    }

    return newDiscount;
  });

  return prisma.discount.findUnique({
    where: { id: result.id },
    include: {
      products: { include: { product: true } },
      categories: { include: { category: true } },
    },
  });
};

const getDiscountsFromDB = async () => {
  return prisma.discount.findMany({
    include: {
      products: { include: { product: true } },
      categories: { include: { category: true } },
    },
    orderBy: { createdAt: "desc" },
  });
};

const getSingleDiscountFromDB = async (id: string) => {
  const discount = await prisma.discount.findUnique({
    where: { id },
    include: {
      products: { include: { product: true } },
      categories: { include: { category: true } },
    },
  });

  if (!discount) {
    throw new ApiError(status.NOT_FOUND, "Discount not found");
  }

  return discount;
};

const updateDiscountIntoDB = async (id: string, payload: any) => {
  const { productIds, categoryIds, ...discountData } = payload;
  
  await getSingleDiscountFromDB(id);

  if (discountData.code) {
    const existingCode = await prisma.discount.findFirst({
      where: { code: discountData.code, NOT: { id } },
    });
    if (existingCode) {
      throw new ApiError(status.CONFLICT, "Discount code already exists");
    }
  }

  const result = await prisma.$transaction(async (tx) => {
    const updatedDiscount = await tx.discount.update({
      where: { id },
      data: discountData,
    });

    if (productIds !== undefined) {
      await tx.discountProduct.deleteMany({ where: { discountId: id } });
      if (productIds.length > 0) {
        await tx.discountProduct.createMany({
          data: productIds.map((productId: string) => ({
            discountId: id,
            productId,
          })),
        });
      }
    }

    if (categoryIds !== undefined) {
      await tx.discountCategory.deleteMany({ where: { discountId: id } });
      if (categoryIds.length > 0) {
        await tx.discountCategory.createMany({
          data: categoryIds.map((categoryId: string) => ({
            discountId: id,
            categoryId,
          })),
        });
      }
    }

    return updatedDiscount;
  });

  return prisma.discount.findUnique({
    where: { id: result.id },
    include: {
      products: { include: { product: true } },
      categories: { include: { category: true } },
    },
  });
};

const deleteDiscountFromDB = async (id: string) => {
  await getSingleDiscountFromDB(id);

  await prisma.discount.delete({
    where: { id },
  });
};

const validateDiscountCode = async (code: string) => {
  const discount = await prisma.discount.findUnique({
    where: { code },
    include: {
      products: { select: { productId: true } },
      categories: { select: { categoryId: true } },
    },
  });

  if (!discount) {
    throw new ApiError(status.NOT_FOUND, "Invalid discount code");
  }

  if (!discount.isActive) {
    throw new ApiError(status.BAD_REQUEST, "Discount code is no longer active");
  }

  const now = new Date();
  if (now < discount.startDate || now > discount.endDate) {
    throw new ApiError(status.BAD_REQUEST, "Discount code is expired or not yet active");
  }

  return discount;
};

export const DiscountServices = {
  createDiscountIntoDB,
  getDiscountsFromDB,
  getSingleDiscountFromDB,
  updateDiscountIntoDB,
  deleteDiscountFromDB,
  validateDiscountCode,
};
