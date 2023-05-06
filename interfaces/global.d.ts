interface Ingredient  {
  id:  string;
  name: string;
  amount: number;
}

interface Recipe {
  id: number;
  title: string;
  usedIngredients: Ingredient[];
  missedIngredients: Ingredient[];
}