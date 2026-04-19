export type IProductFilterRequest = {
  searchTerm?: string;
  categoryId?: string;
  brand?: string;
  isPublished?: string | boolean;
  isFeatured?: string | boolean;
};
