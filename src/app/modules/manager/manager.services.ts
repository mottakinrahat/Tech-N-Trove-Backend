import { Prisma, Manager, UserStatus } from "../../../../prisma/generated/prisma";
import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../interfaces/pagination";
import { IManagerFilterRequest, IManagerUpdate } from "./manager.interface";
import { managerSearchableFields } from "./manager.constants";
import { paginationHelpers } from "../../../helpers/paginationHelpers";

const getAllFromDB = async (
    filters: IManagerFilterRequest,
    options: IPaginationOptions,
) => {
    const { limit, page, skip } = paginationHelpers.calculatePagination(options);
    const { searchTerm, ...filterData } = filters;

    const andConditions: Prisma.ManagerWhereInput[] = [];

    if (searchTerm) {
        andConditions.push({
            OR: managerSearchableFields.map(field => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            })),
        });
    };

    if (Object.keys(filterData).length > 0) {
        const filterConditions = Object.keys(filterData).map(key => ({
            [key]: {
                equals: (filterData as any)[key],
            },
        }));
        andConditions.push(...filterConditions);
    }

    andConditions.push({
        isDeleted: false,
    });

    const whereConditions: Prisma.ManagerWhereInput =
        andConditions.length > 0 ? { AND: andConditions } : {};

    const result = await prisma.manager.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder
            ? { [options.sortBy]: options.sortOrder }
            : { updatedAt: 'desc' },
    });

    const total = await prisma.manager.count({
        where: whereConditions,
    });

    return {
        meta: {
            total,
            page,
            limit,
        },
        data: result,
    };
};

const getByIdFromDB = async (id: string): Promise<Manager | null> => {
    const result = await prisma.manager.findUnique({
        where: {
            id,
            isDeleted: false,
        },
    });
    return result;
};

const updateIntoDB = async (id: string, payload: IManagerUpdate) => {
    const result = await prisma.manager.update({
        where: {
            id
        },
        data: payload
    });

    return result;
};

const deleteFromDB = async (id: string): Promise<Manager> => {
    return await prisma.$transaction(async transactionClient => {
        const deleteManager = await transactionClient.manager.delete({
            where: {
                id,
            },
        });

        await transactionClient.user.delete({
            where: {
                email: deleteManager.email,
            },
        });

        return deleteManager;
    });
};

const softDelete = async (id: string): Promise<Manager> => {
    return await prisma.$transaction(async transactionClient => {
        const deleteManager = await transactionClient.manager.update({
            where: { id },
            data: {
                isDeleted: true,
            },
        });

        await transactionClient.user.update({
            where: {
                email: deleteManager.email,
            },
            data: {
                status: UserStatus.DELETED,
            },
        });

        return deleteManager;
    });
};



export const ManagerService = {
    updateIntoDB,
    getAllFromDB,
    getByIdFromDB,
    deleteFromDB,
    softDelete
}