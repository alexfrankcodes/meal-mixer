// IngredientForm.tsx
import { Button } from "./Button";
import useStore from "../../store";
import { createIngredient } from "@/utils/formatData";

export const IngredientForm = () => {
  const store = useStore();

  const handleIngredientChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    store.setIngredientName(event.target.value);
  };

  const handleSubmit = () => {
    createIngredient(store);
  };

  return (
    <div className="flex flex-col w-72  sm:w-96 text-gray-700">
      <div className="flex flex-row drop-shadow-md my-3">
        <label htmlFor="ingredientName" className="sr-only">
          Ingredient Name
        </label>
        <input
          ref={(input) => input && input.focus()}
          id="ingredientName"
          className="p-3 focus:outline-none w-full border-r-2"
          type="text"
          placeholder="Enter ingredient..."
          value={store.ingredientName}
          onChange={handleIngredientChange}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              handleSubmit();
            }
          }}
        />
      </div>
      <Button text="Add Ingredient" onClick={handleSubmit} />
    </div>
  );
};
