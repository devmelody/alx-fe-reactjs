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
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>

      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && <p>{errors.title}</p>}

      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      {errors.ingredients && <p>{errors.ingredients}</p>}

      <textarea
        placeholder="Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />
      {errors.steps && <p>{errors.steps}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddRecipeForm;
