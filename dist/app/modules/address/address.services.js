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
exports.AddressServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../../../prisma/generated/prisma");
const apiError_1 = __importDefault(require("../../errors/apiError"));
const prisma_2 = __importDefault(require("../../../shared/prisma"));
const normalizeAddressPayload = (payload, isUpdate = false) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    const source = Array.isArray(payload === null || payload === void 0 ? void 0 : payload.addresses) && payload.addresses.length > 0
        ? payload.addresses[0]
        : payload;
    const normalized = {
        label: source === null || source === void 0 ? void 0 : source.label,
        addressType: source === null || source === void 0 ? void 0 : source.addressType,
        recipientName: (_a = source === null || source === void 0 ? void 0 : source.recipientName) !== null && _a !== void 0 ? _a : source === null || source === void 0 ? void 0 : source.fullName,
        recipientPhone: (_b = source === null || source === void 0 ? void 0 : source.recipientPhone) !== null && _b !== void 0 ? _b : source === null || source === void 0 ? void 0 : source.phoneNumber,
        alternatePhone: source === null || source === void 0 ? void 0 : source.alternatePhone,
        line1: (_c = source === null || source === void 0 ? void 0 : source.line1) !== null && _c !== void 0 ? _c : source === null || source === void 0 ? void 0 : source.addressLine1,
        line2: (_d = source === null || source === void 0 ? void 0 : source.line2) !== null && _d !== void 0 ? _d : source === null || source === void 0 ? void 0 : source.addressLine2,
        landmark: source === null || source === void 0 ? void 0 : source.landmark,
        city: source === null || source === void 0 ? void 0 : source.city,
        state: source === null || source === void 0 ? void 0 : source.state,
        postalCode: source === null || source === void 0 ? void 0 : source.postalCode,
        country: source === null || source === void 0 ? void 0 : source.country,
        latitude: (_f = (_e = source === null || source === void 0 ? void 0 : source.latitude) !== null && _e !== void 0 ? _e : source === null || source === void 0 ? void 0 : source.lat) !== null && _f !== void 0 ? _f : (_h = (_g = source === null || source === void 0 ? void 0 : source.location) === null || _g === void 0 ? void 0 : _g.coordinates) === null || _h === void 0 ? void 0 : _h.latitude,
        longitude: (_l = (_k = (_j = source === null || source === void 0 ? void 0 : source.longitude) !== null && _j !== void 0 ? _j : source === null || source === void 0 ? void 0 : source.lng) !== null && _k !== void 0 ? _k : source === null || source === void 0 ? void 0 : source.logn) !== null && _l !== void 0 ? _l : (_o = (_m = source === null || source === void 0 ? void 0 : source.location) === null || _m === void 0 ? void 0 : _m.coordinates) === null || _o === void 0 ? void 0 : _o.longitude,
        deliveryInstructions: source === null || source === void 0 ? void 0 : source.deliveryInstructions,
        isDefault: source === null || source === void 0 ? void 0 : source.isDefault,
    };
    if (!isUpdate &&
        (!normalized.recipientName ||
            !normalized.recipientPhone ||
            !normalized.line1 ||
            !normalized.city ||
            !normalized.state ||
            !normalized.postalCode)) {
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, "recipientName, recipientPhone, line1, city, state and postalCode are required");
    }
    const filtered = Object.fromEntries(Object.entries(normalized).filter(([, value]) => value !== undefined));
    return filtered;
};
const getProfileOwnershipFilter = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userRecord = yield prisma_2.default.user.findUnique({
        where: { email: user === null || user === void 0 ? void 0 : user.email },
        select: { email: true, role: true, status: true },
    });
    if (!userRecord) {
        throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "User not found");
    }
    if (userRecord.role === prisma_1.UserRole.ADMIN) {
        const admin = yield prisma_2.default.admin.findUnique({
            where: { email: userRecord.email },
            select: { id: true },
        });
        if (!admin)
            throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Admin profile not found");
        return { adminId: admin.id };
    }
    if (userRecord.role === prisma_1.UserRole.BUYER) {
        const buyer = yield prisma_2.default.buyer.findUnique({
            where: { email: userRecord.email },
            select: { id: true },
        });
        if (!buyer)
            throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Buyer profile not found");
        return { buyerId: buyer.id };
    }
    if (userRecord.role === prisma_1.UserRole.MANAGER) {
        const manager = yield prisma_2.default.manager.findUnique({
            where: { email: userRecord.email },
            select: { id: true },
        });
        if (!manager)
            throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Manager profile not found");
        return { managerId: manager.id };
    }
    throw new apiError_1.default(http_status_1.default.FORBIDDEN, "Role is not allowed for addresses");
});
const getOwnershipOrConditions = (profile) => {
    const OR = [];
    if (profile.adminId)
        OR.push({ adminId: profile.adminId });
    if (profile.buyerId)
        OR.push({ buyerId: profile.buyerId });
    if (profile.managerId)
        OR.push({ managerId: profile.managerId });
    return OR;
};
const createAddressIntoDB = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield getProfileOwnershipFilter(user);
    const normalizedPayload = normalizeAddressPayload(payload);
    return prisma_2.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        if (normalizedPayload === null || normalizedPayload === void 0 ? void 0 : normalizedPayload.isDefault) {
            yield tx.address.updateMany({
                where: userData,
                data: { isDefault: false },
            });
        }
        const createData = Object.assign(Object.assign({}, normalizedPayload), userData);
        return tx.address.create({
            data: createData,
        });
    }));
});
const getMyAddressesFromDB = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield getProfileOwnershipFilter(user);
    return prisma_2.default.address.findMany({
        where: profile,
        orderBy: [{ isDefault: "desc" }, { createdAt: "desc" }],
    });
});
const updateMyAddressFromDB = (user, addressId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield getProfileOwnershipFilter(user);
    const ownershipCheck = getOwnershipOrConditions(profile);
    const existingAddress = yield prisma_2.default.address.findFirst({
        where: {
            id: addressId,
            OR: ownershipCheck,
        },
    });
    if (!existingAddress) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Address not found");
    }
    const normalizedPayload = normalizeAddressPayload(payload, true);
    return prisma_2.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        if (normalizedPayload === null || normalizedPayload === void 0 ? void 0 : normalizedPayload.isDefault) {
            yield tx.address.updateMany({
                where: profile,
                data: { isDefault: false },
            });
        }
        return tx.address.update({
            where: { id: addressId },
            data: normalizedPayload,
        });
    }));
});
const deleteMyAddressFromDB = (user, addressId) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield getProfileOwnershipFilter(user);
    const ownershipCheck = getOwnershipOrConditions(profile);
    const existingAddress = yield prisma_2.default.address.findFirst({
        where: {
            id: addressId,
            OR: ownershipCheck,
        },
    });
    if (!existingAddress) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Address not found");
    }
    yield prisma_2.default.address.delete({
        where: { id: addressId },
    });
});
const setDefaultAddressIntoDB = (user, addressId) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield getProfileOwnershipFilter(user);
    const ownershipCheck = getOwnershipOrConditions(profile);
    const existingAddress = yield prisma_2.default.address.findFirst({
        where: {
            id: addressId,
            OR: ownershipCheck,
        },
    });
    if (!existingAddress) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Address not found");
    }
    return prisma_2.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        yield tx.address.updateMany({
            where: profile,
            data: { isDefault: false },
        });
        return tx.address.update({
            where: { id: addressId },
            data: { isDefault: true },
        });
    }));
});
exports.AddressServices = {
    createAddressIntoDB,
    getMyAddressesFromDB,
    updateMyAddressFromDB,
    deleteMyAddressFromDB,
    setDefaultAddressIntoDB,
};
