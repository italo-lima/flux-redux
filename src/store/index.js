import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { persistStore, persistReducer } from "redux-persist";

import rootSaga from "./ducks/sagas";
import createRootReducer from "./ducks";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "@root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, createRootReducer());

const middlewares = [sagaMiddleware];

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
