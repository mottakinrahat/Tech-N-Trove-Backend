"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../errors/apiError"));
const config_1 = __importDefault(require("../../config"));
const globalErrorHandler = (err, req, res, next) => {
    var _a;
    let statusCode = http_status_1.default.INTERNAL_SERVER_ERROR;
    let message = (err === null || err === void 0 ? void 0 : err.message) || "Something went wrong";
    let error = err;
    if (err instanceof apiError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "PrismaClientKnownRequestError") {
        if (err.code === "P2025") {
            statusCode = http_status_1.default.NOT_FOUND;
            message = "Record not found";
        }
        else if (err.code === "P2002") {
            statusCode = http_status_1.default.CONFLICT;
            const target = (_a = err.meta) === null || _a === void 0 ? void 0 : _a.target;
            if (target === null || target === void 0 ? void 0 : target.includes("email")) {
                message = "This email already exists. Please login.";
            }
            else {
                message = "Duplicate value violates unique constraint";
            }
        }
    }
    res.status(statusCode).json({
        success: false,
        message,
        error: config_1.default.env === "development" ? error : {},
        stack: config_1.default.env === "development" ? err === null || err === void 0 ? void 0 : err.stack : undefined,
    });
};
exports.globalErrorHandler = globalErrorHandler;
