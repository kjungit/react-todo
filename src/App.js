import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TodoContainter from "./components/TodoContainter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoContainter />
      </div>
    </Provider>
  );
}

export default App;
