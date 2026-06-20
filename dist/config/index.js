"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
exports.default = {
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
