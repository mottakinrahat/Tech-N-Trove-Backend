
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
            },
            shippingAddress: true,
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
        // ── Mandatory fields ──────────────────────────────────────────────
        total_amount: orderData.totalAmount,
        currency: 'BDT',
        tran_id: transactionId,
        success_url: `${process.env.BACKEND_URL || 'http://localhost:3000'}/api/v1/payment/confirmation?transactionId=${transactionId}&status=success`,
        fail_url: `${process.env.BACKEND_URL || 'http://localhost:3000'}/api/v1/payment/confirmation?transactionId=${transactionId}&status=fail`,
        cancel_url: `${process.env.BACKEND_URL || 'http://localhost:3000'}/api/v1/payment/confirmation?transactionId=${transactionId}&status=cancel`,
        cus_name: orderData.user.buyer?.name || 'Customer',
        cus_email: orderData.user.email,
        cus_phone: orderData.shippingAddress?.phoneNumber || '01711111111',
        cus_add1: [orderData.shippingAddress?.houseStreet, orderData.shippingAddress?.village].filter(Boolean).join(', ') || 'N/A',
        cus_city: orderData.shippingAddress?.district || 'Dhaka',
        cus_country: orderData.shippingAddress?.country || 'Bangladesh',
        product_name: 'TechNTrove Product',
        product_category: 'Electronic',
        product_profile: 'general',
        shipping_method: 'NO',              // mandatory — 'NO' means no shipment address required

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
            // ✅ Payment verified — mark as PAID and CONFIRM the order atomically
            await prisma.$transaction(async (tx) => {
                const updatedPayment = await tx.payment.update({
                    where: { transactionId },
                    data: { paymentStatus: PaymentStatusEnum.PAID },
                });

                await tx.order.update({
                    where: { id: updatedPayment.orderId },
                    data: {
                        paymentStatus: PaymentStatusEnum.PAID,
                        status: 'CONFIRMED',        // ✅ confirm order on successful payment
                    },
                });
            });

            message = "Successfully Paid!";
        }
    } else if (status === 'fail') {
        // ❌ Payment failed — mark as UNPAID, order stays PENDING
        await prisma.$transaction(async (tx) => {
            const updatedPayment = await tx.payment.update({
                where: { transactionId },
                data: { paymentStatus: PaymentStatusEnum.UNPAID },
            });

            await tx.order.update({
                where: { id: updatedPayment.orderId },
                data: { paymentStatus: PaymentStatusEnum.UNPAID },
                // status stays PENDING — admin can review or user can retry
            });
        });

        message = "Payment Failed!";
    } else {
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
                <meta http-equiv="refresh" content="0;url=${
                    status === 'success'
                        ? `${frontendUrl}/payment/success`
                        : `${frontendUrl}/payment/failed`
                }" />
            </head>
            <body>
                <div class="card">
                    <h1 class="${status === 'success' ? 'success' : 'error'}">${message}</h1>
                    <p>Redirecting...</p>
                </div>
            </body>
        </html>
    `;
}

export const PaymentServices = {
    initPayment,
    confirmationService
};