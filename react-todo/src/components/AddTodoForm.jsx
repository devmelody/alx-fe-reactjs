import React, { useState } from "react";

function AddTodoForm({ onAdd }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="add-todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
        data-testid="todo-input"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
