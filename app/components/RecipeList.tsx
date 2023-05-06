import React from "react";
import { Recipe } from "./Recipe";
import useStore from "../../store";

interface RecipeListProps {
  recipes: Recipe[];
}

export const RecipeList = ({ recipes }: RecipeListProps) => {
  const store = useStore();

  return (
    <div
      className={` ${
        store.recipeListVisible ? "" : "invisible"
      } flex flex-col items-center min-w-full`}
    >
      <h1 className="font-semibold text-3xl mt-6">You can make:</h1>
      <ul>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};
