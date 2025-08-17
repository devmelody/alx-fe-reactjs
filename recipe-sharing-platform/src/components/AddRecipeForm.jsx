import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const items = ingredients
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean);
      if (items.length < 2) {
        newErrors.ingredients = "Enter at least 2 ingredients (comma-separated)";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = { title, ingredients, steps };
    console.log("New Recipe Submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="p-4 md:p-8 max-w-md md:max-w-xl w-full mx-auto shadow-lg rounded-2xl bg-white"
    >
      <h2 className="text-lg md:text-2xl font-bold text-center mt-3 mb-5">
        Add New Recipe
      </h2>

      <div>
        <input
          className="border w-full border-gray-300 p-2 md:p-3 rounded text-base md:text-lg"
          type="text"
          placeholder="Recipe title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="text-red-500 text-sm md:text-base mt-1">{errors.title}</p>}
      </div>

      <div className="mt-5">
        <textarea
          className="border w-full border-gray-300 p-2 md:p-3 rounded text-base md:text-lg"
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows={4}
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm md:text-base mt-1">{errors.ingredients}</p>
        )}
      </div>

      <div className="mt-5">
        <textarea
          className="border w-full border-gray-300 p-2 md:p-3 rounded text-base md:text-lg"
          placeholder="Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows={5}
        />
        {errors.steps && <p className="text-red-500 text-sm md:text-base mt-1">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-slate-600 hover:bg-slate-700 mt-8 text-white text-base md:text-lg py-2 md:py-3 rounded-lg transition-colors duration-200"
      >
        Submit
      </button>
    </form>
  );
}

export default AddRecipeForm;
