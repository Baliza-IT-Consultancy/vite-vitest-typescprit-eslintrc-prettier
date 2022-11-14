export type IProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type IInitialProductState = {
  total: number;
  skip: number;
  limit: number;
  products?: Array<IProduct>;
  loading?: boolean;
  error: unknown;
  selectedProduct?: IProduct;
};
