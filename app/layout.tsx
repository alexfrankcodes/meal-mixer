import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meal Mixer",
  description: "A website to help you cook some delicious meals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen flex flex-col justify-between">
      <body className={`${inter.className}`}>{children}</body>
      <footer className="text-center text-gray-50">
        <div>
          <hr className="w-80 inline-block" />
        </div>
        <p className="p-4 font-medium from-neutral-50">
          &copy; 2023 Alex Frank
        </p>
      </footer>
    </html>
  );
}
