type IOptions = {
  page?: number;
  limit?: number;
  sortOrder?: string;
  sortBy?: string;
}
type IOptionsReturn = {
  page?: number;
  limit?: number;
  sortOrder?: string;
  skip: number;
  sortBy?: string;
}
const calculatePagination = (options: IOptions): IOptionsReturn => {
  const page: number = Number(options.page) || 1;
  const limit: number = Number(options.limit) || 10;
  const skip: number = Number((page - 1) * limit);
  const sortBy = options.sortBy || "createdAt";
  const sortOrder: string = options?.sortOrder === "desc" ? "desc" : "asc";
  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};
export const paginationHelpers = { calculatePagination };
