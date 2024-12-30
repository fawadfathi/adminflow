import { Dashboard } from "@/components/pages/dashboard";
import type { Metadata } from "next";

export const metaData: Metadata = {
  title: "User Dashboard - AdminFlow",
  authors: [{ name: "AdminFlow" }],
  description:
    "Get a comprehensive overview of your business performance with real-time metrics like Total Revenue, Subscriptions, Sales, Active Users, and a detailed Area Chart with stacked data visualization.",
};

export default async function DashboardRoute() {
  return <Dashboard />;
}
