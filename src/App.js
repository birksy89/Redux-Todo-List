import React from 'react';
import './App.css';

//  Components
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList/>
      <AddTodo/>
    </div>
  );
}

export default App;
