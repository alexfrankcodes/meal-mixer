import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export interface IngredientProps {
  name: String;
  amount?: Number;
}

export const Ingredient = ({ name, amount = 1 }: IngredientProps) => {
  return (
    <div className="flex m-3 w-96 flex flex-row justify-between drop-shadow-md">
      <div className="bg-white text-black h-15 w-full flex flex-row justify-between">
        <p className="flex items-center pl-6 ">{name}</p>
        <p className="flex items-center pr-6">{amount}</p>
      </div>

      <button className="bg-red-500 p-4 hover:bg-red-600">
        <FaTrashAlt />
      </button>
    </div>
  );
};
