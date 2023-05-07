import axios from "axios";
import { formatData } from "./formatData";

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes";
const BASE_PARAMS = `&number=5&fillIngredients=true&sort=meta-score`;

const URL = `${BASE_URL}/complexSearch?apiKey=${API_KEY}`;

export const getRecipesFromIngredients = async (
  ingredients: string
): Promise<Recipe[]> => {
  if (!ingredients) return Promise.resolve([]);
  const { data } = await axios.get(
    URL + `&includeIngredients=${ingredients} + ${BASE_PARAMS}`
  );
  return formatData(data.results);
};
