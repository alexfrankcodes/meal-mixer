"use client";

import { useEffect, useState } from "react";
import { Pacifico } from "next/font/google";
import { IngredientList } from "./components/IngredientList";
import { RecipeList } from "./components/RecipeList";
import { testRecipes } from "./data/test";
import { getRecipesFromIngredients } from "../utils/api";
import React from "react";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [apiTestData, setApiTestData] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchData() {
      const recipes = await getRecipesFromIngredients(
        "chicken, rice, broccoli"
      );
      setApiTestData(recipes);
    }
    fetchData();
  }, []);

  return (
    <main>
      <h1
        className={`${pacifico.className} text-7xl pt-20 pb-10 w-full flex justify-center`}
      >
        Meal Mixer
      </h1>
      <IngredientList />
      <RecipeList recipes={apiTestData} />
      <footer className="text-center text-gray-50 pt-10">
        <div className="flex justify-center">
          <hr className="border-gray-50 w-80 " />
        </div>
        <p className="p-4 letter">&copy; 2023 Alex Frank</p>
      </footer>
    </main>
  );
}
