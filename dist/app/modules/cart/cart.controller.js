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
exports.CartController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = require("../../../helpers/sendResponse");
const trycatch_1 = require("../../../helpers/trycatch");
const cart_services_1 = require("./cart.services");
const getCart = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_services_1.CartServices.getCart(req.user.email);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Cart retrieved successfully",
        data: result,
    });
}));
const addToCart = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Support both flat body { productId, variantId, quantity, price }
    // and wrapped body { items: [{ productId, variantId, quantity, price }] }
    const body = req.body;
    const payload = Array.isArray(body.items) && body.items.length > 0
        ? body.items[0]
        : body;
    const result = yield cart_services_1.CartServices.addToCart(req.user.email, payload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Item added to cart",
        data: result,
    });
}));
const updateCartItemQuantity = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { quantity } = req.body;
    const result = yield cart_services_1.CartServices.updateCartItemQuantity(req.user.email, id, quantity);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Cart item quantity updated",
        data: result,
    });
}));
const removeCartItem = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield cart_services_1.CartServices.removeCartItem(req.user.email, id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Cart item removed",
        data: result,
    });
}));
const clearCart = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_services_1.CartServices.clearCart(req.user.email);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Cart cleared",
        data: result,
    });
}));
exports.CartController = {
    getCart,
    addToCart,
    updateCartItemQuantity,
    removeCartItem,
    clearCart,
};
