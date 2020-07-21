import { all, takeLatest, call, put, select } from "redux-saga/effects";
import { push } from "connected-react-router";

// simulando uma requisição api
function apiGet(text, length) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text + " bom: " + length);
    }, 1000);
  });
}

// ToDos
export const Types_Todos = {
  ADD_TODO_REQUEST: "ADD_TODO_REQUEST",
  REMOVE_TODO_REQUEST: "REMOVE_TODO_REQUEST",

  ADD_TODO_SUCCESS: "ADD_TODO_SUCCESS",
  REMOVE_TODO_SUCCESS: "REMOVE_TODO_SUCCESS",
};

/**
 * Actions
 */

export function addTodo(text) {
  return {
    type: Types_Todos.ADD_TODO_REQUEST,
    payload: { text },
  };
}

export function removeTodo(id) {
  return {
    type: Types_Todos.REMOVE_TODO_REQUEST,
    payload: { id },
  };
}

/**
 * Sagas
 */

export function* addTodoSaga({ payload }) {
  try {
    // select busca informações do estado
    const todos = yield select((state) => state.todos);

    const response = yield call(apiGet, payload.text, todos.length);

    yield put({
      type: Types_Todos.ADD_TODO_SUCCESS,
      payload: { text: response },
    });

    yield put(push("/profile"));
  } catch {
    yield put({
      type: "ERROR",
    });
  }
}

export function* removeTodoSaga({ payload }) {
  yield put({
    type: Types_Todos.REMOVE_TODO_SUCCESS,
    payload: { id: payload.id },
  });
}

/**
 * Reducers
 */
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case Types_Todos.ADD_TODO_SUCCESS:
      return [
        ...state,
        { id: Math.random(), text: payload.text, toggle: false },
      ];

    case Types_Todos.REMOVE_TODO_SUCCESS:
      return state.filter((todo) => todo.id !== payload.id);

    default:
      return state;
  }
};

export const todos_sagas = all([
  takeLatest(Types_Todos.ADD_TODO_REQUEST, addTodoSaga),
  takeLatest(Types_Todos.REMOVE_TODO_REQUEST, removeTodoSaga),
]);
