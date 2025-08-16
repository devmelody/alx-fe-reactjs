import { useEffect, useState } from "react";
import recipeData from "../data.json";

function Homepage() {
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    setRecipe(recipeData);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center p-4 ">

        <h1 className="text-xl font-bold mb-4 text-center col-span-full">Recipe finder</h1>
        {recipes.map((recipe) => (
            <div className="flex flex-col items-center" key={recipe.id}>
                    <img className="w-24 h-24 shadow hover:shadow-lg transition-shadow rounded-xl" src={recipe.image} />
                
                    <p className="text-xs font-serif mt-2">{recipe.title}</p>
                    <p className="text-sm font-semibold mt-1 mb-4 text-center">{recipe.summary}</p>
                    
            </div>
        ))}
    </div>
  )
}
export default Homepage;
