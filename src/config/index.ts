import dotenv from "dotenv";
import path from "path";
const result = dotenv.config({ path: path.join(process.cwd(), ".env") });
if (result.parsed) {
  Object.entries(result.parsed).forEach(([key, value]) => {
    if (!process.env[key]) {
      process.env[key] = value;
    }
  });
}
export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwt: {
    jwt_secret: process.env.JWT_SECRET,
    expires_in: process.env.EXPIRES_IN,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN,
  },
  ssl: {
    store_id: process.env.STORE_ID,
    store_passwd: process.env.STORE_PASS,
    is_live: process.env.IS_LIVE,
    success_url: process.env.SUCCESS_URL,
    fail_url: process.env.FAIL_URL,
    cancel_url: process.env.CANCEL_URL,
    validation_url: process.env.VALIDATION_URL,
  }
};
