import express, { NextFunction, Request, Response } from "express";
import { UserRole } from "../../../../prisma/generated/prisma";
import { auth } from "../../middleWares/auth";
import { fileUploader } from "../../../helpers/fileUploader";
import { BannerController } from "./banner.controller";

const router = express.Router();

const adminAuth = auth(UserRole.ADMIN, UserRole.SUPER_ADMIN);

router.get("/active", BannerController.getActiveBanners);

router.get("/", BannerController.getAllBanners);

router.get("/:bannerId", adminAuth, BannerController.getSingleBanner);

router.post(
  "/",
  adminAuth,
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    if (req.body.data) {
      req.body = { ...JSON.parse(req.body.data) };
    }
    return BannerController.createBanner(req, res, next);
  },
);

router.patch(
  "/:bannerId",
  adminAuth,
  fileUploader.upload.single("file"),
  BannerController.updateBanner,
);

router.delete("/:bannerId", adminAuth, BannerController.deleteBanner);

export const bannerRoutes = router;
