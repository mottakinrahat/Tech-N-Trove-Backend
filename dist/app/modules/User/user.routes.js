"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = require("../../middleWares/auth");
const prisma_1 = require("../../../../prisma/generated/prisma");
const fileUploader_1 = require("../../../helpers/fileUploader");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.get("/me", (0, auth_1.auth)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.BUYER, prisma_1.UserRole.MANAGER), user_controller_1.UserController.getMyProfile);
router.post("/create-admin", fileUploader_1.fileUploader.upload.single("file"), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    return user_controller_1.UserController.createAdminUser(req, res, next);
}); //
router.post("/create-manager", fileUploader_1.fileUploader.upload.single("file"), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    return user_controller_1.UserController.createManager(req, res, next);
}); //
router.post("/create-buyer", fileUploader_1.fileUploader.upload.single("file"), (req, res, next) => {
    req.body = user_validation_1.UserValidation.createBuyerValidationSchema.parse(JSON.parse(req.body.data));
    return user_controller_1.UserController.createBuyer(req, res, next);
}); //
router.get("/", (0, auth_1.auth)(prisma_1.UserRole.SUPER_ADMIN, prisma_1.UserRole.ADMIN), user_controller_1.UserController.getAllUser);
router.patch("/:id/status", (0, auth_1.auth)(prisma_1.UserRole.SUPER_ADMIN, prisma_1.UserRole.ADMIN), user_controller_1.UserController.changeProfileStatus);
router.patch("/update-my-profile", (0, auth_1.auth)(prisma_1.UserRole.SUPER_ADMIN, prisma_1.UserRole.ADMIN, prisma_1.UserRole.BUYER, prisma_1.UserRole.MANAGER), fileUploader_1.fileUploader.upload.single("file"), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    return user_controller_1.UserController.updateMyProfile(req, res, next);
});
exports.userRoutes = router;
