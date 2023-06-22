import React from "react";

type ButtonProps = {
  onClick?: () => void | Promise<void>;
  text: string;
};

export const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <div>
      <button
        className="p-3 my-3 w-72 sm:w-96 drop-shadow-md rounded-md"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
