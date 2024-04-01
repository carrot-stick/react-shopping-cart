import DB from '../../db.json';

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export const PRODUCTS: Product[] = DB.products;
