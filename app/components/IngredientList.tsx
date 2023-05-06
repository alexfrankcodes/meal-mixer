import { Ingredient } from "./Ingredient";
import { Button } from "./Button";
import { IngredientForm } from "./IngredientForm";
import React from "react";
import useStore from "../../store";

//todo: remove test data
// const testIngredients = [
//   { name: "Chicken", amount: 1 },
//   { name: "Rice", amount: 2 },
//   { name: "Broccoli", amount: 3 },
//   { name: "Soy Sauce", amount: 4 },
// ];

export const IngredientList = () => {
  const store = useStore();

  return (
    <div className="mt-1{0 flex flex-col w-full items-center">
      {store.ingredients.map((ingredient, index) => (
        <Ingredient key={index} ingredient={ingredient} />
      ))}

      <IngredientForm />

      <Button text="Mix It!" onClick={store.toggleRecipeListVisibility} />
    </div>
  );
};
