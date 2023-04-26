"use client";

import { useState } from "react";
import { Ingredient } from "./Ingredient";
import { Button } from "./Button";
import { IngredientForm } from "./IngredientForm";

export const IngredientList = () => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = () => {
    setIngredients([...ingredients]);
  };

  return (
    <div className="mt-10 flex flex-col w-full items-center">
      <Ingredient name="Chicken" />
      <Ingredient name="Rice" />
      <Ingredient name="Broccoli" amount={3} />

      <IngredientForm />

      <Button text="Add Ingredient" onClick={addIngredient} />
      <Button text="Mix It!" />
    </div>
  );
};
