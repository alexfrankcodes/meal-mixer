"use client";

import { useState } from "react";
import { Ingredient } from "./Ingredient";
import { Button } from "./Button";
import { IngredientForm } from "./IngredientForm";

const testIngredients = [
  { name: "Chicken", amount: 1 },
  { name: "Rice", amount: 2 },
  { name: "Broccoli", amount: 3 },
  { name: "Soy Sauce", amount: 4 },
];

export const IngredientList = () => {
  const [ingredients, setIngredients] = useState(testIngredients);

  const addIngredient = () => {
    setIngredients([...ingredients]);
  };

  return (
    <div className="mt-1{0 flex flex-col w-full items-center">
      {ingredients.map(({ name, amount = 1 }) => (
        <Ingredient key={name} name={name} amount={amount} />
      ))}

      <IngredientForm />

      <Button text="Add Ingredient" onClick={addIngredient} />
      <Button text="Mix It!" />
    </div>
  );
};
