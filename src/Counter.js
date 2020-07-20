import React from "react";
import { useSelector } from "react-redux";

export default function Counter() {
  const sizeTodos = useSelector((state) => state.todos.length);

  return <h1>Você tem {sizeTodos} ToDos</h1>;
}
