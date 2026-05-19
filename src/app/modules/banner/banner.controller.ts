import status from "http-status";
import { catchAsync } from "../../../helpers/trycatch";
import { sendResponse } from "../../../helpers/sendResponse";
import { BannerServices } from "./banner.services";

/* ---------- CREATE ---------- */
const createBanner = catchAsync(async (req: any, res: any) => {
  const result = await BannerServices.createBannerIntoDB(req);

  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: "Banner created successfully",
    data: result,
  });
});

/* ---------- GET ACTIVE HERO banners (public / frontend carousel) ---------- */
const getActiveBanners = catchAsync(async (_req: any, res: any) => {
  const result = await BannerServices.getActiveBannersFromDB();

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Active banners retrieved successfully",
    data: result,
  });
});

/* ---------- GET ACTIVE OFFER banners (public / home page) ---------- */
const getActiveOfferBanners = catchAsync(async (_req: any, res: any) => {
  const result = await BannerServices.getActiveOfferBannersFromDB();

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Active offer banners retrieved successfully",
    data: result,
  });
});

/* ---------- GET ACTIVE PROMO banners (public / hero promo cards) ---------- */
const getActivePromoBanners = catchAsync(async (_req: any, res: any) => {
  const result = await BannerServices.getActivePromoBannersFromDB();

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Active promo banners retrieved successfully",
    data: result,
  });
});

/* ---------- GET ALL (admin) ---------- */
const getAllBanners = catchAsync(async (req: any, res: any) => {
  const result = await BannerServices.getAllBannersFromDB(req.query.bannerType);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "All banners retrieved successfully",
    data: result,
  });
});

/* ---------- GET SINGLE ---------- */
const getSingleBanner = catchAsync(async (req: any, res: any) => {
  const result = await BannerServices.getSingleBannerFromDB(req.params.bannerId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Banner retrieved successfully",
    data: result,
  });
});

/* ---------- UPDATE ---------- */
const updateBanner = catchAsync(async (req: any, res: any) => {
  const result = await BannerServices.updateBannerIntoDB(req.params.bannerId, req);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Banner updated successfully",
    data: result,
  });
});

/* ---------- DELETE ---------- */
const deleteBanner = catchAsync(async (req: any, res: any) => {
  await BannerServices.deleteBannerFromDB(req.params.bannerId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Banner deleted successfully",
    data: null,
  });
});

export const BannerController = {
  createBanner,
  getActiveBanners,
  getActiveOfferBanners,
  getActivePromoBanners,
  getAllBanners,
  getSingleBanner,
  updateBanner,
  deleteBanner,
};
