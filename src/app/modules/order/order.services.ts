import { OrderStatus, PaymentStatusEnum } from "../../../../prisma/generated/prisma";
import prisma from "../../../shared/prisma";

const createOrder = async (email: string, payload: any) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("User not found");
  }
  const items = payload.items as any[];
  if (!items || items.length === 0) {
    throw new Error("Order items cannot be empty");
  }

  let subtotal = 0;

  // Collect item details for discount eligibility check
  const itemDetails: {
    productId: string;
    categoryId: string;
    price: number;
    quantity: number;
  }[] = [];

  for (const item of items) {
    // Ensure quantity is a number, not a string from JSON body
    item.quantity = Number(item.quantity);
    if (!item.quantity || item.quantity <= 0) {
      throw new Error("Item quantity must be a positive number");
    }

    const product = await prisma.product.findUnique({
      where: { id: item.productId },
      include: { variants: true },
    });

    if (!product) throw new Error(`Product not found: ${item.productId}`);

    const variant = product.variants.find((v) => v.id === item.variantId);

    if (!variant) throw new Error(`Variant not found: ${item.variantId}`);
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
    const discount = await prisma.discount.findUnique({
      where: { code: payload.discountCode },
      include: {
        products: true,
        categories: true,
      },
    });

    if (!discount) throw new Error("Invalid discount code");
    if (!discount.isActive) throw new Error("Discount code is no longer active");

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
    } else if (discount.type === "FIXED") {
      // For FIXED, apply only if something is eligible; cap at eligibleSubtotal
      discountAmount = eligibleSubtotal > 0 ? Math.min(discount.value, eligibleSubtotal) : 0;
    }
  } else {
    // Fallback: manual discountAmount from payload (e.g. admin-applied)
    discountAmount = Number(payload.discountAmount) || 0;
  }
  // ─────────────────────────────────────────────────────────────────────────

  const totalAmount = Math.max(0, subtotal - discountAmount);

  const result = await prisma.$transaction(async (tx) => {
    const newOrder = await tx.order.create({
      data: {
        userId: user?.id,
        status: OrderStatus.PENDING,
        paymentStatus: PaymentStatusEnum.PENDING,
        subtotal,
        discountAmount,
        totalAmount,
      },
    });
   
    const orderItemsData = items.map((item) => ({
      orderId: newOrder.id,
      productId: item.productId,
      variantId: item.variantId,
      quantity: Number(item.quantity),
      price: Number(item.price),
    }));

    await tx.orderItems.createMany({
      data: orderItemsData,
    });

    // Deduct stock for variants
    for (const item of items) {
      if (item.variantId) {
        await tx.productVariant.update({
          where: { id: item.variantId },
          data: { stock: { decrement: item.quantity } },
        });
      }
    }

    if (payload.clearCart) {
      const cart = await tx.cart.findUnique({ where: { userId: user.id } });
      if (cart) {
        await tx.cartItem.deleteMany({ where: { cartId: cart.id } });
      }
    }

    return newOrder;
  });

  return result;
};

const getOrdersForUser = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");

  return await prisma.order.findMany({
    where: { userId: user.id },
    include: {
      items: {
        include: { product: true, variant: true },
      },
      payment: true,
    },
    orderBy: { createdAt: "desc" },
  });
};

const getOrderById = async (orderId: string) => {
  return await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      items: { include: { product: true, variant: true } },
      payment: true,
      user: { include: { buyer: true } },
    },
  });
};

const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      items: { include: { product: true, variant: true } },
      user: { include: { buyer: true } },
    },
    orderBy: { createdAt: "desc" },
  });
};

const updateOrderStatus = async (orderId: string, status: OrderStatus) => {
  return await prisma.order.update({
    where: { id: orderId },
    data: { status },
  });
};

export const OrderServices = {
  createOrder,
  getOrdersForUser,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
};
