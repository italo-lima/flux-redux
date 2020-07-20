import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "./actions/todos";

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  function addNewTodo() {
    dispatch(addTodo(newTodo));

    setNewTodo("");
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addNewTodo}>Novo ToDo</button>
    </>
  );
}
