import { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';

const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const cleanTitle = todoTitle.trim();
    
    if (cleanTitle) {
      addTodo(cleanTitle);
      setTodoTitle('');
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="Enter your todo here..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;