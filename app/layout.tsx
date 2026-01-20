import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyCPO for WooCommerce - Advanced Payment Gateway Plugin",
  description: "The most advanced payment gateway for WooCommerce. Accept credit cards, debit cards, and ACH payments with fast payouts, fraud prevention, and seamless checkout. Process refunds, save payment methods, and manage transactions directly from WooCommerce.",
  keywords: ["WooCommerce", "payment gateway", "MyCPO", "credit card processing", "ACH payments", "WooCommerce plugin", "payment integration", "ecommerce payments"],
  authors: [{ name: "MyCPO" }],
  openGraph: {
    title: "MyCPO for WooCommerce - Advanced Payment Gateway",
    description: "The most advanced payment gateway for WooCommerce. Fast payouts, fraud prevention, and seamless checkout in minutes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyCPO for WooCommerce - Advanced Payment Gateway",
    description: "The most advanced payment gateway for WooCommerce. Fast payouts, fraud prevention, and seamless checkout.",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
