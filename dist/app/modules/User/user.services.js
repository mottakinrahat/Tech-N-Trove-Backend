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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const bcrypt = __importStar(require("bcrypt"));
const n8n_services_1 = require("../../middleWares/n8n.services");
const fileUploader_1 = require("../../../helpers/fileUploader");
const user_constant_1 = require("./user.constant");
const prisma_1 = require("../../../../prisma/generated/prisma");
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const apiError_1 = __importDefault(require("../../errors/apiError"));
const http_status_1 = __importDefault(require("http-status"));
const prisma = new prisma_1.PrismaClient();
const ensureEmailIsAvailable = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw new apiError_1.default(http_status_1.default.CONFLICT, "This email already exists. Please login.");
    }
});
const createAdmin = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    if (file) {
        const uploadToCloudinary = yield fileUploader_1.fileUploader.uploadToCloudinary(file === null || file === void 0 ? void 0 : file.path);
        req.body.admin.profilePhoto = uploadToCloudinary === null || uploadToCloudinary === void 0 ? void 0 : uploadToCloudinary.url;
    }
    yield ensureEmailIsAvailable(req.body.admin.email);
    const hashedPassword = yield bcrypt.hash(req.body.password, 12);
    const userData = {
        email: req.body.admin.email,
        password: hashedPassword,
        role: prisma_1.UserRole.ADMIN,
    };
    const result = yield prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        yield transactionClient.user.create({
            data: userData,
        });
        const createdAdminData = yield transactionClient.admin.create({
            data: req.body.admin,
        });
        return createdAdminData;
    }));
    return result;
});
const createManagerIntoDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    if (file) {
        const uploadToCloudinary = yield fileUploader_1.fileUploader.uploadToCloudinary(file === null || file === void 0 ? void 0 : file.path);
        req.body.manager.profilePhoto = uploadToCloudinary === null || uploadToCloudinary === void 0 ? void 0 : uploadToCloudinary.url;
    }
    yield ensureEmailIsAvailable(req.body.manager.email);
    const hashedPassword = yield bcrypt.hash(req.body.password, 12);
    const userData = {
        email: req.body.manager.email,
        password: hashedPassword,
        role: prisma_1.UserRole.MANAGER,
    };
    const result = yield prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        yield transactionClient.user.create({
            data: userData,
        });
        const createdManagerData = yield transactionClient.manager.create({
            data: req.body.manager,
        });
        return createdManagerData;
    }));
    // Trigger n8n welcome email webhook (non-blocking)
    (0, n8n_services_1.triggerN8NWebhook)("user-registered", {
        name: result.name,
        email: req.body.manager.email,
        role: "MANAGER",
    });
    return result;
});
const createBuyerIntoDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    if (file) {
        const uploadToCloudinary = yield fileUploader_1.fileUploader.uploadToCloudinary(file === null || file === void 0 ? void 0 : file.path);
        req.body.buyer.profilePhoto = uploadToCloudinary === null || uploadToCloudinary === void 0 ? void 0 : uploadToCloudinary.url;
    }
    yield ensureEmailIsAvailable(req.body.buyer.email);
    const hashedPassword = yield bcrypt.hash(req.body.password, 12);
    const userData = {
        email: req.body.buyer.email,
        password: hashedPassword,
        role: prisma_1.UserRole.BUYER,
    };
    const result = yield prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        yield transactionClient.user.create({
            data: userData,
        });
        const createdBuyerData = yield transactionClient.buyer.create({
            data: req.body.buyer,
        });
        return createdBuyerData;
    }));
    // Trigger n8n welcome email webhook (non-blocking)
    (0, n8n_services_1.triggerN8NWebhook)("user-registered", {
        name: result.name,
        email: req.body.buyer.email,
        role: "BUYER",
    });
    return result;
});
const getAllUserFromDB = (params, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, sortBy, sortOrder, skip } = paginationHelpers_1.paginationHelpers.calculatePagination(options);
    const { searchTerm } = params, filterData = __rest(params, ["searchTerm"]);
    const andConditions = [];
    if (params === null || params === void 0 ? void 0 : params.searchTerm) {
        andConditions.push({
            OR: user_constant_1.userSearchableFields.map((field) => ({
                [field]: {
                    contains: params.searchTerm,
                    mode: "insensitive", // for case-insensitive search
                },
            })),
        });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map((key) => ({
                [key]: {
                    equals: filterData[key],
                },
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = yield prisma.user.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: sortBy && sortOrder ? [{ [sortBy]: sortOrder }] : [{ createdAt: "asc" }],
        select: {
            id: true,
            email: true,
            role: true,
            needPasswordChange: true,
            status: true,
            createdAt: true,
            updatedAt: true,
            admin: true,
            manager: true,
            buyer: true,
        },
    });
    const total = yield prisma.user.count({ where: whereConditions });
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const changeProfileStatus = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.user.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const updateUserData = yield prisma.user.update({
        where: {
            id,
        },
        data: {
            status,
        },
    });
    return updateUserData;
});
const getMyProfile = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = yield prisma.user.findUnique({
        where: {
            email: user.email,
        },
        select: {
            email: true,
            role: true,
            id: true,
            status: true,
            createdAt: true,
            updatedAt: true,
        },
    });
    let profileInfo;
    if ((userInfo === null || userInfo === void 0 ? void 0 : userInfo.role) === prisma_1.UserRole.ADMIN) {
        profileInfo = yield prisma.admin.findUnique({
            where: {
                email: userInfo.email,
            },
        });
    }
    else if ((userInfo === null || userInfo === void 0 ? void 0 : userInfo.role) === prisma_1.UserRole.MANAGER) {
        profileInfo = yield prisma.manager.findUnique({
            where: {
                email: userInfo.email,
            },
        });
    }
    else if ((userInfo === null || userInfo === void 0 ? void 0 : userInfo.role) === prisma_1.UserRole.BUYER) {
        profileInfo = yield prisma.buyer.findUnique({
            where: {
                email: userInfo.email,
            },
        });
    }
    return Object.assign(Object.assign({}, userInfo), profileInfo);
});
const updateMyProfile = (user, req) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = yield prisma.user.findUnique({
        where: {
            email: user === null || user === void 0 ? void 0 : user.email,
            status: prisma_1.UserStatus.ACTIVE,
        },
    });
    const file = req.file;
    if (file) {
        const uploadToCloudinary = yield fileUploader_1.fileUploader.uploadToCloudinary(file === null || file === void 0 ? void 0 : file.path);
        req.body.profilePhoto = uploadToCloudinary === null || uploadToCloudinary === void 0 ? void 0 : uploadToCloudinary.url;
    }
    let profileInfo;
    if ((userInfo === null || userInfo === void 0 ? void 0 : userInfo.role) === prisma_1.UserRole.ADMIN) {
        profileInfo = yield prisma.admin.update({
            where: {
                email: userInfo.email,
            },
            data: req.body,
        });
    }
    else if ((userInfo === null || userInfo === void 0 ? void 0 : userInfo.role) === prisma_1.UserRole.MANAGER) {
        profileInfo = yield prisma.manager.update({
            where: {
                email: userInfo.email,
            },
            data: req.body,
        });
    }
    else if ((userInfo === null || userInfo === void 0 ? void 0 : userInfo.role) === prisma_1.UserRole.BUYER) {
        profileInfo = yield prisma.buyer.update({
            where: {
                email: userInfo.email,
            },
            data: req.body,
        });
    }
    return Object.assign(Object.assign({}, userInfo), profileInfo);
});
exports.UserServices = {
    createAdmin,
    createManagerIntoDB,
    createBuyerIntoDB,
    getAllUserFromDB,
    changeProfileStatus,
    getMyProfile,
    updateMyProfile,
};
