"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, jsonData) => {
    var _a;
    res.status(jsonData === null || jsonData === void 0 ? void 0 : jsonData.statusCode).json({
        success: jsonData.success,
        message: jsonData.message,
        data: (_a = jsonData === null || jsonData === void 0 ? void 0 : jsonData.data) !== null && _a !== void 0 ? _a : undefined,
        meta: jsonData === null || jsonData === void 0 ? void 0 : jsonData.meta,
    });
};
exports.sendResponse = sendResponse;
