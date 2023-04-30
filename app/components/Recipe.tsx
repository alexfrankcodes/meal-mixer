import Link from "next/link";

interface RecipeProps {
  recipe: Recipe;
}

export const Recipe = ({
  recipe: { title, image, missedIngredients },
}: RecipeProps) => {
  return (
    <div className="flex flex-col w-full max-w-xl mx-auto my-4 shadow-md rounded overflow-hidden">
      <div className="bg-green-500 text-white font-bold text-xl p-4">
        {title}
      </div>
      <div className="flex bg-white">
        <div className="w-1/2">
          <img src={image} alt={title} className="w-full h-auto object-cover" />
        </div>
        <div className="w-1/2 text-gray-900 mt-4">
          <p>
            You&apos;ll also need:
            <ul className="list-decimal ml-5">
              {missedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.name}</li>
              ))}
            </ul>
          </p>
          <Link href="" className="text-sm text-blue-500 align-middle">
            See Full Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};
