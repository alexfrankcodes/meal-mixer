import React from "react";
import useStore from "../../store";
import { FaTrashAlt } from "react-icons/fa";

type IngredientProps = {
  ingredient: Ingredient;
};

export const Ingredient = ({ ingredient: { id, name } }: IngredientProps) => {
  const store = useStore();

  return (
    <div className="flex m-3 w-96 flex flex-row justify-between drop-shadow-md">
      <div className="bg-white text-black h-15 w-full flex flex-row justify-between">
        <p className="flex items-center pl-6 ">{name}</p>
      </div>

      <button
        className="bg-red-500 p-4 hover:bg-red-600"
        onClick={() => store.deleteIngredient(id)}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};
