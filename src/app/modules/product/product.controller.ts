import status from "http-status";
import { Prisma } from "../../../../prisma/generated/prisma";
import { catchAsync } from "../../../helpers/trycatch";
import { sendResponse } from "../../../helpers/sendResponse";
import { pick } from "../../../shared/pick";
import { productFilterableFields } from "./product.constant";
import { ProductServices } from "./product.services";

const createProduct = catchAsync(async (req: any, res: any) => {
  const body = req.body;
  const user = req.user;


  const result = await ProductServices.createProductIntoDB(body, user);

  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: "Product created successfully",
    data: result,
  });
});

const getPublishedProducts = catchAsync(async (req: any, res: any) => {
  const filter = pick(req.query, productFilterableFields);
  const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
  const result = await ProductServices.getProductsFromDB(filter, options);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Products retrieved successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getAllProductsAdmin = catchAsync(async (req: any, res: any) => {
  const filter = pick(req.query, productFilterableFields);
  const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
  const result = await ProductServices.getProductsFromDB(filter, options);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Products retrieved successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getPublishedProductById = catchAsync(async (req: any, res: any) => {
  const { productId } = req.params;
  const result = await ProductServices.getSingleProductFromDB(productId, {
    publishedOnly: true,
  });

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Product retrieved successfully",
    data: result,
  });
});

const getProductByIdAdmin = catchAsync(async (req: any, res: any) => {
  const { productId } = req.params;
  const result = await ProductServices.getSingleProductFromDB(productId, {
    publishedOnly: false,
  });

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Product retrieved successfully",
    data: result,
  });
});

const updateProduct = catchAsync(async (req: any, res: any) => {
  const { productId } = req.params;
  const body = req.body;


  const result = await ProductServices.updateProductIntoDB(productId, body);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Product updated successfully",
    data: result,
  });
});

const deleteProduct = catchAsync(async (req: any, res: any) => {
  const { productId } = req.params;
  await ProductServices.deleteProductIntoDB(productId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Product deleted successfully",
    data: null,
  });
});

const createVariant = catchAsync(async (req: any, res: any) => {
  const { productId } = req.params;
  const result = await ProductServices.createVariantIntoDB(productId, req);

  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: "Variant created successfully",
    data: result,
  });
});

// const createVariant = catchAsync(async (req: any, res: any) => {
//   const { productId } = req.params;
//   const body = req.body;

//   const result = await ProductServices.createVariantIntoDB(productId, body);

//   sendResponse(res, {
//     success: true,
//     statusCode: status.CREATED,
//     message: "Variant created successfully",
//     data: result,
//   });
// });

const getVariantsByProduct = catchAsync(async (req: any, res: any) => {
  const { productId } = req.params;
  const result = await ProductServices.getVariantsByProductFromDB(productId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Variants retrieved successfully",
    data: result,
  });
});

const getVariantById = catchAsync(async (req: any, res: any) => {
  const { productId, variantId } = req.params;
  const result = await ProductServices.getSingleVariantFromDB(
    productId,
    variantId,
  );

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Variant retrieved successfully",
    data: result,
  });
});

const updateVariant = catchAsync(async (req: any, res: any) => {
  const { productId, variantId } = req.params;
  const body = req.body;
  const data: Prisma.ProductVariantUpdateInput = {
    sku: body.sku,
    title: body.title,
    price: body.price,
    comparePrice: body.comparePrice,
    costPrice: body.costPrice,
    stock: body.stock,
    lowStockThreshold: body.lowStockThreshold,
    color: body.color,
    size: body.size,
    material: body.material,
    weight: body.weight,
    barcode: body.barcode,
    isActive: body.isActive,
  };

  const filtered = Object.fromEntries(
    Object.entries(data).filter(([, value]) => value !== undefined),
  ) as Prisma.ProductVariantUpdateInput;

  const result = await ProductServices.updateVariantIntoDB(
    productId,
    variantId,
    filtered,
  );

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Variant updated successfully",
    data: result,
  });
});

const deleteVariant = catchAsync(async (req: any, res: any) => {
  const { productId, variantId } = req.params;
  await ProductServices.deleteVariantIntoDB(productId, variantId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Variant deleted successfully",
    data: null,
  });
});

const createProductImage = catchAsync(async (req: any, res: any) => {
  const { productId } = req.params;
  const result = await ProductServices.createProductImageIntoDB(
    productId,
    req.body.url,
  );

  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: "Image added to product successfully",
    data: result,
  });
});

const createVariantImage = catchAsync(async (req: any, res: any) => {
  const { productId, variantId } = req.params;
  const result = await ProductServices.createVariantImageIntoDB(
    productId,
    variantId,
    req.body.url,
  );

  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    message: "Image added to variant successfully",
    data: result,
  });
});

const deleteProductImage = catchAsync(async (req: any, res: any) => {
  const { imageId } = req.params;
  await ProductServices.deleteProductImageIntoDB(imageId);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Image deleted successfully",
    data: null,
  });
});

export const ProductController = {
  createProduct,
  getPublishedProducts,
  getAllProductsAdmin,
  getPublishedProductById,
  getProductByIdAdmin,
  updateProduct,
  deleteProduct,
  createVariant,
  getVariantsByProduct,
  getVariantById,
  updateVariant,
  deleteVariant,
  createProductImage,
  createVariantImage,
  deleteProductImage,
};
