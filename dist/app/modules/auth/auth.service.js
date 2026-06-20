"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.authServices = void 0;
const jwtHelpers_1 = __importStar(require("../../../helpers/jwtHelpers"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const emailSender_1 = __importDefault(require("./emailSender"));
const prisma_2 = require("../../../../prisma/generated/prisma");
const apiError_1 = __importDefault(require("../../errors/apiError"));
const http_status_1 = __importDefault(require("http-status"));
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    // Find the user by email
    const userData = yield prisma_1.default.user.findUnique({
        where: {
            email: email,
            status: prisma_2.UserStatus.ACTIVE,
        },
    });
    if (!userData) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User does not exist or is inactive");
    }
    // Validate password
    const isCorrectPassword = yield bcrypt_1.default.compare(password, userData.password);
    if (!isCorrectPassword) {
        throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid password");
    }
    // Create JWT token
    const accessToken = (0, jwtHelpers_1.default)({
        email: userData.email,
        role: userData.role,
    }, config_1.default.jwt.jwt_secret, config_1.default.jwt.expires_in);
    const refreshToken = (0, jwtHelpers_1.default)({
        email: userData.email,
        role: userData.role,
    }, config_1.default.jwt.refresh_token_secret, config_1.default.jwt.refresh_token_expires_in);
    // Fixed logging
    return {
        accessToken,
        refreshToken,
        needPasswordChange: userData.needPasswordChange,
    };
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let decodedData;
    try {
        decodedData = yield (0, jwtHelpers_1.verifyToken)(token, config_1.default.jwt.refresh_token_secret);
    }
    catch (error) {
        console.error("JWT verification failed:", error);
        throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized");
    }
    if (typeof decodedData !== "object" ||
        !decodedData ||
        !("email" in decodedData)) {
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, "Invalid token payload");
    }
    const userData = yield prisma_1.default.user.findUnique({
        where: {
            email: decodedData === null || decodedData === void 0 ? void 0 : decodedData.email,
            status: prisma_2.UserStatus.ACTIVE,
        },
    });
    if (!userData) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User not found or is inactive");
    }
    const accessToken = (0, jwtHelpers_1.default)({
        email: userData === null || userData === void 0 ? void 0 : userData.email,
        role: userData === null || userData === void 0 ? void 0 : userData.role,
    }, process.env.jwt_secret, process.env.expires_in);
    return {
        accessToken,
        needPasswordChange: userData === null || userData === void 0 ? void 0 : userData.needPasswordChange,
    };
});
const changePassword = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { oldPassword, newPassword } = payload;
    const userData = yield prisma_1.default.user.findFirst({
        where: {
            email: user.email,
            status: prisma_2.UserStatus.ACTIVE,
        },
    });
    if (!userData) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User not found or is inactive");
    }
    const isCorrectPassword = yield bcrypt_1.default.compare(oldPassword, userData.password);
    if (!isCorrectPassword) {
        throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid password");
    }
    yield prisma_1.default.user.update({
        where: {
            email: user.email,
        },
        data: {
            password: yield bcrypt_1.default.hash(newPassword, 12),
            needPasswordChange: false,
        },
    });
    return {
        message: "Password changed successfully",
    };
});
const forgotPassword = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = payload;
    const userData = yield prisma_1.default.user.findUnique({
        where: {
            email: email,
            status: prisma_2.UserStatus.ACTIVE,
        },
    });
    if (!userData) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User not found with this email");
    }
    const resetPassToken = (0, jwtHelpers_1.default)({ email: userData.email, role: userData.role }, process.env.reset_pass_token, process.env.expires_in);
    const resetPassLink = process.env.RESET_PASS_LINK +
        `?userId=${userData.id}&token=${resetPassToken}`;
    yield (0, emailSender_1.default)(userData === null || userData === void 0 ? void 0 : userData.email, `<div>
    <p>Click the link below to reset your password:</p><a href="${resetPassLink}">
    <button>Reset Password</button>
    </a></div>`);
    //http://localhost:3000/reset-pass?email=ancsddf@gmail.com&token=dhfsdfidshf
});
const resetPassword = (token, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isValidToken = yield (0, jwtHelpers_1.verifyToken)(token, process.env.reset_pass_token);
    if (!isValidToken) {
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, "Invalid or expired token");
    }
    const hashPassword = bcrypt_1.default.hashSync(payload.password, 12);
    const updatePassword = yield prisma_1.default.user.update({
        where: {
            email: isValidToken.email
        },
        data: {
            password: hashPassword
        }
    });
    return {
        message: "Password reset successfully"
    };
});
exports.authServices = {
    loginUser,
    refreshToken,
    changePassword,
    forgotPassword,
    resetPassword,
};
