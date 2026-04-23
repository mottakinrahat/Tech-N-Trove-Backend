import config from "../../../config";

// No axios import needed
const SSLCommerzPayment = require('sslcommerz-lts');

export const initiatePayment = async (paymentData: any) => {
    try {
        const store_id = config.ssl.store_id;
        const store_passwd = config.ssl.store_passwd;
        const is_live = config.ssl.is_live === 'true'; //true for live, false for sandbox

        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);

        const response = await sslcz.init(paymentData);
        return response;
    } catch (error) {
        throw error;
    }
};

export const verifyPayment = async (val_id: string) => {
    try {
        const response = await fetch(
            `${config.ssl.validation_url}?val_id=${val_id}&store_id=${config.ssl.store_id}&store_passwd=${config.ssl.store_passwd}&format=json`
        );
        return await response.json();
    } catch (error) {
        throw error;
    }
}
