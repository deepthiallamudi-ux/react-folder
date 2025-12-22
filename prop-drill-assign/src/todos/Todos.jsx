import { useState } from 'react';
import { TodoContext } from './TodoContext';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      <div>
        <h1>Todo Application</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default Todos;