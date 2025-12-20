import React, { useState, useEffect } from 'react';

export default function IterationFetch() {
  const [showTodos, setShowTodos] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (showTodos) {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => setTodos(data.slice(0, 15)))
        .catch(error => console.error('Error fetching todos:', error));
    }

    return () => {
      if (!showTodos) {
        alert("cleanup worked");
      }
    };
  }, [showTodos]);

  return (
    <div>
      <button onClick={() => setShowTodos(false)}>Unmount Todos</button>
      {showTodos && (
        <div>
          <h2>Todos List (First 15)</h2>
          {todos.map((todo) => (
            <div key={todo.id}>
              <h3>{todo.title}</h3>
              <p>User ID: {todo.userId}</p>
              <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
