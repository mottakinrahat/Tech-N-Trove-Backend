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
exports.BrandController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const trycatch_1 = require("../../../helpers/trycatch");
const sendResponse_1 = require("../../../helpers/sendResponse");
const brand_services_1 = require("./brand.services");
const createBrand = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield brand_services_1.BrandServices.createBrandIntoDB(req);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Brand created successfully",
        data: result,
    });
}));
const getAllBrands = (0, trycatch_1.catchAsync)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield brand_services_1.BrandServices.getBrandsFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Brands retrieved successfully",
        data: result,
    });
}));
const getSingleBrand = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { brandId } = req.params;
    const result = yield brand_services_1.BrandServices.getSingleBrandFromDB(brandId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Brand retrieved successfully",
        data: result,
    });
}));
const updateBrand = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { brandId } = req.params;
    const body = {
        brandName: req.body.brandName,
        description: req.body.description,
    };
    // Remove undefined fields so we don't accidentally null-out values
    const filteredBody = Object.fromEntries(Object.entries(body).filter(([, v]) => v !== undefined));
    const result = yield brand_services_1.BrandServices.updateBrandIntoDB(brandId, filteredBody, req.file);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Brand updated successfully",
        data: result,
    });
}));
const deleteBrand = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { brandId } = req.params;
    yield brand_services_1.BrandServices.deleteBrandFromDB(brandId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Brand deleted successfully",
        data: null,
    });
}));
exports.BrandController = {
    createBrand,
    getAllBrands,
    getSingleBrand,
    updateBrand,
    deleteBrand,
};
