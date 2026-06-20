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
exports.AdminServices = void 0;
const prisma_1 = require("../../../../prisma/generated/prisma");
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const prisma_2 = __importDefault(require("../../../shared/prisma"));
const admin_constant_1 = require("./admin.constant");
const getAllAdmin = (params, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, sortBy, sortOrder, skip } = paginationHelpers_1.paginationHelpers.calculatePagination(options);
    const { searchTerm } = params, filterData = __rest(params, ["searchTerm"]);
    const andConditions = [];
    if (params.searchTerm) {
        andConditions.push({
            OR: admin_constant_1.adminSearchableFields.map((field) => ({
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
    andConditions.push({ isDeleted: false }); // Exclude soft-deleted records
    // Apply the filter with the search term
    const whereConditions = { AND: andConditions }; // Ensure consistent type
    const result = yield prisma_2.default.admin.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: sortBy && sortOrder ? [{ [sortBy]: sortOrder }] : [{ name: "asc" }], // Fallback to 'name' for sorting if not provided
    });
    const total = yield prisma_2.default.admin.count({ where: whereConditions });
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getSingleAdminFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_2.default.admin.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateAdminDataFromDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_2.default.admin.findUniqueOrThrow({
        where: { id },
    });
    const result = yield prisma_2.default.admin.update({
        where: {
            id,
        },
        data,
    });
    return result;
});
const deleteAdminFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the admin exists before proceeding with deletion
    const admin = yield prisma_2.default.admin.findUnique({
        where: { id },
    });
    if (!admin) {
        throw new Error("Admin not found");
    }
    // Perform the delete operation in a transaction
    const result = yield prisma_2.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        // Deleting the admin record
        const adminDeleteData = yield transactionClient.admin.delete({
            where: { id },
        });
        yield transactionClient.user.delete({
            where: { email: adminDeleteData.email },
        });
        return adminDeleteData;
    }));
    return result;
});
const softDeleteAdminFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the admin exists before proceeding with deletion
    // Perform the delete operation in a transaction
    const result = yield prisma_2.default.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        // Deleting the admin record
        const adminDeleteData = yield transactionClient.admin.update({
            where: { id },
            data: { isDeleted: true },
        });
        yield transactionClient.user.update({
            where: { email: adminDeleteData.email },
            data: { status: prisma_1.UserStatus.BLOCKED },
        });
        return adminDeleteData;
    }));
    return result;
});
exports.AdminServices = {
    getAllAdmin,
    getSingleAdminFromDB,
    updateAdminDataFromDB,
    deleteAdminFromDB,
    softDeleteAdminFromDB,
};
