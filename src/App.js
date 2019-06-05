import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

//  Store - Redux
import store from './store'

//  Components
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
// Counter
import Counter from "./components/Counter";
//  Movies
import MovieList from "./components/MovieList";



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
              <Link to="/movies">Movie List</Link>
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
          <Route path="/movies" component={MovieList} />
          <Route path="/todo" component={TodoList} />
          <Route path="/add" component={AddTodo} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
