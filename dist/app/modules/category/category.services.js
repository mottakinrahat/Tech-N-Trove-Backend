"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../../errors/apiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createCategoryIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existing = yield prisma_1.default.category.findFirst({
        where: {
            categoryName: {
                equals: payload.categoryName,
                mode: "insensitive",
            },
        },
    });
    if (existing) {
        throw new apiError_1.default(http_status_1.default.CONFLICT, "A category with this name already exists");
    }
    return prisma_1.default.category.create({ data: payload });
});
const getCategoriesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.category.findMany({
        orderBy: { categoryName: "asc" },
        include: {
            _count: { select: { product: true } },
        },
    });
});
const getSingleCategoryFromDB = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield prisma_1.default.category.findUnique({
        where: { id: categoryId },
        include: {
            _count: { select: { product: true } },
        },
    });
    if (!category) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "Category not found");
    }
    return category;
});
const updateCategoryIntoDB = (categoryId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield getSingleCategoryFromDB(categoryId);
    if (payload.categoryName) {
        const duplicate = yield prisma_1.default.category.findFirst({
            where: {
                categoryName: { equals: payload.categoryName, mode: "insensitive" },
                NOT: { id: categoryId },
            },
        });
        if (duplicate) {
            throw new apiError_1.default(http_status_1.default.CONFLICT, "A category with this name already exists");
        }
    }
    return prisma_1.default.category.update({
        where: { id: categoryId },
        data: payload,
    });
});
const deleteCategoryFromDB = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    yield getSingleCategoryFromDB(categoryId);
    const productCount = yield prisma_1.default.product.count({
        where: { categoryId },
    });
    if (productCount > 0) {
        throw new apiError_1.default(http_status_1.default.CONFLICT, `Cannot delete category — it has ${productCount} product(s) linked to it`);
    }
    yield prisma_1.default.category.delete({ where: { id: categoryId } });
});
exports.CategoryServices = {
    createCategoryIntoDB,
    getCategoriesFromDB,
    getSingleCategoryFromDB,
    updateCategoryIntoDB,
    deleteCategoryFromDB,
};
