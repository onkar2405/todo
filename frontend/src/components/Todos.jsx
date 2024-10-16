/* eslint-disable react/prop-types */
export function Todos({ todos }) {
  function markAsDone(todo) {
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({
        id: todo._id,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <div className="todo-container">
        <h3 className="todo-title">TODO List</h3>
        {todos.map((todo) => {
          return (
            <div className="todo-item" key={todo._id}>
              <input
                type="checkbox"
                className="add-btn"
                onChange={() => markAsDone(todo)}
                checked={todo.completed}
              ></input>
              <p className="todo-fields">{todo.title}</p>
              <p>-</p>
              <p className="todo-fields">{todo.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
