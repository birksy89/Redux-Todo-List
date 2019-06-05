import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

//  Components
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
// Counter
import Counter from "./components/Counter";

//  Reducer(s)
import rootReducer from "./reducers";

//  Middleware
const middleware = [thunk];

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">Todos</Link>
            </li>
            <li>
              <Link to="/add">Add Todo</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Counter} />
          <Route path="/todo" component={TodoList} />
          <Route path="/add" component={AddTodo} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
