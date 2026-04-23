import status from "http-status";
import ApiError from "../../errors/apiError";
import { fileUploader } from "../../../helpers/fileUploader";
import prisma from "../../../shared/prisma";

const createBrandIntoDB = async (req: any
) => {

  const file = req?.file;
  const payload = req.body;
  if (file) {
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(
      file?.path,
    );
    payload.logoUrl = uploadToCloudinary.url;

    const existing = await prisma.brand.findFirst({
      where: { brandName: { equals: payload.brandName, mode: "insensitive" } },
    });
 

    if (existing) {
      throw new ApiError(
        status.CONFLICT,
        "A brand with this name already exists",
      );
    }
    const result = await prisma.brand.create({
      data: {
        brandName: payload.brandName,
        description: payload.description
      },
    });
    return result;
  }
};

const getBrandsFromDB = async () => {
  return prisma.brand.findMany({
    orderBy: { brandName: "asc" },
    include: {
      _count: { select: { products: true } },
    },
  });
};

const getSingleBrandFromDB = async (brandId: string) => {
  const brand = await prisma.brand.findUnique({
    where: { id: brandId },
    include: {
      _count: { select: { products: true } },
    },
  });

  if (!brand) {
    throw new ApiError(status.NOT_FOUND, "Brand not found");
  }

  return brand;
};

const updateBrandIntoDB = async (
  brandId: string,
  payload: { brandName?: string; description?: string | null },
  file?: Express.Multer.File,
) => {
  await getSingleBrandFromDB(brandId);

  if (payload.brandName) {
    const duplicate = await prisma.brand.findFirst({
      where: {
        brandName: { equals: payload.brandName, mode: "insensitive" },
        NOT: { id: brandId },
      },
    });

    if (duplicate) {
      throw new ApiError(
        status.CONFLICT,
        "A brand with this name already exists",
      );
    }
  }

  let logoUrl: string | undefined;

  if (file?.path) {
    const uploaded = await fileUploader.uploadToCloudinary(file.path);
    logoUrl = uploaded.url;
  }

  const updateData: Record<string, unknown> = { ...payload };
  if (logoUrl) updateData.logoUrl = logoUrl;

  return prisma.brand.update({
    where: { id: brandId },
    data: updateData,
  });
};

const deleteBrandFromDB = async (brandId: string) => {
  await getSingleBrandFromDB(brandId);

  const productCount = await prisma.product.count({ where: { brandId } });

  if (productCount > 0) {
    throw new ApiError(
      status.CONFLICT,
      `Cannot delete brand — it has ${productCount} product(s) linked to it`,
    );
  }

  await prisma.brand.delete({ where: { id: brandId } });
};

export const BrandServices = {
  createBrandIntoDB,
  getBrandsFromDB,
  getSingleBrandFromDB,
  updateBrandIntoDB,
  deleteBrandFromDB,
};

