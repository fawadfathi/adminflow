import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DashboardTable } from "@/components/table";
import { getProducts } from "@/lib/products";
import type { Metadata } from "next";
import Loading from "@/app/(admin)/loading";

export const metaData: Metadata = {
  title: "User Products - AminFlow",
  authors: [{ name: "AdminFlow" }],
  description:
    "Manage your product inventory with ease. Add new products, save them to the database, and delete existing ones directly from the dashboard.",
};

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You Can Add Products
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start selling as soon as you add a product.
          </p>
          <Button className="mt-4 mb-3 bg-violet-600 hover:bg-violet-500">
            <Link href="/products/newProduct">+ Add Product</Link>
          </Button>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        <DashboardTable product={products} />
      </Suspense>
    </div>
  );
}
