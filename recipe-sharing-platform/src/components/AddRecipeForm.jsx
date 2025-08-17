import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // error handling
  const [titleError, setTitleError] = useState("");
  const [ingredientsError, setIngredientsError] = useState("");
  const [stepsError, setStepsError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // clear old errors
    setTitleError("");
    setIngredientsError("");
    setStepsError("");

    let isValid = true;

    if (!title.trim()) {
      setTitleError("Title is required");
      isValid = false;
    }

    if (!ingredients.trim()) {
      setIngredientsError("Ingredients are required");
      isValid = false;
    } else {
      const items = ingredients
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean);
      if (items.length < 2) {
        setIngredientsError("Enter at least 2 ingredients (comma-separated)");
        isValid = false;
      }
    }

    if (!steps.trim()) {
      setStepsError("Preparation steps are required");
      isValid = false;
    }

    if (!isValid) return;

    // ✅ form is valid
    const newRecipe = { title, ingredients, steps };
    console.log("New Recipe Submitted:", newRecipe);

    // reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        Add New Recipe
      </h2>

      {/* Title */}
      <div>
        <input
          className="border w-full px-3 py-2 rounded-md text-base sm:text-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
          type="text"
          placeholder="Recipe title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {titleError && <p className="text-red-500 text-sm">{titleError}</p>}
      </div>

      {/* Ingredients */}
      <div className="mt-5">
        <textarea
          className="border w-full px-3 py-2 rounded-md text-base sm:text-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
          rows="4"
          placeholder="Ingredients (comma-separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        {ingredientsError && (
          <p className="text-red-500 text-sm">{ingredientsError}</p>
        )}
      </div>

      {/* Steps */}
      <div className="mt-5">
        <textarea
          className="border w-full px-3 py-2 rounded-md text-base sm:text-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
          rows="5"
          placeholder="Preparation steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        {stepsError && <p className="text-red-500 text-sm">{stepsError}</p>}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded-md mt-8 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}

export default AddRecipeForm;
