import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";
import TodoList from "./TodoList";
import Counter from "./Counter";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoList />
        <Counter />
      </PersistGate>
    </Provider>
  );
}

export default App;
