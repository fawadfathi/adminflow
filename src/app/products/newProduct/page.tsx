"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";
import { ProductForm } from "@/components/form";

import { DashboardTable } from "@/components/table";

const prisma = new PrismaClient();

interface ValuesProps {
  name: string;
  description: string;
  category: string;
  price: number;
}

export const createProduct = async (values: ValuesProps) => {
  const product = await prisma.product.create({
    data: {
      name: values.name,
      description: values.category,
      category: values.description,
      price: values.price,
    },
  });

  revalidatePath("/products/new");

  return product;
};

const getProducts = async () => {
  const products = await prisma.product.findMany({});

  return products;
};

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
