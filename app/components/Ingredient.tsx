import React from "react";
import { FaTrashAlt } from "react-icons/fa";

type IngredientProps = {
  ingredient: Ingredient;
  onDelete?: () => void;
};

export const Ingredient = ({
  ingredient: { name, amount },
  onDelete,
}: IngredientProps) => {
  return (
    <div className="flex m-3 w-96 flex flex-row justify-between drop-shadow-md">
      <div className="bg-white text-black h-15 w-full flex flex-row justify-between">
        <p className="flex items-center pl-6 ">{name}</p>
        <p className="flex items-center pr-6">{amount}</p>
      </div>

      <button className="bg-red-500 p-4 hover:bg-red-600" onClick={onDelete}>
        <FaTrashAlt />
      </button>
    </div>
  );
};
