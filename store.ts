import { create } from "zustand";
import { getRecipesFromIngredients } from "./utils/api";

interface Store {
  recipes: Recipe[];
  setRecipes: (recipes: Recipe[]) => void;
  recipeListVisible: boolean;
  makeRecipeListVisible: () => void;
  ingredientName: string;
  ingredientAmount: number;
  setIngredientName: (name: string) => void;
  setIngredientAmount: (amount: number) => void;
  resetIngredientForm: () => void;
  ingredients: Ingredient[];
  addIngredient: (ingredient: Ingredient) => void;
  deleteIngredient: (id: string) => void;
  fetchRecipes: () => Promise<void>;
}

const useStore = create<Store>((set, get) => ({
  recipes: [],

  setRecipes: (recipes) => set({ recipes }),

  recipeListVisible: false,

  makeRecipeListVisible: () => set({ recipeListVisible: true }),

  ingredientName: "",

  ingredientAmount: 1,

  setIngredientName: (name) => set({ ingredientName: name }),

  setIngredientAmount: (amount) => set({ ingredientAmount: amount }),

  resetIngredientForm: () => set({ ingredientName: "", ingredientAmount: 1 }),

  ingredients: [],

  addIngredient: (ingredient) =>
    set((state) => ({ ingredients: [...state.ingredients, ingredient] })),

  deleteIngredient: (id) =>
    set((state) => ({
      ingredients: state.ingredients.filter(
        (ingredient) => ingredient.id !== id
      ),
    })),

  fetchRecipes: async () => {
    const ingredients = get()
      .ingredients.map((ingredient) => ingredient.name)
      .join(", ");
    const recipes = await getRecipesFromIngredients(ingredients);
    set({ recipes, recipeListVisible: true });
  },
}));

export default useStore;
