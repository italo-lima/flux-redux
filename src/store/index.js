import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

import { persistStore, persistReducer } from "redux-persist";

import rootSaga from "./ducks/sagas";
import createRootReducer from "./ducks";
import storage from "redux-persist/lib/storage";

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "@root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);

const middlewares = [routerMiddleware(history), sagaMiddleware];

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor, history };
