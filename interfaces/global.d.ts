interface Ingredient  {
  id?: number;
  name: string;
  amount: number;
}

interface Recipe {
  id: number;
  image: string;
  title: string;
  missedIngredients: Ingredient[];
}