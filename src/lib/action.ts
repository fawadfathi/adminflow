"use server";

import { SignupFormSchema, FormState } from "@/lib/definitions";
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

export async function logIn(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  const datas = await db.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });

  const user = datas.name;

  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }
}
