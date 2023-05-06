"use client";

import React from "react";
import { Recipe } from "./Recipe";
import useStore from "../../store";

export const RecipeList = () => {
  const store = useStore();

  return (
    <div
      className={` ${
        store.recipeListVisible ? "" : "invisible"
      } flex flex-col items-center min-w-full`}
    >
      <h1 className="font-semibold text-3xl mt-6">You can make:</h1>
      <ul>
        {store.recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};
