import { Todos } from "./Todos";

export function CreateTodo() {
  return (
    <>
      <div>
        <input className="inputs" type="text" placeholder="title"></input>
        <input className="inputs" type="text" placeholder="description"></input>
        <button className="add-btn">Add a todo</button>
      </div>
      <Todos></Todos>
    </>
  );
}
