import status from "http-status";
import { Prisma, UserStatus } from "../../../../prisma/generated/prisma";
import ApiError from "../../errors/apiError";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../interfaces/pagination";
import { productSearchableFields } from "./product.constant";
import { IProductFilterRequest } from "./product.interface";
import { productHelpers } from "./product.helper";
import { fileUploader } from "../../../helpers/fileUploader";
import { object } from "zod";


const createProductIntoDB = async (
  payload: Prisma.ProductUncheckedCreateInput,
  user: any
) => {
  try {
    // 🔍 Find user by email
    const existingUser = await prisma.user.findUnique({
      where: {
        email: user.email,
        status: UserStatus.ACTIVE
      },
      select: {
        id: true,
      },
    });

    if (!existingUser) {
      throw new ApiError(status.NOT_FOUND, "User not found");
    }

    // ✅ Inject productAddById from DB (NOT from payload)
    const result = await prisma.product.create({
      data: {
        ...payload,
        productAddById: existingUser.id,
      },
      include: productHelpers.productIncludeDefault,
    });

    return result;
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

// const getProductsFromDB = async (
//   params: IProductFilterRequest,
//   options: IPaginationOptions,
//   listOptions: { publishedOnly?: boolean } = {},
// ) => {
//   const { page, limit, sortBy, sortOrder, skip } =
//     paginationHelpers.calculatePagination(options);

//   const andConditions = productHelpers.buildProductFilterConditions(params, {
//     publishedOnly: listOptions.publishedOnly ?? true,
//   });

//   const whereConditions: Prisma.ProductWhereInput =
//     andConditions.length > 0 ? { AND: andConditions } : {};

//   const orderField = sortBy || "createdAt";
//   const orderDir = sortOrder === "asc" ? "asc" : "desc";

//   const [data, total] = await prisma.$transaction([
//     prisma.product.findMany({
//       where: whereConditions,
//       skip,
//       take: limit,
//       orderBy: { [orderField]: orderDir },
//       include: productHelpers.productIncludeDefault,
//     }),
//     prisma.product.count({ where: whereConditions }),
//   ]);

//   return {
//     meta: { page, limit, total },
//     data,
//   };
// };

const getProductsFromDB = async (filters: IProductFilterRequest, options: IPaginationOptions) => {
  const { page, limit, sortBy, sortOrder, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, category, brand, minPrice, maxPrice, isPublished, isFeatured, status: productStatus, ...filterData } = filters;
  const andConditions: Prisma.ProductWhereInput[] = [];

  if (searchTerm) {
    andConditions.push({
      OR: [
        ...productSearchableFields.map(field => ({
          [field]: {
            contains: searchTerm,
            mode: 'insensitive' as const
          }
        })),
        {
          variants: {
            some: {
              OR: [
                { title: { contains: searchTerm, mode: 'insensitive' as const } },
                { sku: { contains: searchTerm, mode: 'insensitive' as const } },
                { size: { contains: searchTerm, mode: 'insensitive' as const } },
                { color: { contains: searchTerm, mode: 'insensitive' as const } }
              ]
            }
          }
        }
      ]
    })
  }

  if (category && category.length > 0) {
    andConditions.push({
      category: {
        categoryName: {
          equals: category,
          mode: 'insensitive'
        }
      }
    })
  }

  if (brand && brand.length > 0) {
    andConditions.push({
      brand: {
        brandName: {
          equals: brand,
          mode: 'insensitive'
        }
      }
    })
  }

  if (minPrice !== undefined || maxPrice !== undefined) {
    const priceCondition: any = {};
    if (minPrice !== undefined) priceCondition.gte = Number(minPrice);
    if (maxPrice !== undefined) priceCondition.lte = Number(maxPrice);

    andConditions.push({
      variants: {
        some: {
          price: priceCondition
        }
      }
    });
  }

  const published = productHelpers.parseBooleanParam(isPublished);
  if (published !== undefined) {
    andConditions.push({ isPublished: published });
  }

  const featured = productHelpers.parseBooleanParam(isFeatured);
  if (featured !== undefined) {
    andConditions.push({ isFeatured: featured });
  }

  if (productStatus) {
    andConditions.push({ status: productStatus as any });
  }

  if (Object.keys(filterData).length > 0) {
    const filterCondition = Object.keys(filterData).map((key) => ({
      [key]: {
        equals: (filterData as any)[key]
      }
    }))
    andConditions.push(...filterCondition);
  }

  const whereConditions: Prisma.ProductWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const [result, total] = await prisma.$transaction([
    prisma.product.findMany({
      where: whereConditions,
      skip,
      take: limit,
      orderBy:
        sortBy && sortOrder ? [{ [sortBy]: sortOrder }] : [{ createdAt: "asc" }],
      include: {
        category: {
          select: {
            categoryName: true
          }
        },
        brand: {
          select: {
            brandName: true
          }
        },
        variants: {
          select: {
            id: true,
            title: true,
            price: true,
            stock: true,
            variantImages: {
              select: {
                url: true,
              },
            }
          }
        }
      }
    }),
    prisma.product.count({ where: whereConditions })
  ]);

  const productIds = result.map(p => p.id);
  const ratings = await prisma.review.groupBy({
    by: ['productId'],
    where: {
      productId: { in: productIds }
    },
    _avg: {
      rating: true
    },
    _count: {
      rating: true
    }
  });

  const productsWithRatings = result.map(product => {
    const ratingData = ratings.find(r => r.productId === product.id);
    return {
      ...product,
      rating: ratingData?._avg.rating ?? 0,
      reviews: ratingData?._count.rating ?? 0
    };
  });

  return { meta: { page, limit, total }, data: productsWithRatings };
}















const getSingleProductFromDB = async (
  identifier: string,
  options: { publishedOnly?: boolean } = {},
) => {
  const andConditions: Prisma.ProductWhereInput[] = [
    productHelpers.identifierWhere(identifier),
  ];

  if (options.publishedOnly) {
    andConditions.push({ isPublished: true });
  }

  const result = await prisma.product.findFirst({
    where: { AND: andConditions },
    include: productHelpers.productIncludeDefault,
  });

  if (!result) {
    throw new ApiError(status.NOT_FOUND, "Product not found");
  }

  const agg = await prisma.review.aggregate({
    where: { productId: result.id },
    _avg: { rating: true },
    _count: { rating: true },
  });

  return {
    ...result,
    rating: agg._avg.rating ?? 0,
    reviews: agg._count.rating ?? 0
  };
};

const updateProductIntoDB = async (
  identifier: string,
  payload: Prisma.ProductUncheckedUpdateInput,
) => {
  const existing = await prisma.product.findFirst({
    where: productHelpers.identifierWhere(identifier),
    select: { id: true },
  });

  if (!existing) {
    throw new ApiError(status.NOT_FOUND, "Product not found");
  }

  try {
    return await prisma.product.update({
      where: { id: existing.id },
      data: payload,
      include: productHelpers.productIncludeDefault,
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
    where: productHelpers.identifierWhere(identifier),
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
  req: any,
) => {
  const data = req.body;

  const file = req?.file;
  const uploadToCloudinary = await fileUploader.uploadToCloudinary(file?.path);

  await assertProductExists(productId);

  try {
    const result = await prisma.productVariant.create({
      data: {
        ...data,
        productId,
      },
    });
    const createVarientImage = await prisma.productImage.create({
      data: {
        url: uploadToCloudinary?.url,
        variantId: result.id,
      },
    });
    return result;
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
// const createVariantIntoDB = async (
//   productId: string,
//   data: Omit<Prisma.ProductVariantUncheckedCreateInput, "productId">,
// ) => {
//   await assertProductExists(productId);

//   try {
//     const result= await prisma.productVariant.create({
//       data: {
//         ...data,
//         productId,
//       },
//     });

//     return result;
//   } catch (error) {
//     if (
//       error instanceof Prisma.PrismaClientKnownRequestError &&
//       error.code === "P2002"
//     ) {
//       throw new ApiError(status.CONFLICT, "Variant SKU must be unique");
//     }
//     throw error;
//   }
// };

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



const createVariantImageIntoDB = async (
  productId: string,
  variantId: string,
  url: string,
) => {
  await getSingleVariantFromDB(productId, variantId);

  return prisma.productImage.create({
    data: {
      url,
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
  createVariantImageIntoDB,
  deleteProductImageIntoDB,
};
