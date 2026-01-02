import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getTodoById } from '../api/todoService';
import './TodoDetails.css';

function TodoDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        setLoading(true);
        const data = await getTodoById(id);
        setTodo(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch todo details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading todo details...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error">{error}</div>
        <Link to="/" className="back-button">Back to Todo List</Link>
      </div>
    );
  }

  if (!todo) {
    return (
      <div className="error-container">
        <div className="error">Todo not found</div>
        <Link to="/" className="back-button">Back to Todo List</Link>
      </div>
    );
  }

  return (
    <div className="todo-details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>
      
      <div className="todo-details-card">
        <div className="todo-header">
          <span className="todo-id-badge">Todo #{todo.id}</span>
          <span className={`todo-status-badge ${todo.completed ? 'completed' : 'pending'}`}>
            {todo.completed ? '✓ Completed' : '⏳ Pending'}
          </span>
        </div>
        
        <h1 className="todo-detail-title">{todo.title}</h1>
        
        <div className="todo-info">
          <div className="info-row">
            <span className="info-label">User ID:</span>
            <span className="info-value">{todo.userId}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Todo ID:</span>
            <span className="info-value">{todo.id}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Status:</span>
            <span className="info-value">
              {todo.completed ? 'Completed ✓' : 'Not Completed ✗'}
            </span>
          </div>
        </div>
      </div>

      <Link to="/" className="home-link">
        View All Todos
      </Link>
    </div>
  );
}

export default TodoDetails;
