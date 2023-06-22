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
    <main className="flex flex-col justify-around min-h-screen">
      <div className="flex flex-col align-middle h-fill">
        <h1
          className={`${pacifico.className} text-5xl sm:text-7xl pt-20 pb-10 flex text-center justify-center`}
        >
          Meal Mixer
        </h1>
        <IngredientList />
        <RecipeList />
        <footer className="absolute bottom-3 min-w-full text-center text-sm text-black">
          <a href="https://alexfrankcodes.com">
            &copy; Alexander Frank {new Date().getFullYear()}
          </a>
        </footer>
      </div>
    </main>
  );
}
