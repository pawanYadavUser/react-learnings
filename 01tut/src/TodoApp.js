import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    // Load from localStorage initially
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'

  // Save todos in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const handleAdd = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  // Toggle completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filtered todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div
      style={{
        margin: "2rem auto",
        maxWidth: "400px",
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Todo List</h2>

      {/* Input */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo..."
          style={{ flex: 2, padding: "0.5rem" }}
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleAdd}>Add2</button>
        <button onClick={handleAdd}>Add2</button>
        <button onClick={handleAdd}>Add2</button>
      </div>

      {/* Filter Buttons */}
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              margin: "0 0.3rem",
              padding: "0.3rem 0.7rem",
              background: filter === f ? "#007bff" : "#eee",
              color: filter === f ? "white" : "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Todo List */}
      {filteredTodos.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888" }}>No todos found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "white",
                padding: "0.5rem",
                borderRadius: "5px",
                marginBottom: "0.5rem",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              <label style={{ flex: 1, cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  style={{ marginRight: "0.5rem" }}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#777" : "#000",
                  }}
                >
                  {todo.text}
                </span>
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  background: "#dc3545",
                  color: "white",
                  border: "none",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoApp;
