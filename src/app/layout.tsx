import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
