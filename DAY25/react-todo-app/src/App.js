// src/App.js
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (oldTodo, updatedValues) => {
    setTodos(
      todos.map((todo) =>
        todo === oldTodo ? { ...todo, ...updatedValues } : todo
      )
    );
  };

  const deleteTodo = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo !== todoToDelete));
  };

  return (
    <div className="app">
      <h1>My Todo</h1>
      <TodoForm addTodo={addTodo} />
      <div className="filter">
        <label>Status Filter: </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        filter={filter}
      />
    </div>
  );
};

export default App;
