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
exports.DiscountServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../../errors/apiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createDiscountIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { productIds, categoryIds } = payload, discountData = __rest(payload, ["productIds", "categoryIds"]);
    if (discountData.code) {
        const existingCode = yield prisma_1.default.discount.findUnique({
            where: { code: discountData.code },
        });
        if (existingCode) {
            throw new apiError_1.default(http_status_1.default.CONFLICT, "Discount code already exists");
        }
    }
    const result = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        // Create the discount first
        const newDiscount = yield tx.discount.create({
            data: discountData,
        });
        // If productIds provided, create the relations
        if (productIds && productIds.length > 0) {
            yield tx.discountProduct.createMany({
                data: productIds.map((productId) => ({
                    discountId: newDiscount.id,
                    productId,
                })),
            });
        }
        // If categoryIds provided, create the relations
        if (categoryIds && categoryIds.length > 0) {
            yield tx.discountCategory.createMany({
                data: categoryIds.map((categoryId) => ({
                    discountId: newDiscount.id,
                    categoryId,
                })),
            });
        }
        return newDiscount;
    }));
    return prisma_1.default.discount.findUnique({
        where: { id: result.id },
        include: {
            products: { include: { product: true } },
            categories: { include: { category: true } },
        },
    });
});
const getDiscountsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.discount.findMany({
        include: {
            products: { include: { product: true } },
            categories: { include: { category: true } },
        },
        orderBy: { createdAt: "desc" },
    });
});
const getSingleDiscountFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const discount = yield prisma_1.default.discount.findUnique({
        where: { id },
        include: {
            products: { include: { product: true } },
            categories: { include: { category: true } },
        },
    });
    if (!discount) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Discount not found");
    }
    return discount;
});
const updateDiscountIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { productIds, categoryIds } = payload, discountData = __rest(payload, ["productIds", "categoryIds"]);
    yield getSingleDiscountFromDB(id);
    if (discountData.code) {
        const existingCode = yield prisma_1.default.discount.findFirst({
            where: { code: discountData.code, NOT: { id } },
        });
        if (existingCode) {
            throw new apiError_1.default(http_status_1.default.CONFLICT, "Discount code already exists");
        }
    }
    const result = yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const updatedDiscount = yield tx.discount.update({
            where: { id },
            data: discountData,
        });
        if (productIds !== undefined) {
            yield tx.discountProduct.deleteMany({ where: { discountId: id } });
            if (productIds.length > 0) {
                yield tx.discountProduct.createMany({
                    data: productIds.map((productId) => ({
                        discountId: id,
                        productId,
                    })),
                });
            }
        }
        if (categoryIds !== undefined) {
            yield tx.discountCategory.deleteMany({ where: { discountId: id } });
            if (categoryIds.length > 0) {
                yield tx.discountCategory.createMany({
                    data: categoryIds.map((categoryId) => ({
                        discountId: id,
                        categoryId,
                    })),
                });
            }
        }
        return updatedDiscount;
    }));
    return prisma_1.default.discount.findUnique({
        where: { id: result.id },
        include: {
            products: { include: { product: true } },
            categories: { include: { category: true } },
        },
    });
});
const deleteDiscountFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield getSingleDiscountFromDB(id);
    yield prisma_1.default.discount.delete({
        where: { id },
    });
});
const validateDiscountCode = (code) => __awaiter(void 0, void 0, void 0, function* () {
    const discount = yield prisma_1.default.discount.findUnique({
        where: { code },
        include: {
            products: { select: { productId: true } },
            categories: { select: { categoryId: true } },
        },
    });
    if (!discount) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Invalid discount code");
    }
    if (!discount.isActive) {
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, "Discount code is no longer active");
    }
    const now = new Date();
    if (now < discount.startDate || now > discount.endDate) {
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, "Discount code is expired or not yet active");
    }
    return discount;
});
exports.DiscountServices = {
    createDiscountIntoDB,
    getDiscountsFromDB,
    getSingleDiscountFromDB,
    updateDiscountIntoDB,
    deleteDiscountFromDB,
    validateDiscountCode,
};
