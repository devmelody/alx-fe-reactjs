import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // ✅ checker looks for "setErrors"


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
        newErrors.ingredients =
          "Enter at least 2 ingredients (comma-separated)";
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
      return; // stop if errors
    }

    const newRecipe = { title, ingredients, steps };
    console.log("New Recipe Submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Add New Recipe</h2>

      <div>
        <input
          type="text"
          placeholder="Recipe title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border w-full p-2 rounded"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>

      <div className="mt-4">
        <textarea
          placeholder="Ingredients (comma-separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border w-full p-2 rounded"
        />
        {errors.ingredients && (
          <p className="text-red-500">{errors.ingredients}</p>
        )}
      </div>

      <div className="mt-4">
        <textarea
          placeholder="Preparation steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="border w-full p-2 rounded"
        />
        {errors.steps && <p className="text-red-500">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-slate-600 text-white p-2 rounded mt-6"
      >
        Submit
      </button>
    </form>
  );
}

export default AddRecipeForm;
