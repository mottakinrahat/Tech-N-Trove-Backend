export type IProductFilterRequest = {
  searchTerm?: string;
  categoryId?: string;
  brandId?: string;
  isPublished?: string | boolean;
  isFeatured?: string | boolean;
};
