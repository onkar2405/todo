import { useEffect, useState } from "react";

export function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function fetchTodos() {
    fetch("http://localhost:3000/todos")
      .then((data) => data.json())
      .then((resp) => setTodos(resp.result));
  }

  return (
    <>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <h4>{todo.title}</h4>
              <p>{todo.description}</p>
              <button>Mark as completed!</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
