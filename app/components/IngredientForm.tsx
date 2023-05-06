import { useState } from "react";
import { Button } from "./Button";
import { v4 as uuidv4 } from "uuid";

import useStore from "../../store";

export const IngredientForm = () => {
  const store = useStore();

  const [ingredientName, setIngredientName] = useState("");
  const [ingredientAmount, setIngredientAmount] = useState(1);

  const handleIngredientChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIngredientName(event.target.value);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIngredientAmount(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    const ingredientNameTrimmed: string = ingredientName.trim();
    if (!ingredientNameTrimmed) {
      return;
    }

    const newIngredient = {
      id: uuidv4(),
      name: ingredientNameTrimmed,
      amount: ingredientAmount,
    };

    store.addIngredient(newIngredient);
    setIngredientName("");
    setIngredientAmount(1);
  };

  return (
    <div className="flex flex-col w-96 text-gray-700">
      <div className="flex flex-row drop-shadow-md my-3">
        <label htmlFor="ingredientName" className="sr-only">
          Ingredient Name
        </label>
        <input
          id="ingredientName"
          className="p-3 focus:outline-none w-3/4 border-r-2"
          type="text"
          placeholder="Enter ingredient..."
          value={ingredientName}
          onChange={handleIngredientChange}
        />
        <label htmlFor="ingredientAmount" className="sr-only">
          Ingredient Amount
        </label>
        <input
          id="ingredientAmount"
          className="p-3 focus:outline-none w-1/4 text-center"
          type="number"
          placeholder="1"
          min={1}
          value={ingredientAmount}
          onChange={handleAmountChange}
        />
      </div>
      <Button text="Add Ingredient" onClick={handleSubmit} />
    </div>
  );
};
