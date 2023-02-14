"use client";

import Layout from "@/components/Layout/Layout";
import Pagination from "@/components/Pagination/Pagination";
import Table from "@/components/Table/Table";
import useSWRMutation from "swr/mutation";
import { fetcher } from "@/utils/api";
import { useEffect, useMemo } from "react";
import SpinOverlay from "@/components/SpinOverlay/SpinOverlay";
import { useRouter } from "next/navigation";
import type { CartList } from "@/types/cart";

const columns = [
  { name: "ID", key: "id" },
  { name: "User ID", key: "userId" },
  { name: "Total", key: "total" },
  { name: "Total Product", key: "totalProducts" },
  { name: "Total Quantity", key: "totalQuantity" },
];

const journeys = [
  { name: "Home", href: "/" },
  { name: "Carts", href: "" },
];

export default function CartList() {
  const router = useRouter();
  const { data, isMutating, trigger } = useSWRMutation<CartList>(
    "/carts",
    fetcher
  );

  const cartsDataSource = useMemo(() => {
    if (!data?.carts) return [];
    return data.carts.map(
      ({ id, userId, total, totalProducts, totalQuantity }) => ({
        id,
        userId,
        total,
        totalProducts,
        totalQuantity,
      })
    );
  }, [data]);

  useEffect(() => {
    trigger && trigger({ params: { limit: 10, skip: 0 } });
  }, [trigger]);

  const handlePageChange = (val: number) => {
    const limit = data?.limit || 0;
    trigger({ params: { limit, skip: limit * (val - 1) } });
  };

  return (
    <Layout navActive="carts" journeys={journeys}>
      <main>
        {isMutating && <SpinOverlay />}
        <h1 className="my-8 text-2xl font-bold sm:text-4xl">Cart List</h1>
        {data && (
          <>
            <Table
              className="my-4"
              columns={columns}
              dataSource={cartsDataSource}
              handleClick={(val) => router.push(`/carts/${val.id}`)}
            />
            <Pagination
              page={data?.skip / data?.limit + 1}
              size={data?.limit}
              total={data?.total}
              handleChange={handlePageChange}
              className="mx-auto mt-8 w-fit"
            />
          </>
        )}
      </main>
    </Layout>
  );
}
