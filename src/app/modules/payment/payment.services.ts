import { response } from 'express';
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
                    buyer: true,
                }
            }

        }
    });
    const address = await prisma.address.findFirst({
        where: {
            buyerId: orderData?.user?.buyer?.id,
            isDefault: true,
        }
    })
    if (!orderData) {
        throw new Error("Order not found");
    }

    const transactionId = `txn-${Date.now()}`;
    const paymentData = {
        total_amount: orderData.totalAmount,
        currency: 'BDT',
        tran_id: transactionId,
        ship_name: address?.recipientName,
        ship_add1: address?.line1,
        ship_add2: address?.line2,
        ship_city: address?.city,
        ship_state: address?.state,
        ship_postcode: address?.postalCode,
        ship_country: address?.country,
        ship_phone: address?.recipientPhone,
        success_url: `http://localhost:3000/api/v1/payment/confirmation?transactionId=${transactionId}&status=success`,
        fail_url: `http://localhost:3000/api/v1/payment/confirmation?transactionId=${transactionId}&status=fail`,
        cancel_url: `http://localhost:3000/api/v1/payment/confirmation?transactionId=${transactionId}&status=cancel`,
        ipn_url: `http://localhost:3000/api/v1/payment/ipn`,
        shipping_method: 'Courier',
        product_name: 'TechNTrove Product',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: orderData.user.buyer?.name || 'Customer',
        cus_email: orderData.user.email,
        cus_add1: address?.line1 || 'N/A',
        cus_city: address?.city || 'Dhaka',
        cus_state: address?.state || 'Dhaka',
        cus_postcode: address?.postalCode || '1000',
        cus_country: address?.country || 'Bangladesh',
        cus_phone: orderData.user.buyer?.contactNumber || '01711111111',
    };

    const sslResponse = await initiatePayment(paymentData);

    if (sslResponse?.GatewayPageURL) {
        await prisma.payment.create({
            data: {
                orderId: orderData.id,
                amount: orderData.totalAmount,
                transactionId: transactionId,
                paymentStatus: PaymentStatusEnum.PENDING,
            }
        });
    }

    return sslResponse;
};

const confirmationService = async (transactionId: string, status: string, val_id: string) => {
    let message = "";

    if (status === 'success') {
        // 🔐 Verify the payment with SSLCommerz before trusting the redirect
        const verifyResult = await verifyPayment(val_id);

        if (verifyResult?.status !== 'VALID' && verifyResult?.status !== 'VALIDATED') {
            message = "Payment verification failed!";
        } else {
            // ✅ Use a transaction so both updates are atomic
            await prisma.$transaction(async (tx) => {
                const updatedPayment = await tx.payment.update({
                    where: { transactionId },
                    data: { paymentStatus: PaymentStatusEnum.PAID },
                });

                await tx.order.update({
                    where: { id: updatedPayment.orderId },
                    data: { paymentStatus: PaymentStatusEnum.PAID },
                });
            });

            message = "Successfully Paid!";
        }
    } else if (status === 'fail') {
        await prisma.$transaction(async (tx) => {
            const updatedPayment = await tx.payment.update({
                where: { transactionId },
                data: { paymentStatus: PaymentStatusEnum.UNPAID },
            });

            await tx.order.update({
                where: { id: updatedPayment.orderId },
                data: { paymentStatus: PaymentStatusEnum.UNPAID },
            });
        });

        message = "Payment Failed!";
    } else {
        // cancel
        message = "Payment Cancelled!";
    }

    return `
        <html>
            <head>
                <style>
                    body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                    .card { padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; }
                    .success { color: #2ecc71; }
                    .error { color: #e74c3c; }
                    button { margin-top: 1rem; padding: 0.5rem 1rem; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; }
                </style>
            </head>
            <body>
                <div class="card">
                    <h1 class="${status === 'success' ? 'success' : 'error'}">${message}</h1>
                    <button onclick="window.location.href='http://localhost:3001'">Go to Dashboard</button>
                </div>
            </body>
        </html>
    `;
}

export const PaymentServices = {
    initPayment,
    confirmationService
};