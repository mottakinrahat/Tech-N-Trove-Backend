import { PaymentStatusEnum } from '../../../../prisma/generated/prisma';
import prisma from '../../../shared/prisma';
import { initiatePayment, verifyPayment } from './payment.utils';

const initPayment = async (orderId: string) => {
    const orderData = await prisma.order.findUnique({
        where: {
            id: orderId
        },
        include: {
            user: {
                include: {
                    userInfo: true
                }
            },
            shippingAddress: true,
        }
    });

    if (!orderData) {
        throw new Error("Order not found");
    }

    const userInfo = orderData.user.userInfo;
    const transactionId = "txn-" + Date.now();
    const paymentData = {
        // ── Mandatory fields ──────────────────────────────────────────────
        total_amount: orderData.totalAmount,
        currency: 'BDT',
        tran_id: transactionId,
        success_url: (process.env.BACKEND_URL || 'http://localhost:3000') + '/api/v1/payment/confirmation?transactionId=' + transactionId + '&status=success',
        fail_url: (process.env.BACKEND_URL || 'http://localhost:3000') + '/api/v1/payment/confirmation?transactionId=' + transactionId + '&status=fail',
        cancel_url: (process.env.BACKEND_URL || 'http://localhost:3000') + '/api/v1/payment/confirmation?transactionId=' + transactionId + '&status=cancel',
        cus_name: orderData.user.name || 'Customer',
        cus_email: orderData.user.email,
        cus_phone: orderData.shippingAddress?.phoneNumber || orderData.user.contactNumber || '01711111111',
        cus_add1: [orderData.shippingAddress?.houseStreet, orderData.shippingAddress?.village].filter(Boolean).join(', ') || userInfo?.line1 || 'N/A',
        cus_city: orderData.shippingAddress?.district || userInfo?.city || 'Dhaka',
        cus_country: orderData.shippingAddress?.country || userInfo?.country || 'Bangladesh',
        product_name: 'TechNTrove Product',
        product_category: 'Electronic',
        product_profile: 'general',
        shipping_method: 'NO',
    };

    const initialPaymentResponse = await initiatePayment(paymentData);
    return initialPaymentResponse;
};

const validatePayment = async (payload: any) => {
    const response = await verifyPayment(payload);

    if (!response || response.status !== 'VALID') {
        return {
            message: "Payment Failed!"
        };
    }

    await prisma.$transaction(async (tx) => {
        const updatedPaymentData = await tx.payment.update({
            where: {
                transactionId: response.tran_id
            },
            data: {
                paymentStatus: PaymentStatusEnum.PAID,
                paymentGatewayData: response
            }
        });

        await tx.order.update({
            where: {
                id: updatedPaymentData.orderId
            },
            data: {
                paymentStatus: PaymentStatusEnum.PAID
            }
        });
    });

    return {
        message: "Payment Successful!"
    };
};

const confirmationService = async (transactionId: string, paymentStatus: string, val_id?: string) => {
    let message = "Payment Failed!";
    if (paymentStatus === 'success' && val_id) {
        const verifyRes = await validatePayment({ val_id });
        message = verifyRes.message;
    }
    return `<h1>${message}</h1><p>Transaction ID: ${transactionId}</p>`;
};

export const paymentServices = {
    initPayment,
    validatePayment,
    confirmationService
};

export const PaymentServices = paymentServices;