import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes";
const BASE_PARAMS = `?apiKey=${API_KEY}&number=2&ignorePantry=true`;

const URL = `${BASE_URL}/findByIngredients${BASE_PARAMS}`;

export const getRecipesFromIngredients = async (
  ingredients: string
): Promise<Recipe[]> => {
  const { data } = await axios.get(URL + `&ingredients=${ingredients}`);

  const formattedData = data.map((recipe: Recipe) => {
    return {
      id: recipe.id,
      title: recipe.title,
      usedIngredients: recipe.usedIngredients.map((ingredient) => {
        return {
          id: ingredient.id.toString(),
          name: ingredient.name,
        };
      }),
      missedIngredients: recipe.missedIngredients.map((ingredient) => {
        return {
          id: ingredient.id.toString(),
          name: ingredient.name,
        };
      }),
    };
  });

  return formattedData;
};
