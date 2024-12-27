"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";

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

  revalidatePath("/products/newProducts");

  return product;
};

export const getProducts = async () => {
  const products = await prisma.product.findMany({});

  return products;
};
