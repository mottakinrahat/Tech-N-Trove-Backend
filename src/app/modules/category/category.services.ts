import status from "http-status";
import ApiError from "../../errors/apiError";
import prisma from "../../../shared/prisma";

const createCategoryIntoDB = async (payload: {
  categoryName: string;
  description: string;
}) => {
  const existing = await prisma.category.findFirst({
    where: {
      categoryName: {
        equals: payload.categoryName,
        mode: "insensitive",
      },
    },
  });

  if (existing) {
    throw new ApiError(
      status.CONFLICT,
      "A category with this name already exists",
    );
  }

  return prisma.category.create({ data: payload });
};

const getCategoriesFromDB = async () => {
  return prisma.category.findMany({
    orderBy: { categoryName: "asc" },
    include: {
      _count: { select: { product: true } },
    },
  });
};

const getSingleCategoryFromDB = async (categoryId: string) => {
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
    include: {
      _count: { select: { product: true } },
    },
  });

  if (!category) {
    throw new ApiError(status.NOT_FOUND, "Category not found");
  }

  return category;
};

const updateCategoryIntoDB = async (
  categoryId: string,
  payload: { categoryName?: string; description?: string },
) => {
  await getSingleCategoryFromDB(categoryId);

  if (payload.categoryName) {
    const duplicate = await prisma.category.findFirst({
      where: {
        categoryName: { equals: payload.categoryName, mode: "insensitive" },
        NOT: { id: categoryId },
      },
    });

    if (duplicate) {
      throw new ApiError(
        status.CONFLICT,
        "A category with this name already exists",
      );
    }
  }

  return prisma.category.update({
    where: { id: categoryId },
    data: payload,
  });
};

const deleteCategoryFromDB = async (categoryId: string) => {
  await getSingleCategoryFromDB(categoryId);

  const productCount = await prisma.product.count({
    where: { categoryId },
  });

  if (productCount > 0) {
    throw new ApiError(
      status.CONFLICT,
      `Cannot delete category — it has ${productCount} product(s) linked to it`,
    );
  }

  await prisma.category.delete({ where: { id: categoryId } });
};

export const CategoryServices = {
  createCategoryIntoDB,
  getCategoriesFromDB,
  getSingleCategoryFromDB,
  updateCategoryIntoDB,
  deleteCategoryFromDB,
};
