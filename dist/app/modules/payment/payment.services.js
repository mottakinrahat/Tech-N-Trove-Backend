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
exports.PaymentServices = void 0;
const prisma_1 = require("../../../../prisma/generated/prisma");
const prisma_2 = __importDefault(require("../../../shared/prisma"));
const payment_utils_1 = require("./payment.utils");
const initPayment = (orderId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const orderData = yield prisma_2.default.order.findUnique({
        where: {
            id: orderId
        },
        include: {
            user: {
                include: {
                    buyer: true,
                }
            },
            shippingAddress: true,
        }
    });
    const address = yield prisma_2.default.address.findFirst({
        where: {
            buyerId: (_b = (_a = orderData === null || orderData === void 0 ? void 0 : orderData.user) === null || _a === void 0 ? void 0 : _a.buyer) === null || _b === void 0 ? void 0 : _b.id,
            isDefault: true,
        }
    });
    if (!orderData) {
        throw new Error("Order not found");
    }
    const transactionId = `txn-${Date.now()}`;
    const paymentData = {
        // ── Mandatory fields ──────────────────────────────────────────────
        total_amount: orderData.totalAmount,
        currency: 'BDT',
        tran_id: transactionId,
        success_url: `${process.env.BACKEND_URL || 'http://localhost:3000'}/api/v1/payment/confirmation?transactionId=${transactionId}&status=success`,
        fail_url: `${process.env.BACKEND_URL || 'http://localhost:3000'}/api/v1/payment/confirmation?transactionId=${transactionId}&status=fail`,
        cancel_url: `${process.env.BACKEND_URL || 'http://localhost:3000'}/api/v1/payment/confirmation?transactionId=${transactionId}&status=cancel`,
        cus_name: ((_c = orderData.user.buyer) === null || _c === void 0 ? void 0 : _c.name) || 'Customer',
        cus_email: orderData.user.email,
        cus_phone: ((_d = orderData.shippingAddress) === null || _d === void 0 ? void 0 : _d.phoneNumber) || '01711111111',
        cus_add1: [(_e = orderData.shippingAddress) === null || _e === void 0 ? void 0 : _e.houseStreet, (_f = orderData.shippingAddress) === null || _f === void 0 ? void 0 : _f.village].filter(Boolean).join(', ') || 'N/A',
        cus_city: ((_g = orderData.shippingAddress) === null || _g === void 0 ? void 0 : _g.district) || 'Dhaka',
        cus_country: ((_h = orderData.shippingAddress) === null || _h === void 0 ? void 0 : _h.country) || 'Bangladesh',
        product_name: 'TechNTrove Product',
        product_category: 'Electronic',
        product_profile: 'general',
        shipping_method: 'NO', // mandatory — 'NO' means no shipment address required
        // ── Optional fields ───────────────────────────────────────────────
        // ship_name: orderData.user.buyer?.name || orderData.user.email?.split('@')[0],  // optional
        // ship_add1: address?.line1,
        // ship_add2: address?.line2,
        // ship_city: address?.city,
        // ship_state: address?.state,
        // ship_postcode: address?.postalCode,
        // ship_country: address?.country,
        // ship_phone: address?.recipientPhone,
        // shipping_method: 'Courier',
        // ipn_url: `http://localhost:3000/api/v1/payment/ipn`,
    };
    const sslResponse = yield (0, payment_utils_1.initiatePayment)(paymentData);
    if (sslResponse === null || sslResponse === void 0 ? void 0 : sslResponse.GatewayPageURL) {
        yield prisma_2.default.payment.create({
            data: {
                orderId: orderData.id,
                amount: orderData.totalAmount,
                transactionId: transactionId,
                paymentStatus: prisma_1.PaymentStatusEnum.PENDING,
            }
        });
    }
    return sslResponse;
});
const confirmationService = (transactionId, status, val_id) => __awaiter(void 0, void 0, void 0, function* () {
    let message = "";
    if (status === 'success') {
        // 🔐 Verify the payment with SSLCommerz before trusting the redirect
        const verifyResult = yield (0, payment_utils_1.verifyPayment)(val_id);
        if ((verifyResult === null || verifyResult === void 0 ? void 0 : verifyResult.status) !== 'VALID' && (verifyResult === null || verifyResult === void 0 ? void 0 : verifyResult.status) !== 'VALIDATED') {
            message = "Payment verification failed!";
        }
        else {
            // ✅ Payment verified — mark as PAID and CONFIRM the order atomically
            yield prisma_2.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
                const updatedPayment = yield tx.payment.update({
                    where: { transactionId },
                    data: { paymentStatus: prisma_1.PaymentStatusEnum.PAID },
                });
                yield tx.order.update({
                    where: { id: updatedPayment.orderId },
                    data: {
                        paymentStatus: prisma_1.PaymentStatusEnum.PAID,
                        status: 'CONFIRMED', // ✅ confirm order on successful payment
                    },
                });
            }));
            message = "Successfully Paid!";
        }
    }
    else if (status === 'fail') {
        // ❌ Payment failed — mark as UNPAID, order stays PENDING
        yield prisma_2.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            const updatedPayment = yield tx.payment.update({
                where: { transactionId },
                data: { paymentStatus: prisma_1.PaymentStatusEnum.UNPAID },
            });
            yield tx.order.update({
                where: { id: updatedPayment.orderId },
                data: { paymentStatus: prisma_1.PaymentStatusEnum.UNPAID },
                // status stays PENDING — admin can review or user can retry
            });
        }));
        message = "Payment Failed!";
    }
    else {
        // 🚫 Cancelled — no DB changes, order stays PENDING
        message = "Payment Cancelled!";
    }
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3001';
    return `
        <html>
            <head>
                <style>
                    body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                    .card { padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; }
                    .success { color: #2ecc71; }
                    .error { color: #e74c3c; }
                </style>
                <meta http-equiv="refresh" content="0;url=${status === 'success'
        ? `${frontendUrl}/payment/success`
        : `${frontendUrl}/payment/failed`}" />
            </head>
            <body>
                <div class="card">
                    <h1 class="${status === 'success' ? 'success' : 'error'}">${message}</h1>
                    <p>Redirecting...</p>
                </div>
            </body>
        </html>
    `;
});
exports.PaymentServices = {
    initPayment,
    confirmationService
};
