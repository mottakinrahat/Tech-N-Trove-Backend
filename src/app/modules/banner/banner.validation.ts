import { z } from "zod";

const createBanner = z.object({
  title: z.string({ message: "Title is required" }).min(1),
  description: z.string().optional(),
  buttonText: z.string().optional(),
  buttonLink: z.string().optional(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
});

const updateBanner = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  buttonText: z.string().optional(),
  buttonLink: z.string().optional(),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
});

export const BannerValidation = { createBanner, updateBanner };
