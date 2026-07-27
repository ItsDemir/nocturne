import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import CartDrawer from "@/components/CartDrawer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "NOCTURNE — Day. Night. Obsidian.",
  description:
    "Hand-poured candles for men who treat stillness as a discipline. Meridian for day. Obsidian for night.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${cormorant.variable} ${inter.variable} antialiased bg-black`}>
        <CustomCursor />
        <Nav />
        <main className="pt-[89px]">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
