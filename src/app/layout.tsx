import type { Metadata } from "next";
import CustomSidebar from "@/components/custom-sidebar";

import "./globals.css";

export const metadata: Metadata = {
  title: "AdminFlow",
  description:
    "AdminFlow Dashboard is a sleek, responsive admin panel for managing workflows, visualizing data, and optimizing operations with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <div className="md:w-64 lg:w-64 bg-gray-100">
            <CustomSidebar />
          </div>

          <div className="flex-1 overflow-y-auto ">
            <div className="w-full max-w-6xl px-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
