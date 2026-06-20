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
exports.OrderServices = void 0;
const prisma_1 = require("../../../../prisma/generated/prisma");
const prisma_2 = __importDefault(require("../../../shared/prisma"));
const createOrder = (email, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_2.default.user.findUnique({ where: { email } });
    if (!user) {
        throw new Error("User not found");
    }
    const items = payload.items;
    if (!items || items.length === 0) {
        throw new Error("Order items cannot be empty");
    }
    let subtotal = 0;
    // Collect item details for discount eligibility check
    const itemDetails = [];
    for (const item of items) {
        // Ensure quantity is a number, not a string from JSON body
        item.quantity = Number(item.quantity);
        if (!item.quantity || item.quantity <= 0) {
            throw new Error("Item quantity must be a positive number");
        }
        const product = yield prisma_2.default.product.findUnique({
            where: { id: item.productId },
            include: { variants: true },
        });
        if (!product)
            throw new Error(`Product not found: ${item.productId}`);
        const variant = product.variants.find((v) => v.id === item.variantId);
        if (!variant)
            throw new Error(`Variant not found: ${item.variantId}`);
        if (variant.stock < item.quantity) {
            throw new Error(`Insufficient stock for variant: ${variant.sku}`);
        }
        subtotal += variant.price * item.quantity;
        item.price = variant.price; // attach for later use
        // Push item detail for discount eligibility check
        itemDetails.push({
            productId: product.id,
            categoryId: product.categoryId,
            price: variant.price,
            quantity: item.quantity,
        });
    }
    // ─── Discount calculation ─────────────────────────────────────────────────
    let discountAmount = 0;
    if (payload.discountCode) {
        const discount = yield prisma_2.default.discount.findUnique({
            where: { code: payload.discountCode },
            include: {
                products: true,
                categories: true,
            },
        });
        if (!discount)
            throw new Error("Invalid discount code");
        if (!discount.isActive)
            throw new Error("Discount code is no longer active");
        const now = new Date();
        if (now < discount.startDate || now > discount.endDate) {
            throw new Error("Discount code is expired or not yet active");
        }
        const eligibleProductIds = new Set(discount.products.map((p) => p.productId));
        const eligibleCategoryIds = new Set(discount.categories.map((c) => c.categoryId));
        // Determine eligible subtotal based on discount scope:
        // Type 1: isGlobal = true  → applies to ALL cart items
        // Type 2: products[]       → applies only to specific products
        // Type 3: categories[]     → applies only to products in specific categories
        let eligibleSubtotal = 0;
        for (const detail of itemDetails) {
            const isGlobal = discount.isGlobal;
            const isSpecificProduct = eligibleProductIds.size > 0 && eligibleProductIds.has(detail.productId);
            const isSpecificCategory = eligibleCategoryIds.size > 0 && eligibleCategoryIds.has(detail.categoryId);
            if (isGlobal || isSpecificProduct || isSpecificCategory) {
                eligibleSubtotal += detail.price * detail.quantity;
            }
        }
        if (discount.type === "PERCENTAGE") {
            discountAmount = (eligibleSubtotal * discount.value) / 100;
        }
        else if (discount.type === "FIXED") {
            // For FIXED, apply only if something is eligible; cap at eligibleSubtotal
            discountAmount = eligibleSubtotal > 0 ? Math.min(discount.value, eligibleSubtotal) : 0;
        }
    }
    else {
        // Fallback: manual discountAmount from payload (e.g. admin-applied)
        discountAmount = Number(payload.discountAmount) || 0;
    }
    // ─────────────────────────────────────────────────────────────────────────
    const totalAmount = Math.max(0, subtotal - discountAmount);
    const result = yield prisma_2.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        // determine payment method and initial payment status
        const pmRaw = (payload.paymentMethod || "").toString().toUpperCase();
        const paymentMethodValue = pmRaw === "ONLINE" ? prisma_1.PaymentMethod.ONLINE : prisma_1.PaymentMethod.COD;
        // ONLINE → paymentStatus starts as PENDING (confirmed after gateway callback)
        // COD    → paymentStatus starts as UNPAID (confirmed when cash is collected)
        const paymentStatus = paymentMethodValue === prisma_1.PaymentMethod.COD ? prisma_1.PaymentStatusEnum.UNPAID : prisma_1.PaymentStatusEnum.PENDING;
        let shippingAddressId;
        if (payload.shippingAddress) {
            const shippingAddress = yield tx.shippingAddress.create({
                data: {
                    userId: user.id,
                    houseStreet: payload.shippingAddress.houseStreet,
                    village: payload.shippingAddress.village,
                    postOffice: payload.shippingAddress.postOffice,
                    upazilla: payload.shippingAddress.upazilla,
                    district: payload.shippingAddress.district,
                    division: payload.shippingAddress.division,
                    country: payload.shippingAddress.country || "Bangladesh",
                    phoneNumber: payload.shippingAddress.phoneNumber,
                    altPhoneNumber: payload.shippingAddress.altPhoneNumber,
                },
            });
            shippingAddressId = shippingAddress.id;
        }
        // COD → confirmed immediately (user pays on delivery)
        // ONLINE → stays PENDING until payment gateway confirms
        const orderStatus = paymentMethodValue === prisma_1.PaymentMethod.COD ? prisma_1.OrderStatus.CONFIRMED : prisma_1.OrderStatus.PENDING;
        const newOrder = yield tx.order.create({
            data: {
                userId: user === null || user === void 0 ? void 0 : user.id,
                status: orderStatus,
                paymentMethod: paymentMethodValue,
                paymentStatus,
                subtotal,
                discountAmount,
                totalAmount,
                shippingAddressId,
            },
        });
        const orderItemsData = items.map((item) => ({
            orderId: newOrder.id,
            productId: item.productId,
            variantId: item.variantId,
            quantity: Number(item.quantity),
            price: Number(item.price),
        }));
        yield tx.orderItems.createMany({
            data: orderItemsData,
        });
        // Deduct stock for variants
        for (const item of items) {
            if (item.variantId) {
                yield tx.productVariant.update({
                    where: { id: item.variantId },
                    data: { stock: { decrement: item.quantity } },
                });
            }
        }
        if (payload.clearCart) {
            const cart = yield tx.cart.findUnique({ where: { userId: user.id } });
            if (cart) {
                yield tx.cartItem.deleteMany({ where: { cartId: cart.id } });
            }
        }
        return newOrder;
    }));
    return result;
});
const getOrdersForUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_2.default.user.findUnique({ where: { email } });
    if (!user)
        throw new Error("User not found");
    return yield prisma_2.default.order.findMany({
        where: { userId: user.id },
        include: {
            items: {
                include: { product: true, variant: true },
            },
            payment: true,
            shippingAddress: true,
        },
        orderBy: { createdAt: "desc" },
    });
});
const getOrderById = (orderId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_2.default.order.findUnique({
        where: { id: orderId },
        include: {
            items: { include: { product: true, variant: true } },
            payment: true,
            user: { include: { buyer: true } },
            shippingAddress: true,
        },
    });
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_2.default.order.findMany({
        include: {
            items: { include: { product: true, variant: true } },
            user: { include: { buyer: true } },
            shippingAddress: true,
        },
        orderBy: { createdAt: "desc" },
    });
});
const updateOrderStatus = (orderId, status) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_2.default.order.update({
        where: { id: orderId },
        data: { status },
    });
});
exports.OrderServices = {
    createOrder,
    getOrdersForUser,
    getOrderById,
    getAllOrders,
    updateOrderStatus,
};
