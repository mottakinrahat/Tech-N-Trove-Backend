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
exports.BannerServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../../errors/apiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const fileUploader_1 = require("../../../helpers/fileUploader");
/* ------------------------------------------------------------------ */
/*  CREATE                                                               */
/* ------------------------------------------------------------------ */
const createBannerIntoDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    // File is mandatory for a new banner
    if (!req.file) {
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, "Banner image is required");
    }
    const { url: image } = yield fileUploader_1.fileUploader.uploadToCloudinary(req.file.path);
    const payload = Object.assign(Object.assign({}, req.body), { image, sortOrder: req.body.sortOrder ? Number(req.body.sortOrder) : 0, isActive: req.body.isActive !== undefined
            ? req.body.isActive === "true" || req.body.isActive === true
            : true, bannerType: req.body.bannerType || "HERO" });
    return prisma_1.default.banner.create({ data: payload });
});
/* ------------------------------------------------------------------ */
/*  READ — all active HERO banners (public / frontend carousel)          */
/* ------------------------------------------------------------------ */
const getActiveBannersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.banner.findMany({
        where: { isActive: true, bannerType: "HERO" },
        orderBy: { sortOrder: "asc" },
    });
});
/* ------------------------------------------------------------------ */
/*  READ — all active OFFER banners (public / home page offers)          */
/* ------------------------------------------------------------------ */
const getActiveOfferBannersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.banner.findMany({
        where: { isActive: true, bannerType: "OFFER" },
        orderBy: { sortOrder: "asc" },
    });
});
/* ------------------------------------------------------------------ */
/*  READ — all active PROMO banners (public / hero promo cards)          */
/* ------------------------------------------------------------------ */
const getActivePromoBannersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.banner.findMany({
        where: { isActive: true, bannerType: "PROMO" },
        orderBy: { sortOrder: "asc" },
    });
});
/* ------------------------------------------------------------------ */
/*  READ — all banners (admin)                                           */
/* ------------------------------------------------------------------ */
const getAllBannersFromDB = (bannerType) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.banner.findMany({
        where: bannerType ? { bannerType: bannerType } : undefined,
        orderBy: { sortOrder: "asc" },
    });
});
/* ------------------------------------------------------------------ */
/*  READ — single                                                        */
/* ------------------------------------------------------------------ */
const getSingleBannerFromDB = (bannerId) => __awaiter(void 0, void 0, void 0, function* () {
    const banner = yield prisma_1.default.banner.findUnique({ where: { id: bannerId } });
    if (!banner)
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Banner not found");
    return banner;
});
/* ------------------------------------------------------------------ */
/*  UPDATE                                                               */
/* ------------------------------------------------------------------ */
const updateBannerIntoDB = (bannerId, req) => __awaiter(void 0, void 0, void 0, function* () {
    yield getSingleBannerFromDB(bannerId);
    let imageUrl;
    if (req.file) {
        const { url } = yield fileUploader_1.fileUploader.uploadToCloudinary(req.file.path);
        imageUrl = url;
    }
    const payload = Object.assign({}, req.body);
    if (imageUrl)
        payload.image = imageUrl;
    if (payload.sortOrder !== undefined)
        payload.sortOrder = Number(payload.sortOrder);
    if (payload.isActive !== undefined)
        payload.isActive = payload.isActive === "true" || payload.isActive === true;
    return prisma_1.default.banner.update({ where: { id: bannerId }, data: payload });
});
/* ------------------------------------------------------------------ */
/*  DELETE                                                               */
/* ------------------------------------------------------------------ */
const deleteBannerFromDB = (bannerId) => __awaiter(void 0, void 0, void 0, function* () {
    yield getSingleBannerFromDB(bannerId);
    yield prisma_1.default.banner.delete({ where: { id: bannerId } });
});
exports.BannerServices = {
    createBannerIntoDB,
    getActiveBannersFromDB,
    getActiveOfferBannersFromDB,
    getActivePromoBannersFromDB,
    getAllBannersFromDB,
    getSingleBannerFromDB,
    updateBannerIntoDB,
    deleteBannerFromDB,
};
