import Image from "next/image";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <h1 className={`${pacifico.className} text-7xl pt-20`}>Meal Mixer</h1>
    </main>
  );
}
