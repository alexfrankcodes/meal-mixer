"use client";

import React from "react";

type ButtonProps = {
  onClick?: () => void;
  text: string;
};

export const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <div>
      <button
        className="bg-gradient-to-b from-green-400 to-green-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 my-2 w-96 drop-shadow-md rounded-md"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
