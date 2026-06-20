import { Request, Response } from "express";
import status from "http-status";
import { sendResponse } from "../../../helpers/sendResponse";
import { catchAsync } from "../../../helpers/trycatch";
import { WishlistServices } from "./wishlist.services";

const addToWishlist = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await WishlistServices.addToWishlist(
      req.user.email,
      req.body.productId
    );
    sendResponse(res, {
      success: true,
      statusCode: status.CREATED,
      message: "Product added to wishlist",
      data: result,
    });
  }
);

const removeFromWishlist = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await WishlistServices.removeFromWishlist(
      req.user.email,
      req.params.productId as string
    );
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: "Product removed from wishlist",
      data: result,
    });
  }
);

const getMyWishlist = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await WishlistServices.getMyWishlist(req.user.email);
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: "Wishlist fetched successfully",
      data: result,
    });
  }
);

const toggleWishlist = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await WishlistServices.toggleWishlist(
      req.user.email,
      req.params.productId as string
    );
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: result.wishlisted
        ? "Product added to wishlist"
        : "Product removed from wishlist",
      data: result,
    });
  }
);

export const WishlistController = {
  addToWishlist,
  removeFromWishlist,
  getMyWishlist,
  toggleWishlist,
};
