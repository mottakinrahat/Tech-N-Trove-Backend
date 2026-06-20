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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../../../prisma/generated/prisma");
const apiError_1 = __importDefault(require("../../errors/apiError"));
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const prisma_2 = __importDefault(require("../../../shared/prisma"));
const product_constant_1 = require("./product.constant");
const product_helper_1 = require("./product.helper");
const fileUploader_1 = require("../../../helpers/fileUploader");
const createProductIntoDB = (payload, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 🔍 Find user by email
        const existingUser = yield prisma_2.default.user.findUnique({
            where: {
                email: user.email,
                status: prisma_1.UserStatus.ACTIVE
            },
            select: {
                id: true,
            },
        });
        if (!existingUser) {
            throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
        }
        // ✅ Inject productAddById from DB (NOT from payload)
        const result = yield prisma_2.default.product.create({
            data: Object.assign(Object.assign({}, payload), { productAddById: existingUser.id }),
            include: product_helper_1.productHelpers.productIncludeDefault,
        });
        return result;
    }
    catch (error) {
        if (error instanceof prisma_1.Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002") {
            throw new apiError_1.default(http_status_1.default.CONFLICT, "Product slug must be unique");
        }
        throw error;
    }
});
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
const getProductsFromDB = (filters, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, sortBy, sortOrder, skip } = paginationHelpers_1.paginationHelpers.calculatePagination(options);
    const { searchTerm, category, brand, minPrice, maxPrice, isPublished, isFeatured, status: productStatus } = filters, filterData = __rest(filters, ["searchTerm", "category", "brand", "minPrice", "maxPrice", "isPublished", "isFeatured", "status"]);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: [
                ...product_constant_1.productSearchableFields.map(field => ({
                    [field]: {
                        contains: searchTerm,
                        mode: 'insensitive'
                    }
                })),
                {
                    variants: {
                        some: {
                            OR: [
                                { title: { contains: searchTerm, mode: 'insensitive' } },
                                { sku: { contains: searchTerm, mode: 'insensitive' } },
                                { size: { contains: searchTerm, mode: 'insensitive' } },
                                { color: { contains: searchTerm, mode: 'insensitive' } }
                            ]
                        }
                    }
                }
            ]
        });
    }
    if (category && category.length > 0) {
        andConditions.push({
            category: {
                categoryName: {
                    equals: category,
                    mode: 'insensitive'
                }
            }
        });
    }
    if (brand && brand.length > 0) {
        andConditions.push({
            brand: {
                brandName: {
                    equals: brand,
                    mode: 'insensitive'
                }
            }
        });
    }
    if (minPrice !== undefined || maxPrice !== undefined) {
        const priceCondition = {};
        if (minPrice !== undefined)
            priceCondition.gte = Number(minPrice);
        if (maxPrice !== undefined)
            priceCondition.lte = Number(maxPrice);
        andConditions.push({
            variants: {
                some: {
                    price: priceCondition
                }
            }
        });
    }
    const published = product_helper_1.productHelpers.parseBooleanParam(isPublished);
    if (published !== undefined) {
        andConditions.push({ isPublished: published });
    }
    const featured = product_helper_1.productHelpers.parseBooleanParam(isFeatured);
    if (featured !== undefined) {
        andConditions.push({ isFeatured: featured });
    }
    if (productStatus) {
        andConditions.push({ status: productStatus });
    }
    if (Object.keys(filterData).length > 0) {
        const filterCondition = Object.keys(filterData).map((key) => ({
            [key]: {
                equals: filterData[key]
            }
        }));
        andConditions.push(...filterCondition);
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const [result, total] = yield prisma_2.default.$transaction([
        prisma_2.default.product.findMany({
            where: whereConditions,
            skip,
            take: limit,
            orderBy: sortBy && sortOrder ? [{ [sortBy]: sortOrder }] : [{ createdAt: "asc" }],
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
        prisma_2.default.product.count({ where: whereConditions })
    ]);
    const productIds = result.map(p => p.id);
    const ratings = yield prisma_2.default.review.groupBy({
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
        var _a, _b;
        const ratingData = ratings.find(r => r.productId === product.id);
        return Object.assign(Object.assign({}, product), { rating: (_a = ratingData === null || ratingData === void 0 ? void 0 : ratingData._avg.rating) !== null && _a !== void 0 ? _a : 0, reviews: (_b = ratingData === null || ratingData === void 0 ? void 0 : ratingData._count.rating) !== null && _b !== void 0 ? _b : 0 });
    });
    return { meta: { page, limit, total }, data: productsWithRatings };
});
const getSingleProductFromDB = (identifier_1, ...args_1) => __awaiter(void 0, [identifier_1, ...args_1], void 0, function* (identifier, options = {}) {
    var _a, _b;
    const andConditions = [
        product_helper_1.productHelpers.identifierWhere(identifier),
    ];
    if (options.publishedOnly) {
        andConditions.push({ isPublished: true });
    }
    const result = yield prisma_2.default.product.findFirst({
        where: { AND: andConditions },
        include: product_helper_1.productHelpers.productIncludeDefault,
    });
    if (!result) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Product not found");
    }
    const agg = yield prisma_2.default.review.aggregate({
        where: { productId: result.id },
        _avg: { rating: true },
        _count: { rating: true },
    });
    return Object.assign(Object.assign({}, result), { rating: (_a = agg._avg.rating) !== null && _a !== void 0 ? _a : 0, reviews: (_b = agg._count.rating) !== null && _b !== void 0 ? _b : 0 });
});
const updateProductIntoDB = (identifier, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existing = yield prisma_2.default.product.findFirst({
        where: product_helper_1.productHelpers.identifierWhere(identifier),
        select: { id: true },
    });
    if (!existing) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Product not found");
    }
    try {
        return yield prisma_2.default.product.update({
            where: { id: existing.id },
            data: payload,
            include: product_helper_1.productHelpers.productIncludeDefault,
        });
    }
    catch (error) {
        if (error instanceof prisma_1.Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002") {
            throw new apiError_1.default(http_status_1.default.CONFLICT, "Product slug must be unique");
        }
        throw error;
    }
});
const deleteProductIntoDB = (identifier) => __awaiter(void 0, void 0, void 0, function* () {
    const existing = yield prisma_2.default.product.findFirst({
        where: product_helper_1.productHelpers.identifierWhere(identifier),
        select: { id: true },
    });
    if (!existing) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Product not found");
    }
    yield prisma_2.default.product.delete({
        where: { id: existing.id },
    });
});
const assertProductExists = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield prisma_2.default.product.findUnique({
        where: { id: productId },
        select: { id: true },
    });
    if (!product) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Product not found");
    }
});
const createVariantIntoDB = (productId, req) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const file = req === null || req === void 0 ? void 0 : req.file;
    const uploadToCloudinary = yield fileUploader_1.fileUploader.uploadToCloudinary(file === null || file === void 0 ? void 0 : file.path);
    yield assertProductExists(productId);
    try {
        const result = yield prisma_2.default.productVariant.create({
            data: Object.assign(Object.assign({}, data), { productId }),
        });
        const createVarientImage = yield prisma_2.default.productImage.create({
            data: {
                url: uploadToCloudinary === null || uploadToCloudinary === void 0 ? void 0 : uploadToCloudinary.url,
                variantId: result.id,
            },
        });
        return result;
    }
    catch (error) {
        if (error instanceof prisma_1.Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002") {
            throw new apiError_1.default(http_status_1.default.CONFLICT, "Variant SKU must be unique");
        }
        throw error;
    }
});
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
const getVariantsByProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    yield assertProductExists(productId);
    return prisma_2.default.productVariant.findMany({
        where: { productId },
        orderBy: { createdAt: "asc" },
    });
});
const getSingleVariantFromDB = (productId, variantId) => __awaiter(void 0, void 0, void 0, function* () {
    const variant = yield prisma_2.default.productVariant.findFirst({
        where: {
            id: variantId,
            productId,
        },
    });
    if (!variant) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Variant not found");
    }
    return variant;
});
const updateVariantIntoDB = (productId, variantId, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield getSingleVariantFromDB(productId, variantId);
    try {
        return yield prisma_2.default.productVariant.update({
            where: { id: variantId },
            data,
        });
    }
    catch (error) {
        if (error instanceof prisma_1.Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002") {
            throw new apiError_1.default(http_status_1.default.CONFLICT, "Variant SKU must be unique");
        }
        throw error;
    }
});
const deleteVariantIntoDB = (productId, variantId) => __awaiter(void 0, void 0, void 0, function* () {
    yield getSingleVariantFromDB(productId, variantId);
    yield prisma_2.default.productVariant.delete({
        where: { id: variantId },
    });
});
const createVariantImageIntoDB = (productId, variantId, url) => __awaiter(void 0, void 0, void 0, function* () {
    yield getSingleVariantFromDB(productId, variantId);
    return prisma_2.default.productImage.create({
        data: {
            url,
            variantId,
        },
    });
});
const deleteProductImageIntoDB = (imageId) => __awaiter(void 0, void 0, void 0, function* () {
    const image = yield prisma_2.default.productImage.findUnique({
        where: { id: imageId },
    });
    if (!image) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Image not found");
    }
    yield prisma_2.default.productImage.delete({
        where: { id: imageId },
    });
});
exports.ProductServices = {
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
