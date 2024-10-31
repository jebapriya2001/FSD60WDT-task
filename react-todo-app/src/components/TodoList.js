// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo, deleteTodo, filter }) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return todo.status === 'Completed';
    if (filter === 'Not Completed') return todo.status === 'Not Completed';
    return true;
  });

  return (
    <div className="todo-list">
      {filteredTodos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
