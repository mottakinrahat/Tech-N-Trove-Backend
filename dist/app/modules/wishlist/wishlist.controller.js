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
exports.WishlistController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = require("../../../helpers/sendResponse");
const trycatch_1 = require("../../../helpers/trycatch");
const wishlist_services_1 = require("./wishlist.services");
const addToWishlist = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishlist_services_1.WishlistServices.addToWishlist(req.user.email, req.body.productId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Product added to wishlist",
        data: result,
    });
}));
const removeFromWishlist = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishlist_services_1.WishlistServices.removeFromWishlist(req.user.email, req.params.productId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product removed from wishlist",
        data: result,
    });
}));
const getMyWishlist = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishlist_services_1.WishlistServices.getMyWishlist(req.user.email);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Wishlist fetched successfully",
        data: result,
    });
}));
const toggleWishlist = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishlist_services_1.WishlistServices.toggleWishlist(req.user.email, req.params.productId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: result.wishlisted
            ? "Product added to wishlist"
            : "Product removed from wishlist",
        data: result,
    });
}));
exports.WishlistController = {
    addToWishlist,
    removeFromWishlist,
    getMyWishlist,
    toggleWishlist,
};
