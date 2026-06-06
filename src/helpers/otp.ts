/**
 * OTP Helper
 *
 * generateOtp()  – creates a 6-digit numeric OTP string
 * sendOtp()      – mock sender that logs to console.
 *                  Replace the body with a real SMS provider (Twilio, MSG91, etc.)
 *                  when ready.
 */

export const generateOtp = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

/**
 * Send OTP via SMS.
 * Currently a mock – logs the OTP to the console.
 *
 * To integrate a real provider, replace this function body with the
 * provider SDK call and add the required credentials to .env
 * (e.g. TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER).
 */
export const sendOtp = async (phone: string, otp: string): Promise<void> => {
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
};
