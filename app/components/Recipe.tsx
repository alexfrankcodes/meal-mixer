import Link from "next/link";
import React from "react";
import { Button } from "./Button";

interface RecipeProps {
  recipe: Recipe;
}

export const Recipe = ({
  recipe: { title, usedIngredients, missedIngredients },
}: RecipeProps) => {
  return (
    <div className="flex flex-col  w-full max-w-xl mx-auto sm:my-4 shadow-md sm:rounded overflow-hidden h-104">
      <div className="bg-gradient-to-b from-green-400 to-green-500 p-4 flex-shrink-0">
        <h2 className="text-white font-bold text-xl cursor-default">{title}</h2>
      </div>
      <div className="flex bg-white flex-grow">
        <div className="w-1/2 p-3 text-gray-900 pr-3 max-h-40 overflow-y-scroll">
          <h3 className="font-semibold mb-2">This recipe uses:</h3>
          <ul className="list-decimal pl-5 space-y-1">
            {usedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 text-gray-900 p-3 pr-3 max-h-40 overflow-y-scroll">
          <h3 className="font-semibold mb-2">You&apos;ll also need:</h3>
          <ul className="list-decimal pl-5 space-y-1">
            {missedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="bg-white border-t p-2 text-center flex-shrink-0">
        <Link href="">
          <Button text="See Full Recipe" />
        </Link>
      </div> */}
    </div>
  );
};
