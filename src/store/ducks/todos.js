import { createActions, createReducer } from "reduxsauce";

/*
 * Criando as actions e types
 */

export const { Types, Creators } = createActions({
  addTodo: ["text"],
  toggleTodo: ["id"],
  removeTodo: ["id"],
});

console.log(Types, Creators);

/*
 * Criando os reducers handlers
 */

const INITIAL_STATE = [];

const add = (state = INITIAL_STATE, action) => [
  ...state,
  { id: Math.random(), text: action.text, toggle: false },
];

const toggle = (state = INITIAL_STATE, action) =>
  state.map((todo) =>
    todo.id === action.id ? { ...todo, toggle: !todo.toggle } : todo
  );

const remove = (state = INITIAL_STATE, action) =>
  state.filter((todo) => todo.id !== action.id);

/*
 * Criando as actions e types
 */

export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: add,
  [Types.TOGGLE_TODO]: toggle,
  [Types.REMOVE_TODO]: remove,
});
