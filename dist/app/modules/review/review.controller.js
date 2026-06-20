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
exports.ReviewController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = require("../../../helpers/sendResponse");
const trycatch_1 = require("../../../helpers/trycatch");
const review_services_1 = require("./review.services");
const createReview = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_services_1.ReviewServices.createReview(req.user.email, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Review submitted successfully",
        data: result,
    });
}));
const updateReview = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_services_1.ReviewServices.updateReview(req.user.email, req.params.reviewId, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Review updated successfully",
        data: result,
    });
}));
const deleteReview = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_services_1.ReviewServices.deleteReview(req.user.email, req.params.reviewId, req.user.role);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Review deleted successfully",
        data: result,
    });
}));
const getReviewsByProduct = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_services_1.ReviewServices.getReviewsByProduct(req.params.productId, req.query);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Reviews fetched successfully",
        data: result,
    });
}));
const getMyReviews = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_services_1.ReviewServices.getMyReviews(req.user.email);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "My reviews fetched successfully",
        data: result,
    });
}));
const getAllReviews = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_services_1.ReviewServices.getAllReviews(req.query);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "All reviews fetched successfully",
        data: result,
    });
}));
exports.ReviewController = {
    createReview,
    updateReview,
    deleteReview,
    getReviewsByProduct,
    getMyReviews,
    getAllReviews,
};
