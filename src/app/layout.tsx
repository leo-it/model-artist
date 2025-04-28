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
      <body className={`${inter.className} relative min-h-screen`}>
        <div className="fixed inset-0 bg-gradient-to-b from-[#0f0a1a] via-[#1a1029] to-[#2a1f3d] bg-[length:100%_200%] bg-[position:0%_0%] hover:bg-[position:0%_100%] transition-all duration-1000 -z-10" />
        <Header />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
