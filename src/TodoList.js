import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Creators as TodosActions } from "./store/ducks/todos";

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  function addNewTodo() {
    dispatch(TodosActions.addTodo(newTodo));

    setNewTodo("");
  }

  function removeTodoList(id) {
    dispatch(TodosActions.removeTodo(id));
  }

  function toggleTodoList(id) {
    dispatch(TodosActions.toggleTodo(id));
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id} style={{ display: "flex", padding: "20px" }}>
            <li>
              {todo.text}: {todo.toggle ? "Concluído" : "Não Concluído"}
            </li>
            <button onClick={() => removeTodoList(todo.id)}>
              Remover ToDo
            </button>
            <button onClick={() => toggleTodoList(todo.id)}>Toggle ToDo</button>
          </div>
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
