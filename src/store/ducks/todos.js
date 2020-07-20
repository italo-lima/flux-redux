export const Types = {
  ADD: "todos/ADD",
  TOGGLE: "todos/TOGGLE",
  REMOVE: "todos/REMOVE",
};

export default function todos(state = [], action) {
  switch (action.type) {
    case Types.ADD:
      return [
        ...state,
        { id: Math.random(), text: action.text, toggle: false },
      ];
    case Types.TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, toggle: !todo.toggle } : todo
      );
    case Types.REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

export const Creators = {
  addTodo: (text) => ({
    type: Types.ADD,
    text,
  }),

  removeTodo: (id) => ({
    type: Types.REMOVE,
    id,
  }),

  toggleTodo: (id) => ({
    type: Types.TOGGLE,
    id,
  }),
};
