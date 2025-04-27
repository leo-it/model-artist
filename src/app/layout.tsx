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
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-b from-[#0f0a1a] via-[#1a1029] to-[#2a1f3d] font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
