export type IProductFilterRequest = {
  searchTerm?: string;
  categoryId?: string;
  category?: string;
  brandId?: string;
  brand?: string;
  isPublished?: string | boolean;
  isFeatured?: string | boolean;
};
