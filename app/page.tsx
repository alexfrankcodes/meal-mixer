import { Pacifico } from "next/font/google";
import { IngredientList } from "./components/IngredientList";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <h1
        className={`${pacifico.className} text-7xl pt-20 pb-10 w-full flex justify-center`}
      >
        Meal Mixer
      </h1>
      <IngredientList />
      <footer className="text-center text-gray-50 pt-10">
        <div className="flex justify-center">
          <hr className="border-gray-50 w-80 " />
        </div>
        <p className="p-4 letter">&copy; 2023 Alex Frank</p>
      </footer>
    </main>
  );
}
