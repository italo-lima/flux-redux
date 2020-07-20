import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "./ducks";
import rootSaga from "./ducks/sagas";

const persistConfig = {
  key: "@root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
