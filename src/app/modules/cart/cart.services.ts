import prisma from "../../../shared/prisma";

const getCart = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("User not found");
  }

  let cart = await prisma.cart.findUnique({
    where: { userId: user.id },
    include: {
      items: {
        include: {
          product: {
            include: {
              productImages: true,
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
    cart = await prisma.cart.create({
      data: { userId: user.id },
      include: {
        items: {
          include: {
            product: {
              include: {
                productImages: true,
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
};

const addToCart = async (email: string, payload: { productId: string; variantId?: string; quantity: number; price: number }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("User not found");
  }

  let cart = await prisma.cart.findUnique({ where: { userId: user.id } });
  if (!cart) {
    cart = await prisma.cart.create({ data: { userId: user.id } });
  }

  const existingItem = await prisma.cartItem.findFirst({
    where: {
      cartId: cart.id,
      productId: payload.productId,
      variantId: payload.variantId || null,
    },
  });

  if (existingItem) {
    return await prisma.cartItem.update({
      where: { id: existingItem.id },
      data: { quantity: existingItem.quantity + payload.quantity },
    });
  }

  return await prisma.cartItem.create({
    data: {
      cartId: cart.id,
      productId: payload.productId,
      variantId: payload.variantId || null,
      quantity: payload.quantity,
      price: payload.price,
    },
  });
};

const updateCartItemQuantity = async (email: string, cartItemId: string, quantity: number) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("User not found");

    const cartItem = await prisma.cartItem.findUnique({ where: { id: cartItemId }, include: { cart: true } });
    if (!cartItem || cartItem.cart.userId !== user.id) {
        throw new Error("Cart item not found");
    }

    if (quantity <= 0) {
        return await prisma.cartItem.delete({ where: { id: cartItemId } });
    }

    return await prisma.cartItem.update({
        where: { id: cartItemId },
        data: { quantity },
    });
};

const removeCartItem = async (email: string, cartItemId: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");

  const cartItem = await prisma.cartItem.findUnique({ where: { id: cartItemId }, include: { cart: true } });
  if (!cartItem || cartItem.cart.userId !== user.id) {
    throw new Error("Cart item not found");
  }

  return await prisma.cartItem.delete({
    where: { id: cartItemId },
  });
};

const clearCart = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");

  const cart = await prisma.cart.findUnique({ where: { userId: user.id } });
  if (!cart) return { message: "Cart empty" };

  return await prisma.cartItem.deleteMany({
    where: { cartId: cart.id },
  });
};

export const CartServices = {
  getCart,
  addToCart,
  updateCartItemQuantity,
  removeCartItem,
  clearCart,
};
