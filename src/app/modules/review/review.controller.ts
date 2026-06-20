import { Request, Response } from "express";
import status from "http-status";
import { sendResponse } from "../../../helpers/sendResponse";
import { catchAsync } from "../../../helpers/trycatch";
import { ReviewServices } from "./review.services";

const createReview = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await ReviewServices.createReview(req.user.email, req.body);
    sendResponse(res, {
      success: true,
      statusCode: status.CREATED,
      message: "Review submitted successfully",
      data: result,
    });
  }
);

const updateReview = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await ReviewServices.updateReview(
      req.user.email,
      req.params.reviewId as string,
      req.body
    );
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: "Review updated successfully",
      data: result,
    });
  }
);

const deleteReview = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await ReviewServices.deleteReview(
      req.user.email,
      req.params.reviewId as string,
      req.user.role
    );
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: "Review deleted successfully",
      data: result,
    });
  }
);

const getReviewsByProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewServices.getReviewsByProduct(
    req.params.productId as string,
    req.query
  );
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Reviews fetched successfully",
    data: result,
  });
});

const getMyReviews = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await ReviewServices.getMyReviews(req.user.email);
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: "My reviews fetched successfully",
      data: result,
    });
  }
);

const getAllReviews = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewServices.getAllReviews(req.query);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "All reviews fetched successfully",
    data: result,
  });
});

export const ReviewController = {
  createReview,
  updateReview,
  deleteReview,
  getReviewsByProduct,
  getMyReviews,
  getAllReviews,
};
