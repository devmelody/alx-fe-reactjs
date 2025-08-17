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
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("New recipe submitted:", { title, ingredients, steps });
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-bold text-center mb-5">Add Recipe</h2>

      <div>
        <input
          className="border w-full p-2 rounded"
          type="text"
          placeholder="Recipe title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div className="mt-4">
        <textarea
          className="border w-full p-2 rounded"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      <div className="mt-4">
        <textarea
          className="border w-full p-2 rounded"
          placeholder="Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-slate-600 text-white py-2 rounded hover:bg-slate-700"
      >
        Submit
      </button>
    </form>
  );
}

export default AddRecipeForm;
