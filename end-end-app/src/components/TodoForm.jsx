import { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';

const TodoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);
    await onSubmit(title);
    setLoading(false);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a new todo..."
          className="flex-1"
        />
        <Button type="submit" disabled={loading || !title.trim()}>
          {loading ? 'Adding...' : 'Add Todo'}
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
