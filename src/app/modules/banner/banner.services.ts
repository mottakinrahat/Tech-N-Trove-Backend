import status from "http-status";
import ApiError from "../../errors/apiError";
import prisma from "../../../shared/prisma";
import { fileUploader } from "../../../helpers/fileUploader";
import { BannerType } from "../../../../prisma/generated/prisma";

/* ------------------------------------------------------------------ */
/*  CREATE                                                               */
/* ------------------------------------------------------------------ */
const createBannerIntoDB = async (req: any) => {
  // File is mandatory for a new banner
  
  if (!req.file) {
    throw new ApiError(status.BAD_REQUEST, "Banner image is required");
  }

  const { url: image } = await fileUploader.uploadToCloudinary(req.file.path);

  const payload = {
    ...req.body,
    image,
    sortOrder: req.body.sortOrder ? Number(req.body.sortOrder) : 0,
    isActive:
      req.body.isActive !== undefined
        ? req.body.isActive === "true" || req.body.isActive === true
        : true,
    bannerType: req.body.bannerType || "HERO",
  };

  return prisma.banner.create({ data: payload });
};

/* ------------------------------------------------------------------ */
/*  READ — all active HERO banners (public / frontend carousel)          */
/* ------------------------------------------------------------------ */
const getActiveBannersFromDB = async () => {
  return prisma.banner.findMany({
    where: { isActive: true, bannerType: "HERO" },
    orderBy: { sortOrder: "asc" },
  });
};

/* ------------------------------------------------------------------ */
/*  READ — all active OFFER banners (public / home page offers)          */
/* ------------------------------------------------------------------ */
const getActiveOfferBannersFromDB = async () => {
  return prisma.banner.findMany({
    where: { isActive: true, bannerType: "OFFER" },
    orderBy: { sortOrder: "asc" },
  });
};

/* ------------------------------------------------------------------ */
/*  READ — all active PROMO banners (public / hero promo cards)          */
/* ------------------------------------------------------------------ */
const getActivePromoBannersFromDB = async () => {
  return prisma.banner.findMany({
    where: { isActive: true, bannerType: "PROMO" },
    orderBy: { sortOrder: "asc" },
  });
};

/* ------------------------------------------------------------------ */
/*  READ — all banners (admin)                                           */
/* ------------------------------------------------------------------ */
const getAllBannersFromDB = async (bannerType?: string) => {
  return prisma.banner.findMany({
    where: bannerType ? { bannerType: bannerType as BannerType } : undefined,
    orderBy: { sortOrder: "asc" },
  });
};

/* ------------------------------------------------------------------ */
/*  READ — single                                                        */
/* ------------------------------------------------------------------ */
const getSingleBannerFromDB = async (bannerId: string) => {
  const banner = await prisma.banner.findUnique({ where: { id: bannerId } });
  if (!banner) throw new ApiError(status.NOT_FOUND, "Banner not found");
  return banner;
};

/* ------------------------------------------------------------------ */
/*  UPDATE                                                               */
/* ------------------------------------------------------------------ */
const updateBannerIntoDB = async (bannerId: string, req: any) => {
  await getSingleBannerFromDB(bannerId);

  let imageUrl: string | undefined;
  if (req.file) {
    const { url } = await fileUploader.uploadToCloudinary(req.file.path);
    imageUrl = url;
  }

  const payload: Record<string, any> = { ...req.body };
  if (imageUrl) payload.image = imageUrl;
  if (payload.sortOrder !== undefined) payload.sortOrder = Number(payload.sortOrder);
  if (payload.isActive !== undefined)
    payload.isActive = payload.isActive === "true" || payload.isActive === true;

  return prisma.banner.update({ where: { id: bannerId }, data: payload });
};

/* ------------------------------------------------------------------ */
/*  DELETE                                                               */
/* ------------------------------------------------------------------ */
const deleteBannerFromDB = async (bannerId: string) => {
  await getSingleBannerFromDB(bannerId);
  await prisma.banner.delete({ where: { id: bannerId } });
};

export const BannerServices = {
  createBannerIntoDB,
  getActiveBannersFromDB,
  getActiveOfferBannersFromDB,
  getActivePromoBannersFromDB,
  getAllBannersFromDB,
  getSingleBannerFromDB,
  updateBannerIntoDB,
  deleteBannerFromDB,
};
