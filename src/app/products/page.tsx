import Link from "next/link";
import { Button } from "@/components/ui/button";

const Products = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 ">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center py-5">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no products
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start selling as soon as you add a product.
          </p>
<<<<<<< HEAD
          <Button className="mt-4">
            <Link href="/products/new">Add Product</Link>
=======
          <Button className="mt-4 mb-3">
            <Link href="/products/newProduct">Add Product</Link>
>>>>>>> 03aeff421c44a5ca103797add6ba8101fb029721
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
