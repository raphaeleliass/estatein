import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const urbanist = Urbanist({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Estatein",
  description: "Discover your dream property with Estatein.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${urbanist.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
