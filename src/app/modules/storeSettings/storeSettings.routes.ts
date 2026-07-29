import express from "express";
import { UserRole } from "../../../../prisma/generated/prisma";
import { auth } from "../../middleWares/auth";
import validateRequest from "../../middleWares/validateRequest";
import { StoreSettingsController } from "./storeSettings.controller";
import { StoreSettingsValidation } from "./storeSettings.validation";

const router = express.Router();

// GET /store-settings — public, fetched by frontend on load for branding
router.get("/", StoreSettingsController.getSettings);

// PUT /store-settings — admin-only, singleton upsert
router.put(
  "/",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  validateRequest(StoreSettingsValidation.upsertSettings),
  StoreSettingsController.upsertSettings,
);

export const storeSettingsRoutes = router;
