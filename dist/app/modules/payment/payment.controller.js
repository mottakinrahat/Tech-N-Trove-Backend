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
exports.paymentController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = require("../../../helpers/sendResponse");
const trycatch_1 = require("../../../helpers/trycatch");
const payment_services_1 = require("./payment.services");
const initPayment = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderId } = req.body;
    const result = yield payment_services_1.PaymentServices.initPayment(orderId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Payment initialized successfully",
        data: result
    });
}));
const confirmation = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { transactionId, status: paymentStatus } = req.query;
    const { val_id } = req.body; // SSLCommerz POSTs val_id in body on success
    const result = yield payment_services_1.PaymentServices.confirmationService(transactionId, paymentStatus, val_id);
    res.send(result);
}));
exports.paymentController = {
    initPayment,
    confirmation
};
