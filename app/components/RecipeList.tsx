import React from "react";
import { Recipe } from "./Recipe";

interface RecipeListProps {
  recipes: Recipe[];
}

export const RecipeList = ({ recipes }: RecipeListProps) => {
  return (
    <div className="flex flex-col items-center min-w-full">
      <h1 className="font-semibold text-3xl mt-6">You can make:</h1>
      <ul>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};
