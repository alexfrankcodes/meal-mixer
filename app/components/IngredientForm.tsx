import React from "react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export const IngredientForm = () => {
  return (
    <div className="flex flex-col w-96 text-gray-700 m-3">
      <div className="flex flex-row drop-shadow-md">
        <input
          className="p-3 focus:outline-none  w-3/4 border-r-2"
          type="text"
          placeholder="Enter ingredient..."
        />
        <input
          className="p-3 focus:outline-none w-1/4 text-center "
          type="number"
          placeholder="1"
          min={1}
        />
      </div>
    </div>
  );
};
