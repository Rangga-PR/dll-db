import type { Product } from "@/types/product";

export type BrandCount = Record<string, number>;

export const getProductBrandCount = (products: Product[]): BrandCount => {
  const brandCount: BrandCount = {};

  products.forEach((product) => {
    const brand = product.brand;
    brandCount[brand] = brand in brandCount ? ++brandCount[brand] : 1;
  });

  return brandCount;
};
