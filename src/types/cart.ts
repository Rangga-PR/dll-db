import type { CartProduct } from "./product";

export type Cart = {
  id: number;
  products: CartProduct[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export type CartList = {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
};
