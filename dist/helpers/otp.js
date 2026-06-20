"use strict";
/**
 * OTP Helper
 *
 * generateOtp()  – creates a 6-digit numeric OTP string
 * sendOtp()      – mock sender that logs to console.
 *                  Replace the body with a real SMS provider (Twilio, MSG91, etc.)
 *                  when ready.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendOtp = exports.generateOtp = void 0;
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};
exports.generateOtp = generateOtp;
/**
 * Send OTP via SMS.
 * Currently a mock – logs the OTP to the console.
 *
 * To integrate a real provider, replace this function body with the
 * provider SDK call and add the required credentials to .env
 * (e.g. TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER).
 */
const sendOtp = (phone, otp) => __awaiter(void 0, void 0, void 0, function* () {
    // ── MOCK IMPLEMENTATION ───────────────────────────────────────────────────
    console.log(`[OTP] Sending OTP to ${phone}: ${otp}`);
    // ─────────────────────────────────────────────────────────────────────────
    // ── REAL IMPLEMENTATION (example – Twilio) ────────────────────────────────
    // import twilio from "twilio";
    // const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    // await client.messages.create({
    //   body: `Your Tech-N-Trove order OTP is: ${otp}. It expires in 5 minutes.`,
    //   from: process.env.TWILIO_FROM_NUMBER,
    //   to: phone,
    // });
    // ─────────────────────────────────────────────────────────────────────────
});
exports.sendOtp = sendOtp;
