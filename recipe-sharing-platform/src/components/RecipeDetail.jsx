import recipeData from '../data.json'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'


function RecipeDetail() {
const {id} = useParams();
const [recipe, setRecipe] = useState(null);

useEffect(() => {

const selectedRecipe = recipeData.find((r) => String(r.id) === id);
setRecipe(selectedRecipe)

}, [id])

if (!recipe) {
    return <p className='text-center text-xl text-orange-500'>No recipe found</p>
} else {
     return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 place-items-center p-4 ">

        <h1 className="text-xl font-bold mb-4 text-center col-span-full">Recipe finder</h1>
       
            <div className="flex flex-col items-center justify-center" key={recipe.id}>
                    <img className="w-24 h-24 shadow hover:shadow-lg transition-shadow rounded-xl" src={recipe.image} />
                
                    <p className="text-xs font-serif mt-2">{recipe.title}</p>
                    <p className="text-sm font-semibold mt-1 mb-4 text-center">{recipe.summary}</p>
                    
            </div>
        
    </div>
  )
}

}
export default RecipeDetail;