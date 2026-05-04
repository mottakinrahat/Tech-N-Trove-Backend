import { Request, Response } from "express";
import status from "http-status";
import { sendResponse } from "../../../helpers/sendResponse";
import { catchAsync } from "../../../helpers/trycatch";
import { CartServices } from "./cart.services";

const getCart = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const result = await CartServices.getCart(req.user.email);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Cart retrieved successfully",
    data: result,
  });
});

const addToCart = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  // Support both flat body { productId, variantId, quantity, price }
  // and wrapped body { items: [{ productId, variantId, quantity, price }] }
  const body = req.body;
  const payload = Array.isArray(body.items) && body.items.length > 0
    ? body.items[0]
    : body;

  const result = await CartServices.addToCart(req.user.email, payload);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Item added to cart",
    data: result,
  });
});

const updateCartItemQuantity = catchAsync(async (req: Request & { user?: any }, res: Response) => {
    const { id } = req.params;
    const { quantity } = req.body;
    const result = await CartServices.updateCartItemQuantity(req.user.email, id, quantity);
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: "Cart item quantity updated",
      data: result,
    });
});

const removeCartItem = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const { id } = req.params;
  const result = await CartServices.removeCartItem(req.user.email, id);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Cart item removed",
    data: result,
  });
});

const clearCart = catchAsync(async (req: Request & { user?: any }, res: Response) => {
  const result = await CartServices.clearCart(req.user.email);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Cart cleared",
    data: result,
  });
});

export const CartController = {
  getCart,
  addToCart,
  updateCartItemQuantity,
  removeCartItem,
  clearCart,
};
