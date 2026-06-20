"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationHelpers = void 0;
const calculatePagination = (options) => {
    const page = Number(options.page) || 1;
    const limit = Number(options.limit) || 10;
    const skip = Number((page - 1) * limit);
    const sortBy = options.sortBy || "createdAt";
    const sortOrder = (options === null || options === void 0 ? void 0 : options.sortOrder) === "desc" ? "desc" : "asc";
    return {
        page,
        limit,
        skip,
        sortBy,
        sortOrder,
    };
};
exports.paginationHelpers = { calculatePagination };
