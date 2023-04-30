"use client";

import { useState } from "react";
import { Ingredient } from "./Ingredient";
import { Button } from "./Button";
import { IngredientForm } from "./IngredientForm";

//todo: remove test data
// const testIngredients = [
//   { name: "Chicken", amount: 1 },
//   { name: "Rice", amount: 2 },
//   { name: "Broccoli", amount: 3 },
//   { name: "Soy Sauce", amount: 4 },
// ];

export const IngredientList = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const addIngredient = (ingredient: Ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const deleteIngredient = (index: Number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-1{0 flex flex-col w-full items-center">
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          onDelete={() => deleteIngredient(index)}
        />
      ))}

      <IngredientForm addIngredient={addIngredient} />

      <Button text="Mix It!" />
    </div>
  );
};
