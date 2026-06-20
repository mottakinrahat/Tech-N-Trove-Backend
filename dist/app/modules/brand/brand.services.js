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
exports.BrandServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../../errors/apiError"));
const fileUploader_1 = require("../../../helpers/fileUploader");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBrandIntoDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req === null || req === void 0 ? void 0 : req.file;
    const payload = req.body;
    // Check for duplicate name first
    const existing = yield prisma_1.default.brand.findFirst({
        where: { brandName: { equals: payload.brandName, mode: "insensitive" } },
    });
    if (existing) {
        throw new apiError_1.default(http_status_1.default.CONFLICT, "A brand with this name already exists");
    }
    // Upload logo if a file was provided
    let logoUrl;
    if (file === null || file === void 0 ? void 0 : file.path) {
        const uploadToCloudinary = yield fileUploader_1.fileUploader.uploadToCloudinary(file.path);
        logoUrl = uploadToCloudinary === null || uploadToCloudinary === void 0 ? void 0 : uploadToCloudinary.url;
    }
    const result = yield prisma_1.default.brand.create({
        data: {
            brandName: payload.brandName,
            description: payload.description,
            logoUrl,
        },
    });
    return result;
});
const getBrandsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.brand.findMany({
        orderBy: { brandName: "asc" },
        include: {
            _count: { select: { products: true } },
        },
    });
});
const getSingleBrandFromDB = (brandId) => __awaiter(void 0, void 0, void 0, function* () {
    const brand = yield prisma_1.default.brand.findUnique({
        where: { id: brandId },
        include: {
            _count: { select: { products: true } },
        },
    });
    if (!brand) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Brand not found");
    }
    return brand;
});
const updateBrandIntoDB = (brandId, payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    yield getSingleBrandFromDB(brandId);
    if (payload.brandName) {
        const duplicate = yield prisma_1.default.brand.findFirst({
            where: {
                brandName: { equals: payload.brandName, mode: "insensitive" },
                NOT: { id: brandId },
            },
        });
        if (duplicate) {
            throw new apiError_1.default(http_status_1.default.CONFLICT, "A brand with this name already exists");
        }
    }
    let logoUrl;
    if (file === null || file === void 0 ? void 0 : file.path) {
        const uploaded = yield fileUploader_1.fileUploader.uploadToCloudinary(file.path);
        logoUrl = uploaded.url;
    }
    const updateData = Object.assign({}, payload);
    if (logoUrl)
        updateData.logoUrl = logoUrl;
    return prisma_1.default.brand.update({
        where: { id: brandId },
        data: updateData,
    });
});
const deleteBrandFromDB = (brandId) => __awaiter(void 0, void 0, void 0, function* () {
    yield getSingleBrandFromDB(brandId);
    const productCount = yield prisma_1.default.product.count({ where: { brandId } });
    if (productCount > 0) {
        throw new apiError_1.default(http_status_1.default.CONFLICT, `Cannot delete brand — it has ${productCount} product(s) linked to it`);
    }
    yield prisma_1.default.brand.delete({ where: { id: brandId } });
});
exports.BrandServices = {
    createBrandIntoDB,
    getBrandsFromDB,
    getSingleBrandFromDB,
    updateBrandIntoDB,
    deleteBrandFromDB,
};
