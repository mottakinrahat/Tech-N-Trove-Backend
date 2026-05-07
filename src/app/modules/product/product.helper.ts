import { Prisma } from "../../../../prisma/generated/prisma";
import { productSearchableFields } from "./product.constant";
import { IProductFilterRequest } from "./product.interface";

const productIncludeDefault = {
    brand: true,
    variants: {
        include: {
            variantImages: true,
        },
    },
    productImages: true,
} satisfies Prisma.ProductInclude;

const identifierWhere = (
    identifier: string,
): Prisma.ProductWhereInput => ({
    OR: [{ id: identifier }, { slug: identifier }],
});

export const parseBooleanParam = (value: string | boolean | undefined) => {
    if (typeof value === "boolean") return value;
    if (value === "true") return true;
    if (value === "false") return false;
    return undefined;
};

const buildProductFilterConditions = (
    params: IProductFilterRequest,
    options: { publishedOnly?: boolean },
) => {
    const { searchTerm, ...filterData } = params;
    const andConditions: Prisma.ProductWhereInput[] = [];
    console.log(searchTerm);

    if (searchTerm) {
        andConditions.push({
            OR: productSearchableFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: "insensitive" as const,
                },
            })),
        });
    }
    

    if (filterData?.categoryId) {
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

    const published = parseBooleanParam(filterData.isPublished);
    if (published !== undefined) {
        andConditions.push({ isPublished: published });
    } else if (options.publishedOnly) {
        andConditions.push({ isPublished: true });
    }

    const featured = parseBooleanParam(filterData.isFeatured);
    if (featured !== undefined) {
        andConditions.push({ isFeatured: featured });
    }

    return andConditions;
};


export const productHelpers = {
    productIncludeDefault, identifierWhere, parseBooleanParam, buildProductFilterConditions
};