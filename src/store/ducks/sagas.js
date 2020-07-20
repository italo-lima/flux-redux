import { all } from "redux-saga/effects";

import { todos_sagas } from "./todos";

export default function* rootSaga() {
  return yield all([todos_sagas]);
}
