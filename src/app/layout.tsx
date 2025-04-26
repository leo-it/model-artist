import "./globals.css";

import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Model Art",
  description: "Fotografía y Arte",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
