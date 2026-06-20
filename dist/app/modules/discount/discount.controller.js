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
exports.DiscountController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const trycatch_1 = require("../../../helpers/trycatch");
const sendResponse_1 = require("../../../helpers/sendResponse");
const discount_services_1 = require("./discount.services");
const createDiscount = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield discount_services_1.DiscountServices.createDiscountIntoDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Discount created successfully",
        data: result,
    });
}));
const getAllDiscounts = (0, trycatch_1.catchAsync)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield discount_services_1.DiscountServices.getDiscountsFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Discounts retrieved successfully",
        data: result,
    });
}));
const getSingleDiscount = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { discountId } = req.params;
    const result = yield discount_services_1.DiscountServices.getSingleDiscountFromDB(discountId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Discount retrieved successfully",
        data: result,
    });
}));
const updateDiscount = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { discountId } = req.params;
    const result = yield discount_services_1.DiscountServices.updateDiscountIntoDB(discountId, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Discount updated successfully",
        data: result,
    });
}));
const deleteDiscount = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { discountId } = req.params;
    yield discount_services_1.DiscountServices.deleteDiscountFromDB(discountId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Discount deleted successfully",
        data: null,
    });
}));
const validateDiscount = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.body;
    const result = yield discount_services_1.DiscountServices.validateDiscountCode(code);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Discount code is valid",
        data: result,
    });
}));
exports.DiscountController = {
    createDiscount,
    getAllDiscounts,
    getSingleDiscount,
    updateDiscount,
    deleteDiscount,
    validateDiscount,
};
