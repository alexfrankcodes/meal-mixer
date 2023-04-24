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
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col items-center justify-between`}
      >
        {children}
        <footer className="text-center">
          <div className="flex justify-center">
            <hr className="w-80" />
          </div>
          <p className="p-2">&copy; 2023 Alex Frank</p>
        </footer>
      </body>
    </html>
  );
}
