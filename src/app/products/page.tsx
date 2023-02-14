"use client";

import Layout from "@/components/Layout/Layout";
import Table from "@/components/Table/Table";
import Pagination from "@/components/Pagination/Pagination";
import useSWRMutation from "swr/mutation";
import { fetcher } from "@/utils/api";
import { useEffect, KeyboardEvent, useMemo } from "react";
import SpinOverlay from "@/components/SpinOverlay/SpinOverlay";
import Input from "@/components/Input/Input";
import Select from "@/components/Select/Select";
import useLocalStorage from "@/hooks/useLocalStorage";
import BarChart from "@/components/BarChart/BarChart";
import { getProductBrandCount } from "./helper";
import type { ProductList } from "@/types/product";

export type Filter = {
  [key: string]: string;
};

const columns = [
  { name: "Name", key: "title" },
  { name: "Brand", key: "brand" },
  { name: "Category", key: "category" },
  { name: "Price", key: "price" },
  { name: "Stock", key: "stock" },
];

const journeys = [
  { name: "Home", href: "/" },
  { name: "Products", href: "" },
];

export default function ProductList() {
  const [filter, setFilter] = useLocalStorage("productListFilter", {
    limit: 10,
    skip: 0,
    q: "",
  });

  const { data, isMutating, trigger } = useSWRMutation<ProductList>(
    "/products/search",
    fetcher
  );
  const {
    data: categoriesData,
    isMutating: categoriesIsMutating,
    trigger: categoriesTrigger,
  } = useSWRMutation("/products/categories", fetcher);

  const productsDataSource = useMemo(() => {
    if (!data?.products) return [];
    return data.products.map(({ title, brand, category, price, stock }) => ({
      title,
      brand,
      category,
      price,
      stock,
    }));
  }, [data]);

  const categoriesOptions = useMemo(() => {
    if (!categoriesData) return [];
    return categoriesData.map((data: string) => ({ key: data, value: data }));
  }, [categoriesData]);

  const brandStats = useMemo(() => {
    if (!data?.products) return [];
    const counts = getProductBrandCount(data.products);
    return Object.entries(counts).map((item) => ({
      name: item[0],
      value: item[1],
    }));
  }, [data]);

  useEffect(() => {
    trigger && trigger({ params: filter });
  }, [trigger, filter]);

  useEffect(() => {
    categoriesTrigger && categoriesTrigger();
  }, [categoriesTrigger]);

  const handlePageChange = (val: number) => {
    setFilter({ ...filter, skip: filter.limit * (val - 1) });
  };

  const handleFilter = (val: Filter) => {
    setFilter({ ...filter, ...val, skip: 0 });
  };

  const handlePressEnter = (
    e: KeyboardEvent<HTMLInputElement>,
    filterKey: string | symbol
  ) => {
    e.key === "Enter" &&
      handleFilter({ [filterKey]: (e.target as HTMLInputElement).value });
  };

  return (
    <Layout navActive="products" journeys={journeys}>
      <main>
        {isMutating && <SpinOverlay />}
        <h1 className="my-8 text-2xl font-bold sm:text-4xl">Product List</h1>
        {data && (
          <>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
              <Input
                defaultValue={filter?.q}
                placeholder="Search Products"
                type="search"
                onKeyUp={(e) => handlePressEnter(e, "q")}
              />
              <Input
                defaultValue={filter?.brand}
                placeholder="Search Brand"
                type="search"
                onKeyUp={(e) => handlePressEnter(e, "brand")}
              />
              <Select
                defaultValue={filter?.category}
                loading={categoriesIsMutating}
                options={[
                  { key: "All Category", value: "" },
                  ...categoriesOptions,
                ]}
                onChange={(e) => handleFilter({ category: e.target.value })}
              />
              <Input
                defaultValue={filter?.minPrice}
                placeholder="Min Price"
                type="number"
                onKeyUp={(e) => handlePressEnter(e, "minPrice")}
              />
              <Input
                defaultValue={filter?.maxPrice}
                placeholder="Max Price"
                type="number"
                onKeyUp={(e) => handlePressEnter(e, "maxPrice")}
              />
            </div>

            <Table
              className="my-4"
              columns={columns}
              dataSource={productsDataSource}
            />
            <Pagination
              page={data?.skip / data?.limit + 1}
              size={data?.limit}
              total={data?.total}
              handleChange={handlePageChange}
              className="mx-auto mt-8 w-fit"
            />
            <BarChart
              title="Brand Statistics"
              data={brandStats}
              className="mt-20"
            />
          </>
        )}
      </main>
    </Layout>
  );
}
