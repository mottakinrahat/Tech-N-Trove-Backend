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
  items.forEach((item) => {
    subtotal += item.price * item.quantity;
  });

  const discountAmount = payload.discountAmount || 0;
  const totalAmount = subtotal - discountAmount;

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
console.log(newOrder);
    const orderItemsData = items.map((item) => ({
      orderId: newOrder.id,
      productId: item.productId,
      variantId: item.variantId,
      quantity: item.quantity,
      price: item.price,
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
