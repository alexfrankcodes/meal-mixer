import { v4 as uuidv4 } from "uuid";

export const formatData = (data: any) =>
  data.map((recipe: Recipe) => {
    return {
      id: recipe.id,
      title: capitalize(recipe.title),
      usedIngredients: recipe.usedIngredients.map((ingredient) => {
        return {
          id: ingredient.id.toString(),
          name: capitalize(ingredient.name),
        };
      }),
      missedIngredients: recipe.missedIngredients.map((ingredient) => {
        return {
          id: ingredient.id.toString(),
          name: capitalize(ingredient.name),
        };
      }),
    };
  });

const capitalize = (str: string) =>
  str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

export const createIngredient = (store: Store): Ingredient | undefined => {
  const ingredientNameTrimmed: string = store.ingredientName.trim();
  if (!ingredientNameTrimmed) {
    return;
  }

  const newIngredient = {
    id: uuidv4(),
    name: ingredientNameTrimmed,
  };

  store.addIngredient(newIngredient);
  store.resetIngredientForm();
};
