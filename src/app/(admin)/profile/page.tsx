import { Profile } from "@/components/pages/profile";
import type { Metadata } from "next";

export const metaData: Metadata = {
  title: "User Profile - AminFlow",
  authors: [{ name: "AdminFlow" }],
  description:
    "Discover the journey and vision of Osman, the founder of [AdminFlow]. Learn more about his role, achievements, and contributions to the company",
};

export default async function ProfileRoute() {
  return <Profile />;
}
