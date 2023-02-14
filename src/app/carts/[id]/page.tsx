"use client";

import Layout from "@/components/Layout/Layout";
import Table from "@/components/Table/Table";
import useSWRMutation from "swr/mutation";
import { fetcher } from "@/utils/api";
import { useEffect } from "react";
import SpinOverlay from "@/components/SpinOverlay/SpinOverlay";
import InfoCard from "@/components/InfoCard/InfoCard";

const columns = [
  { name: "ID", key: "id" },
  { name: "Name", key: "title" },
  { name: "Price", key: "price" },
  { name: "Quantity", key: "quantity" },
  { name: "Total Price", key: "total" },
  { name: "Discount", key: "discountPercentage" },
  { name: "Final Price", key: "discountedPrice" },
];

const journeys = [
  { name: "Home", href: "/" },
  { name: "Carts", href: "/carts" },
  { name: "Cart Detail", href: "" },
];

export default function CartDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data, isMutating, trigger } = useSWRMutation(`/carts/${id}`, fetcher);

  useEffect(() => {
    trigger && trigger();
  }, [trigger]);

  return (
    <Layout navActive="carts" journeys={journeys}>
      <main>
        {isMutating && <SpinOverlay />}
        <h1 className="my-8 text-2xl font-bold sm:text-4xl">{`Cart Detail #${id}`}</h1>
        {data && (
          <>
            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-5">
              <InfoCard title="User ID" value={data.userId} />
              <InfoCard title="Total Product" value={data.totalProducts} />
              <InfoCard title="Total Quantity" value={data.totalQuantity} />
              <InfoCard title="Total Price" value={data.total} />
              <InfoCard title="Final Price" value={data.discountedTotal} />
            </div>
            <Table
              className="my-4"
              columns={columns}
              dataSource={data?.products || []}
            />
          </>
        )}
      </main>
    </Layout>
  );
}
