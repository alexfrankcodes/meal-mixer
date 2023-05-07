import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meal Mixer",
  description: "A website to help you cook some delicious meals.",
  authors: [{ name: "Alex Frank", url: "https://alexfrankcodes.com" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "Food & Drink",
  keywords: ["food", "recipes", "ingredients", "cooking", "meal", "mixer"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
