"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productHelpers = exports.parseBooleanParam = void 0;
const product_constant_1 = require("./product.constant");
const productIncludeDefault = {
    brand: true,
    variants: {
        include: {
            variantImages: true,
        },
    },
};
const identifierWhere = (identifier) => ({
    OR: [{ id: identifier }, { slug: identifier }],
});
const parseBooleanParam = (value) => {
    if (typeof value === "boolean")
        return value;
    if (value === "true")
        return true;
    if (value === "false")
        return false;
    return undefined;
};
exports.parseBooleanParam = parseBooleanParam;
const buildProductFilterConditions = (params, options) => {
    const { searchTerm } = params, filterData = __rest(params, ["searchTerm"]);
    const andConditions = [];
    console.log(searchTerm);
    if (searchTerm) {
        andConditions.push({
            OR: product_constant_1.productSearchableFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: "insensitive",
                },
            })),
        });
    }
    if (filterData === null || filterData === void 0 ? void 0 : filterData.categoryId) {
        andConditions.push({ categoryId: filterData.categoryId });
    }
    if (filterData.category) {
        andConditions.push({
            category: {
                categoryName: {
                    equals: filterData.category,
                    mode: "insensitive",
                },
            },
        });
    }
    if (filterData.brandId) {
        andConditions.push({ brandId: filterData.brandId });
    }
    if (filterData.brand) {
        andConditions.push({
            brand: {
                brandName: {
                    equals: filterData.brand,
                    mode: "insensitive",
                },
            },
        });
    }
    const published = (0, exports.parseBooleanParam)(filterData.isPublished);
    if (published !== undefined) {
        andConditions.push({ isPublished: published });
    }
    else if (options.publishedOnly) {
        andConditions.push({ isPublished: true });
    }
    const featured = (0, exports.parseBooleanParam)(filterData.isFeatured);
    if (featured !== undefined) {
        andConditions.push({ isFeatured: featured });
    }
    return andConditions;
};
exports.productHelpers = {
    productIncludeDefault, identifierWhere, parseBooleanParam: exports.parseBooleanParam, buildProductFilterConditions
};
