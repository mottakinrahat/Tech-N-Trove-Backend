import status from "http-status";
import { Prisma } from "../../../../prisma/generated/prisma";
import ApiError from "../../errors/apiError";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../interfaces/pagination";
import { productSearchableFields } from "./product.constant";
import { IProductFilterRequest } from "./product.interface";

const productIncludeDefault = {
  variants: {
    include: {
      variantImages: true,
    },
  },
  productImages: true,
} satisfies Prisma.ProductInclude;

const identifierWhere = (
  identifier: string,
): Prisma.ProductWhereInput => ({
  OR: [{ id: identifier }, { slug: identifier }],
});

const parseBooleanParam = (value: string | boolean | undefined) => {
  if (typeof value === "boolean") return value;
  if (value === "true") return true;
  if (value === "false") return false;
  return undefined;
};

const buildProductFilterConditions = (
  params: IProductFilterRequest,
  options: { publishedOnly?: boolean },
) => {
  const { searchTerm, ...filterData } = params;
  const andConditions: Prisma.ProductWhereInput[] = [];

  if (searchTerm) {
    andConditions.push({
      OR: productSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive" as const,
        },
      })),
    });
  }

  if (filterData.categoryId) {
    andConditions.push({ categoryId: filterData.categoryId });
  }

  if (filterData.brand) {
    andConditions.push({
      brand: {
        equals: filterData.brand,
        mode: "insensitive",
      },
    });
  }

  const published = parseBooleanParam(filterData.isPublished);
  if (published !== undefined) {
    andConditions.push({ isPublished: published });
  } else if (options.publishedOnly) {
    andConditions.push({ isPublished: true });
  }

  const featured = parseBooleanParam(filterData.isFeatured);
  if (featured !== undefined) {
    andConditions.push({ isFeatured: featured });
  }

  return andConditions;
};

const createProductIntoDB = async (payload: Prisma.ProductUncheckedCreateInput) => {
  try {
    return await prisma.product.create({
      data: payload,
      include: productIncludeDefault,
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new ApiError(status.CONFLICT, "Product slug must be unique");
    }
    throw error;
  }
};

const getProductsFromDB = async (
  params: IProductFilterRequest,
  options: IPaginationOptions,
  listOptions: { publishedOnly?: boolean } = {},
) => {
  const { page, limit, sortBy, sortOrder, skip } =
    paginationHelpers.calculatePagination(options);

  const andConditions = buildProductFilterConditions(params, {
    publishedOnly: listOptions.publishedOnly ?? true,
  });

  const whereConditions: Prisma.ProductWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const orderField = sortBy || "createdAt";
  const orderDir = sortOrder === "asc" ? "asc" : "desc";

  const [data, total] = await prisma.$transaction([
    prisma.product.findMany({
      where: whereConditions,
      skip,
      take: limit,
      orderBy: { [orderField]: orderDir },
      include: productIncludeDefault,
    }),
    prisma.product.count({ where: whereConditions }),
  ]);

  return {
    meta: { page, limit, total },
    data,
  };
};

const getSingleProductFromDB = async (
  identifier: string,
  options: { publishedOnly?: boolean } = {},
) => {
  const andConditions: Prisma.ProductWhereInput[] = [
    identifierWhere(identifier),
  ];

  if (options.publishedOnly) {
    andConditions.push({ isPublished: true });
  }

  const result = await prisma.product.findFirst({
    where: { AND: andConditions },
    include: productIncludeDefault,
  });

  if (!result) {
    throw new ApiError(status.NOT_FOUND, "Product not found");
  }

  return result;
};

const updateProductIntoDB = async (
  identifier: string,
  payload: Prisma.ProductUncheckedUpdateInput,
) => {
  const existing = await prisma.product.findFirst({
    where: identifierWhere(identifier),
    select: { id: true },
  });

  if (!existing) {
    throw new ApiError(status.NOT_FOUND, "Product not found");
  }

  try {
    return await prisma.product.update({
      where: { id: existing.id },
      data: payload,
      include: productIncludeDefault,
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new ApiError(status.CONFLICT, "Product slug must be unique");
    }
    throw error;
  }
};

const deleteProductIntoDB = async (identifier: string) => {
  const existing = await prisma.product.findFirst({
    where: identifierWhere(identifier),
    select: { id: true },
  });

  if (!existing) {
    throw new ApiError(status.NOT_FOUND, "Product not found");
  }

  await prisma.product.delete({
    where: { id: existing.id },
  });
};

const assertProductExists = async (productId: string) => {
  const product = await prisma.product.findUnique({
    where: { id: productId },
    select: { id: true },
  });

  if (!product) {
    throw new ApiError(status.NOT_FOUND, "Product not found");
  }
};

const createVariantIntoDB = async (
  productId: string,
  data: Omit<Prisma.ProductVariantUncheckedCreateInput, "productId">,
) => {
  await assertProductExists(productId);

  try {
    return await prisma.productVariant.create({
      data: {
        ...data,
        productId,
      },
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new ApiError(status.CONFLICT, "Variant SKU must be unique");
    }
    throw error;
  }
};

const getVariantsByProductFromDB = async (productId: string) => {
  await assertProductExists(productId);

  return prisma.productVariant.findMany({
    where: { productId },
    orderBy: { createdAt: "asc" },
  });
};

const getSingleVariantFromDB = async (
  productId: string,
  variantId: string,
) => {
  const variant = await prisma.productVariant.findFirst({
    where: {
      id: variantId,
      productId,
    },
  });

  if (!variant) {
    throw new ApiError(status.NOT_FOUND, "Variant not found");
  }

  return variant;
};

const updateVariantIntoDB = async (
  productId: string,
  variantId: string,
  data: Prisma.ProductVariantUpdateInput,
) => {
  await getSingleVariantFromDB(productId, variantId);

  try {
    return await prisma.productVariant.update({
      where: { id: variantId },
      data,
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new ApiError(status.CONFLICT, "Variant SKU must be unique");
    }
    throw error;
  }
};

const deleteVariantIntoDB = async (productId: string, variantId: string) => {
  await getSingleVariantFromDB(productId, variantId);

  await prisma.productVariant.delete({
    where: { id: variantId },
  });
};

const createProductImageIntoDB = async (productId: string, url: string) => {
  await assertProductExists(productId);

  return prisma.productImage.create({
    data: {
      url,
      productId,
    },
  });
};

const createVariantImageIntoDB = async (
  productId: string,
  variantId: string,
  url: string,
) => {
  await getSingleVariantFromDB(productId, variantId);

  return prisma.productImage.create({
    data: {
      url,
      productId,
      variantId,
    },
  });
};

const deleteProductImageIntoDB = async (imageId: string) => {
  const image = await prisma.productImage.findUnique({
    where: { id: imageId },
  });

  if (!image) {
    throw new ApiError(status.NOT_FOUND, "Image not found");
  }

  await prisma.productImage.delete({
    where: { id: imageId },
  });
};

export const ProductServices = {
  createProductIntoDB,
  getProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductIntoDB,
  createVariantIntoDB,
  getVariantsByProductFromDB,
  getSingleVariantFromDB,
  updateVariantIntoDB,
  deleteVariantIntoDB,
  createProductImageIntoDB,
  createVariantImageIntoDB,
  deleteProductImageIntoDB,
};
