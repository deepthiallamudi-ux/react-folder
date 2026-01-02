import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from '../api/todoService';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const data = await getTodos();
        setTodos(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch todos. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) {
    return <div className="loading">Loading todos...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <div className="todo-count">Total Todos: {todos.length}</div>
      <div className="todos-grid">
        {todos.map((todo) => (
          <Link 
            key={todo.id} 
            to={`/todo/${todo.id}`} 
            className="todo-card"
          >
            <div className="todo-id">#{todo.id}</div>
            <h3 className="todo-title">{todo.title}</h3>
            <div className={`todo-status ${todo.completed ? 'completed' : 'pending'}`}>
              {todo.completed ? '✓ Completed' : '⏳ Pending'}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
