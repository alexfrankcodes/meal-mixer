import React from "react";
import { Ingredient } from "./Ingredient";
import { Button } from "./Button";

export const IngredientList = () => {
  return (
    <div className="mt-10 flex flex-col w-full items-center">
      <Ingredient />
      <Ingredient />
      <Ingredient />
      <Button />
    </div>
  );
};
