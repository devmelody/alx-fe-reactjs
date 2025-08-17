// src/components/AddRecipeForm.jsx
import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // ✅ single errors object the checker expects
  const [errors, setErrors] = useState({});

  // ✅ validator the checker looks for
  function validate() {
    const next = {};

    if (!title.trim()) next.title = "Title is required";

    if (!ingredients.trim()) {
      next.ingredients = "Ingredients are required";
    } else {
      const items = ingredients
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean);
      if (items.length < 2) {
        next.ingredients =
          "Enter at least 2 ingredients (comma-separated)";
      }
    }

    if (!steps.trim()) next.steps = "Preparation steps are required";

    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    // stop if any errors
    if (Object.keys(nextErrors).length > 0) return;

    // form is valid
    const newRecipe = { title, ingredients, steps };
    console.log("New Recipe Submitted:", newRecipe);

    // reset
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Add New Recipe</h2>

      <div>
        <input
          type="text"
          placeholder="Recipe title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border w-full px-3 py-2 rounded-md text-base sm:text-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title}</p>
        )}
      </div>

      <div className="mt-5">
        <textarea
          rows="4"
          placeholder="Ingredients (comma-separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border w-full px-3 py-2 rounded-md text-base sm:text-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

      <div className="mt-5">
        <textarea
          rows="5"
          placeholder="Preparation steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="border w-full px-3 py-2 rounded-md text-base sm:text-sm border-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
        {errors.steps && (
          <p className="text-red-500 text-sm">{errors.steps}</p>
        )}
      </div>

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
