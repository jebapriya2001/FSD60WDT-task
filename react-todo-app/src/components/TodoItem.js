// src/components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.name);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleSave = () => {
    updateTodo(todo, { name: newName, description: newDescription });
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <select
            value={todo.status}
            onChange={(e) => updateTodo(todo, { status: e.target.value })}
          >
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
