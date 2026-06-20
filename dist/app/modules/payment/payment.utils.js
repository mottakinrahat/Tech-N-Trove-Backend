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
exports.verifyPayment = exports.initiatePayment = void 0;
const config_1 = __importDefault(require("../../../config"));
// No axios import needed
const SSLCommerzPayment = require('sslcommerz-lts');
const initiatePayment = (paymentData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const store_id = config_1.default.ssl.store_id;
        const store_passwd = config_1.default.ssl.store_passwd;
        const is_live = config_1.default.ssl.is_live === 'true'; //true for live, false for sandbox
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
        const response = yield sslcz.init(paymentData);
        return response;
    }
    catch (error) {
        throw error;
    }
});
exports.initiatePayment = initiatePayment;
const verifyPayment = (val_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${config_1.default.ssl.validation_url}?val_id=${val_id}&store_id=${config_1.default.ssl.store_id}&store_passwd=${config_1.default.ssl.store_passwd}&format=json`);
        return yield response.json();
    }
    catch (error) {
        throw error;
    }
});
exports.verifyPayment = verifyPayment;
