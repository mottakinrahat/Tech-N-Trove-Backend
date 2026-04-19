import express, { NextFunction, Request, Response } from "express";
import { UserRole } from "../../../../prisma/generated/prisma";
import { auth } from "../../middleWares/auth";
import { fileUploader } from "../../../helpers/fileUploader";
import { BrandController } from "./brand.controller";

const router = express.Router();

const adminAuth = auth(UserRole.ADMIN, UserRole.SUPER_ADMIN);

// Public routes
router.get("/", BrandController.getAllBrands);
router.get("/:brandId", BrandController.getSingleBrand);

// Admin-only routes — use multer to parse multipart/form-data
// Field name for the logo image must be "logo"
router.post(
  "/",
  adminAuth,
  fileUploader.upload.single("file"),   
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    return BrandController.createBrand(req, res, next);
  }
);

router.patch(
  "/:brandId",
  adminAuth,
  fileUploader.upload.single("logo"),
  BrandController.updateBrand,
);

router.delete("/:brandId", adminAuth, BrandController.deleteBrand);

export const brandRoutes = router;
