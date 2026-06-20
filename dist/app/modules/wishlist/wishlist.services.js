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
exports.WishlistServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const addToWishlist = (email, productId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user)
        throw new Error("User not found");
    const product = yield prisma_1.default.product.findUnique({ where: { id: productId } });
    if (!product)
        throw new Error("Product not found");
    // Idempotent – return existing if already in wishlist
    const existing = yield prisma_1.default.wishlist.findUnique({
        where: { userId_productId: { userId: user.id, productId } },
    });
    if (existing)
        throw new Error("Product is already in your wishlist");
    return prisma_1.default.wishlist.create({
        data: { userId: user.id, productId },
        include: {
            product: {
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    variants: {
                        where: { isActive: true },
                        take: 1,
                        select: {
                            id: true,
                            variantImages: { take: 1, select: { url: true } }
                        }
                    },
                },
            },
        },
    });
});
const removeFromWishlist = (email, productId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user)
        throw new Error("User not found");
    const item = yield prisma_1.default.wishlist.findUnique({
        where: { userId_productId: { userId: user.id, productId } },
    });
    if (!item)
        throw new Error("Product is not in your wishlist");
    return prisma_1.default.wishlist.delete({
        where: { userId_productId: { userId: user.id, productId } },
    });
});
const getMyWishlist = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user)
        throw new Error("User not found");
    return prisma_1.default.wishlist.findMany({
        where: { userId: user.id },
        include: {
            product: {
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    isPublished: true,
                    variants: {
                        where: { isActive: true },
                        select: {
                            id: true,
                            price: true,
                            comparePrice: true,
                            stock: true,
                            variantImages: { take: 1, select: { url: true } }
                        },
                    },
                    brand: { select: { brandName: true } },
                    category: { select: { categoryName: true } },
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });
});
const toggleWishlist = (email, productId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user)
        throw new Error("User not found");
    const existing = yield prisma_1.default.wishlist.findUnique({
        where: { userId_productId: { userId: user.id, productId } },
    });
    if (existing) {
        yield prisma_1.default.wishlist.delete({
            where: { userId_productId: { userId: user.id, productId } },
        });
        return { wishlisted: false };
    }
    yield prisma_1.default.wishlist.create({ data: { userId: user.id, productId } });
    return { wishlisted: true };
});
exports.WishlistServices = {
    addToWishlist,
    removeFromWishlist,
    getMyWishlist,
    toggleWishlist,
};
