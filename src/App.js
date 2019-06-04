import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./App.css";

//  Components
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
// Counter
import Counter from "./components/Counter";

//  Reducer(s)
import rootReducer from "./reducers";

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Counter</h1>
        <Counter/>
        <hr/>
        <h1>Todo App</h1>
        <TodoList />
        <AddTodo />
      </div>
    </Provider>
  );
}

export default App;
