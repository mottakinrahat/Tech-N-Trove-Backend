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
exports.BannerController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const trycatch_1 = require("../../../helpers/trycatch");
const sendResponse_1 = require("../../../helpers/sendResponse");
const banner_services_1 = require("./banner.services");
/* ---------- CREATE ---------- */
const createBanner = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield banner_services_1.BannerServices.createBannerIntoDB(req);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Banner created successfully",
        data: result,
    });
}));
/* ---------- GET ACTIVE HERO banners (public / frontend carousel) ---------- */
const getActiveBanners = (0, trycatch_1.catchAsync)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield banner_services_1.BannerServices.getActiveBannersFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Active banners retrieved successfully",
        data: result,
    });
}));
/* ---------- GET ACTIVE OFFER banners (public / home page) ---------- */
const getActiveOfferBanners = (0, trycatch_1.catchAsync)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield banner_services_1.BannerServices.getActiveOfferBannersFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Active offer banners retrieved successfully",
        data: result,
    });
}));
/* ---------- GET ACTIVE PROMO banners (public / hero promo cards) ---------- */
const getActivePromoBanners = (0, trycatch_1.catchAsync)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield banner_services_1.BannerServices.getActivePromoBannersFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Active promo banners retrieved successfully",
        data: result,
    });
}));
/* ---------- GET ALL (admin) ---------- */
const getAllBanners = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield banner_services_1.BannerServices.getAllBannersFromDB(req.query.bannerType);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "All banners retrieved successfully",
        data: result,
    });
}));
/* ---------- GET SINGLE ---------- */
const getSingleBanner = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield banner_services_1.BannerServices.getSingleBannerFromDB(req.params.bannerId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Banner retrieved successfully",
        data: result,
    });
}));
/* ---------- UPDATE ---------- */
const updateBanner = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield banner_services_1.BannerServices.updateBannerIntoDB(req.params.bannerId, req);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Banner updated successfully",
        data: result,
    });
}));
/* ---------- DELETE ---------- */
const deleteBanner = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield banner_services_1.BannerServices.deleteBannerFromDB(req.params.bannerId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Banner deleted successfully",
        data: null,
    });
}));
exports.BannerController = {
    createBanner,
    getActiveBanners,
    getActiveOfferBanners,
    getActivePromoBanners,
    getAllBanners,
    getSingleBanner,
    updateBanner,
    deleteBanner,
};
