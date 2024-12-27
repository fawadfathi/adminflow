"use server";

import { revalidatePath } from "next/cache";
import db from "./db";

export const deleteProduct = async (productId: number) => {
  const product = await db.product.delete({
    where: {
      id: productId,
    },
  });

  revalidatePath("products/newProduct");
  return product;
};
