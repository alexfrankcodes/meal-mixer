import { create } from "zustand";

interface Store {
    recipes: Recipe[];
    setRecipes: (recipes: Recipe[]) => void;
    recipeListVisible: boolean;
    toggleRecipeListVisibility: () => void;
    ingredients: Ingredient[];
    addIngredient: (ingredient: Ingredient) => void;
    deleteIngredient: (id: string) => void;
}

const useStore = create<Store>((set) => ({
    recipes: [],
    setRecipes: (recipes) => set((state) => ({ recipes })),
    recipeListVisible: false,
    toggleRecipeListVisibility: () =>
        set((state) => ({ recipeListVisible: true })),
    ingredients: [],
    addIngredient: (ingredient) =>
        set((state) => ({ ingredients: [...state.ingredients, ingredient] })),
    deleteIngredient: (id) =>
        set((state) => ({
            ingredients: state.ingredients.filter(
                (ingredient) => ingredient.id !== id
            ),
        })),
}));

export default useStore;
