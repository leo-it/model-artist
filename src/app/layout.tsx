import "./globals.css";

import Header from "@/components/Header";
import { Inter } from 'next/font/google'
import type { Metadata } from "next";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Model Art",
  description: "Portfolio de arte y moda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gradient-to-b from-[#0f0a1a] via-[#1a1029] to-[#2a1f3d] min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
