import status from "http-status";
import ApiError from "../../errors/apiError";
import prisma from "../../../shared/prisma";

const assertProductExists = async (productId: string) => {
  const product = await prisma.product.findUnique({
    where: { id: productId },
    select: { id: true },
  });
  if (!product) {
    throw new ApiError(status.NOT_FOUND, "Product not found");
  }
};

const createDetailIntoDB = async (
  productId: string,
  payload: { topic: string; description: string; sortOrder?: number }
) => {
  await assertProductExists(productId);

  return prisma.productDetail.create({
    data: {
      productId,
      topic: payload.topic,
      description: payload.description,
      sortOrder: payload.sortOrder ?? 0,
    },
  });
};

const getDetailsByProductFromDB = async (productId: string) => {
  await assertProductExists(productId);

  return prisma.productDetail.findMany({
    where: { productId },
    orderBy: { sortOrder: "asc" },
  });
};

const getSingleDetailFromDB = async (productId: string, detailId: string) => {
  const detail = await prisma.productDetail.findFirst({
    where: { id: detailId, productId },
  });

  if (!detail) {
    throw new ApiError(status.NOT_FOUND, "Product detail not found");
  }

  return detail;
};

const updateDetailIntoDB = async (
  productId: string,
  detailId: string,
  payload: { topic?: string; description?: string; sortOrder?: number }
) => {
  await getSingleDetailFromDB(productId, detailId);

  return prisma.productDetail.update({
    where: { id: detailId },
    data: payload,
  });
};

const deleteDetailFromDB = async (productId: string, detailId: string) => {
  await getSingleDetailFromDB(productId, detailId);
  await prisma.productDetail.delete({ where: { id: detailId } });
};

export const ProductDetailServices = {
  createDetailIntoDB,
  getDetailsByProductFromDB,
  getSingleDetailFromDB,
  updateDetailIntoDB,
  deleteDetailFromDB,
};
