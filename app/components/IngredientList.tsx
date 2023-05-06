"use client";

import { Ingredient } from "./Ingredient";
import { Button } from "./Button";
import { IngredientForm } from "./IngredientForm";

import useStore from "../../store";

export const IngredientList = () => {
  const store = useStore();

  return (
    <div className="mt-1{0 flex flex-col w-full items-center">
      {store.ingredients.map((ingredient, index) => (
        <Ingredient key={index} ingredient={ingredient} />
      ))}

      <IngredientForm />

      <Button text="Mix It!" onClick={store.fetchRecipes} />
    </div>
  );
};
