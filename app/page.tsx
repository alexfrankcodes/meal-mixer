import { Pacifico } from "next/font/google";
import { IngredientList } from "./components/IngredientList";
import { Button } from "./components/Button";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <h1
        className={`${pacifico.className} text-7xl pt-20 w-full flex justify-center`}
      >
        Meal Mixer
      </h1>
      <IngredientList />
    </main>
  );
}
