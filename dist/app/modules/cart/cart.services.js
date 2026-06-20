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
exports.CartServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const getCart = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user) {
        throw new Error("User not found");
    }
    let cart = yield prisma_1.default.cart.findUnique({
        where: { userId: user.id },
        include: {
            items: {
                include: {
                    product: {
                        include: {
                            variants: {
                                take: 1,
                                include: { variantImages: { take: 1 } },
                            },
                        },
                    },
                    variant: {
                        include: {
                            variantImages: true,
                        }
                    },
                },
            },
        },
    });
    if (!cart) {
        cart = yield prisma_1.default.cart.create({
            data: { userId: user.id },
            include: {
                items: {
                    include: {
                        product: {
                            include: {
                                variants: {
                                    take: 1,
                                    include: { variantImages: { take: 1 } },
                                },
                            },
                        },
                        variant: {
                            include: {
                                variantImages: true,
                            },
                        },
                    },
                },
            },
        });
    }
    return cart;
});
const addToCart = (email, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user) {
        throw new Error("User not found");
    }
    let cart = yield prisma_1.default.cart.findUnique({ where: { userId: user.id } });
    if (!cart) {
        cart = yield prisma_1.default.cart.create({ data: { userId: user.id } });
    }
    const existingItem = yield prisma_1.default.cartItem.findFirst({
        where: {
            cartId: cart.id,
            productId: payload.productId,
            variantId: payload.variantId || null,
        },
    });
    if (existingItem) {
        return yield prisma_1.default.cartItem.update({
            where: { id: existingItem.id },
            data: { quantity: existingItem.quantity + payload.quantity },
        });
    }
    return yield prisma_1.default.cartItem.create({
        data: {
            cartId: cart.id,
            productId: payload.productId,
            variantId: payload.variantId || null,
            quantity: payload.quantity,
            price: payload.price,
        },
    });
});
const updateCartItemQuantity = (email, cartItemId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user)
        throw new Error("User not found");
    const cartItem = yield prisma_1.default.cartItem.findUnique({ where: { id: cartItemId }, include: { cart: true } });
    if (!cartItem || cartItem.cart.userId !== user.id) {
        throw new Error("Cart item not found");
    }
    if (quantity <= 0) {
        return yield prisma_1.default.cartItem.delete({ where: { id: cartItemId } });
    }
    return yield prisma_1.default.cartItem.update({
        where: { id: cartItemId },
        data: { quantity },
    });
});
const removeCartItem = (email, cartItemId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user)
        throw new Error("User not found");
    const cartItem = yield prisma_1.default.cartItem.findUnique({ where: { id: cartItemId }, include: { cart: true } });
    if (!cartItem || cartItem.cart.userId !== user.id) {
        throw new Error("Cart item not found");
    }
    return yield prisma_1.default.cartItem.delete({
        where: { id: cartItemId },
    });
});
const clearCart = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user)
        throw new Error("User not found");
    const cart = yield prisma_1.default.cart.findUnique({ where: { userId: user.id } });
    if (!cart)
        return { message: "Cart empty" };
    return yield prisma_1.default.cartItem.deleteMany({
        where: { cartId: cart.id },
    });
});
exports.CartServices = {
    getCart,
    addToCart,
    updateCartItemQuantity,
    removeCartItem,
    clearCart,
};
