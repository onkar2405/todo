import { useEffect, useState } from "react";
import { Todos } from "./Todos";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function fetchTodos() {
    fetch("http://localhost:3000/todos")
      .then((data) => data.json())
      .then((resp) => setTodos(resp.result));
  }

  function addTodo() {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        fetchTodos();
      }
    });
  }

  return (
    <>
      <div>
        <input
          className="inputs"
          type="text"
          placeholder="title"
          onInput={(e) => setTitle(e.target.value)}
        ></input>
        <input
          className="inputs"
          type="text"
          placeholder="description"
          onInput={(e) => setDescription(e.target.value)}
        ></input>
        <button type="checkbox" className="add-btn" onClick={addTodo}>
          Add a todo
        </button>
      </div>
      <Todos todos={todos}></Todos>
    </>
  );
}
