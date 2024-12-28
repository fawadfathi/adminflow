import { ProductForm } from "@/components/form";
import { DashboardTable } from "@/components/table";
import { getProducts } from "@/lib/products";

export default async function New() {
  const products = await getProducts();

  return (
    <div>
      <ProductForm
        categories={[
          { _id: "Electronics", name: "Electronics" },
          { _id: "Cameras & Optics", name: "Cameras & Optics" },
          {
            _id: "Food, Beverages & Tobacco",
            name: "Food, Beverages & Tobacco",
          },
          { _id: "Health & Beauty", name: "Health & Beauty" },
        ]}
        initialData={null}
        key={null}
      />
      <DashboardTable product={products} />
    </div>
  );
}
