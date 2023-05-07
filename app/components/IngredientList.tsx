"use client";

import { Ingredient } from "./Ingredient";
import { Button } from "./Button";
import { IngredientForm } from "./IngredientForm";

import useStore from "../../store";
import { createIngredient } from "@/utils/formatData";

export const IngredientList = () => {
  const store = useStore();

  const handleSubmit = () => {
    createIngredient(store);
    store.fetchRecipes();
  };

  return (
    <div className="mt-1{0 flex flex-col w-full items-center">
      {store.ingredients.map((ingredient, index) => (
        <Ingredient key={index} ingredient={ingredient} />
      ))}

      <IngredientForm />

      <Button text="Mix It!" onClick={handleSubmit} />
    </div>
  );
};
