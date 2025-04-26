import "./globals.css";

import Header from "@/components/Header";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

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
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
