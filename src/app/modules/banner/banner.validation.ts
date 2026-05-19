import { z } from "zod";

const createBanner = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  buttonText: z.string().optional(),
  buttonLink: z.string().optional(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
  bannerType: z.enum(["HERO", "OFFER", "PROMO"]).optional(),
});

const updateBanner = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  buttonText: z.string().optional(),
  buttonLink: z.string().optional(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
  bannerType: z.enum(["HERO", "OFFER", "PROMO"]).optional(),
});

export const BannerValidation = { createBanner, updateBanner };
