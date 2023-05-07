interface Ingredient {
  id: string;
  name: string;
}

interface Recipe {
  id: number;
  title: string;
  usedIngredients: Ingredient[];
  missedIngredients: Ingredient[];
}

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
