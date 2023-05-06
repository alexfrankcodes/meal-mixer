import { Pacifico } from "next/font/google";
import { IngredientList } from "./components/IngredientList";
import { RecipeList } from "./components/RecipeList";

import React from "react";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <div>
        <h1
          className={`${pacifico.className} text-7xl pt-20 pb-10 w-full flex justify-center`}
        >
          Meal Mixer
        </h1>
        <IngredientList />
        <RecipeList />
      </div>
      <footer className="text-center text-black">
        <div className="flex justify-center">
          <hr className="border-black w-80 " />
        </div>
        <p className="p-2 letter text-xs">&copy; 2023 Alex Frank</p>
      </footer>
    </main>
  );
}
