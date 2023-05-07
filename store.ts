import { create } from "zustand";
import { getRecipesFromIngredients } from "./utils/api";

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
    try {
      const recipes = await getRecipesFromIngredients(ingredients);
      set({ recipes, recipeListVisible: true });
    } catch (error) {
      set({ recipes: [], recipeListVisible: true });
    }
  },
}));

export default useStore;
