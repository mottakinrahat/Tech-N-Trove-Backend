export type IProductFilterRequest = {
  searchTerm?: string;
  categoryId?: string;
  category?: string;
  brandId?: string;
  brand?: string;
  variants?: any;
  isPublished?: string | boolean;
  isFeatured?: string | boolean;
  minPrice?: string | number;
  maxPrice?: string | number;
};
