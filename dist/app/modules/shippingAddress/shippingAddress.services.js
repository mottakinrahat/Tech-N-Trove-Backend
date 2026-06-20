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
exports.ShippingAddressServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../../errors/apiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createShippingAddressIntoDB = (email, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!email) {
        throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "User information is missing");
    }
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    const existingShippingAddress = yield prisma_1.default.shippingAddress.findFirst({
        where: {
            userId: user.id,
            postOffice: payload.postOffice,
            upazilla: payload.upazilla,
            district: payload.district,
            division: payload.division,
            country: payload.country,
            houseStreet: payload.houseStreet,
            village: payload.village,
        },
    });
    if (existingShippingAddress) {
        throw new apiError_1.default(http_status_1.default.CONFLICT, "Shipping address already exists");
    }
    return prisma_1.default.shippingAddress.create({
        data: Object.assign(Object.assign({}, payload), { userId: user.id }),
    });
});
const getMyShippingAddressesFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (!email) {
        throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "User information is missing");
    }
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    return prisma_1.default.shippingAddress.findMany({
        where: { userId: user.id },
        orderBy: [{ createdAt: "desc" }],
    });
});
const updateMyShippingAddressFromDB = (email, addressId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!email) {
        throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "User information is missing");
    }
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    const existingShippingAddress = yield prisma_1.default.shippingAddress.findUnique({
        where: { id: addressId },
    });
    if ((existingShippingAddress === null || existingShippingAddress === void 0 ? void 0 : existingShippingAddress.userId) !== user.id) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Shipping address not found");
    }
    return prisma_1.default.shippingAddress.update({
        where: { id: addressId },
        data: payload,
    });
});
const deleteMyShippingAddressFromDB = (email, addressId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!email) {
        throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "User information is missing");
    }
    const user = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!user) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    const existingShippingAddress = yield prisma_1.default.shippingAddress.findUnique({
        where: { id: addressId },
    });
    if ((existingShippingAddress === null || existingShippingAddress === void 0 ? void 0 : existingShippingAddress.userId) !== user.id) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Shipping address not found");
    }
    yield prisma_1.default.shippingAddress.delete({
        where: { id: addressId },
    });
});
exports.ShippingAddressServices = {
    createShippingAddressIntoDB,
    getMyShippingAddressesFromDB,
    updateMyShippingAddressFromDB,
    deleteMyShippingAddressFromDB,
};
