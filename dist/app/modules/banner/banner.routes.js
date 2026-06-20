"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bannerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../../../../prisma/generated/prisma");
const auth_1 = require("../../middleWares/auth");
const fileUploader_1 = require("../../../helpers/fileUploader");
const banner_controller_1 = require("./banner.controller");
const router = express_1.default.Router();
const adminAuth = (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.SUPER_ADMIN);
// Public routes
router.get("/active", banner_controller_1.BannerController.getActiveBanners);
router.get("/offers/active", banner_controller_1.BannerController.getActiveOfferBanners);
router.get("/promos/active", banner_controller_1.BannerController.getActivePromoBanners);
// Admin routes
router.get("/", banner_controller_1.BannerController.getAllBanners);
router.get("/:bannerId", adminAuth, banner_controller_1.BannerController.getSingleBanner);
router.post("/", adminAuth, fileUploader_1.fileUploader.upload.single("file"), (req, res, next) => {
    if (req.body.data) {
        req.body = Object.assign({}, JSON.parse(req.body.data));
    }
    return banner_controller_1.BannerController.createBanner(req, res, next);
});
router.patch("/:bannerId", adminAuth, fileUploader_1.fileUploader.upload.single("file"), (req, res, next) => {
    if (req.body.data) {
        req.body = Object.assign({}, JSON.parse(req.body.data));
    }
    return banner_controller_1.BannerController.updateBanner(req, res, next);
});
router.delete("/:bannerId", adminAuth, banner_controller_1.BannerController.deleteBanner);
exports.bannerRoutes = router;
