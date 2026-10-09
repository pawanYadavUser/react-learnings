import { useEffect, useState } from "react";

const TodoAppPractice = () => {
  const [toDos, setToDos] = useState(() => {
    const result = localStorage.getItem("todoPractice");
    return result ? JSON.parse(result) : [];
  });

  const [inputValue, setInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("all");

  useEffect(() => {
    localStorage.setItem("todoPractice", JSON.stringify(toDos));
  }, [toDos]);

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setToDos([...toDos, newTodo]);
    setInputValue("");
  };

  const filteredToDos = toDos.filter((todo) => {
    if (filterValue == "active") return !todo.completed;
    if (filterValue == "completed") return todo.completed;
    return true;
  });

  const toggleTodo = (id) => {
    toDos.map((todo) => {
      if (todo.id == id) todo.completed = !todo.completed;
    });
  };

  const deleteTodo = (id) => {
    setToDos(
      toDos.filter((todo) => {
        if (todo.id == id) return false;
        return true;
      }),
    );
  };

  return (
    <div>
      <h2>ToDo app practice</h2>
      <label htmlFor="">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter new todos.........!"
        />
        <button onClick={handleAdd}>Add</button>
      </label>

      <div>
        {["all", "completed", "active"].map((f) => (
          <button onClick={() => setFilterValue(f)}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div>
        <ul>
          {filteredToDos.map((filterTodo) => (
            <li id={filterTodo.id}>
              <input
                type="checkbox"
                checked={filterTodo.completeds}
                onChange={() => toggleTodo(filterTodo.id)}
              />
              <span>{filterTodo.text.trim()}</span>
              <button onClick={() => deleteTodo(filterTodo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoAppPractice;
