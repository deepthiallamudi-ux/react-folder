import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { todoService } from '../services/todo.service';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import TodoForm from '../components/TodoForm';
import TodoDetail from '../components/TodoDetail';
import UpdateTodoModal from '../components/UpdateTodoModal';

const Todos = () => {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [todoToUpdate, setTodoToUpdate] = useState(null);

  // Load todos on mount
  useEffect(() => {
    loadTodos();
  }, [user]);

  // Filter todos when filter changes or todos update
  useEffect(() => {
    filterTodos();
  }, [currentFilter, todos]);

  const loadTodos = async () => {
    if (!user) return;

    setLoading(true);
    const result = await todoService.getTodos(user.uid);
    setLoading(false);

    if (result.success) {
      setTodos(result.todos);
      // If a todo is selected, update it with the latest data
      if (selectedTodo) {
        const updatedTodo = result.todos.find((t) => t.id === selectedTodo.id);
        setSelectedTodo(updatedTodo || null);
      }
    }
  };

  const filterTodos = () => {
    let filtered = [...todos];

    if (currentFilter === 'completed') {
      filtered = todos.filter((todo) => todo.completed);
    } else if (currentFilter === 'pending') {
      filtered = todos.filter((todo) => !todo.completed);
    }

    setFilteredTodos(filtered);

    // If selected todo is filtered out, clear selection
    if (selectedTodo && !filtered.find((t) => t.id === selectedTodo.id)) {
      setSelectedTodo(null);
    }
  };

  const handleCreateTodo = async (title) => {
    const result = await todoService.createTodo(user.uid, title);

    if (result.success) {
      await loadTodos();
    } else {
      alert('Failed to create todo: ' + result.error);
    }
  };

  const handleToggleTodo = async (todoId, completed) => {
    const result = await todoService.toggleTodo(todoId, completed);

    if (result.success) {
      await loadTodos();
    } else {
      alert('Failed to toggle todo: ' + result.error);
    }
  };

  const handleDeleteTodo = async (todoId) => {
    if (!confirm('Are you sure you want to delete this todo?')) return;

    const result = await todoService.deleteTodo(todoId);

    if (result.success) {
      setSelectedTodo(null);
      await loadTodos();
    } else {
      alert('Failed to delete todo: ' + result.error);
    }
  };

  const handleEditTodo = (todo) => {
    setTodoToUpdate(todo);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateTodo = async (todoId, newTitle) => {
    const result = await todoService.updateTodo(todoId, { title: newTitle });

    if (result.success) {
      await loadTodos();
    } else {
      alert('Failed to update todo: ' + result.error);
    }
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  const handleSelectTodo = (todo) => {
    setSelectedTodo(todo);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar currentFilter={currentFilter} onFilterChange={handleFilterChange} />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          todos={filteredTodos}
          selectedTodo={selectedTodo}
          onSelectTodo={handleSelectTodo}
        />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-lg text-gray-500">Loading todos...</p>
            </div>
          ) : (
            <>
              {/* Todo Form */}
              <div className="max-w-4xl mx-auto mb-6">
                <TodoForm onSubmit={handleCreateTodo} />
              </div>

              {/* Todo Detail */}
              <div className="max-w-4xl mx-auto">
                <TodoDetail
                  todo={selectedTodo}
                  onToggle={handleToggleTodo}
                  onDelete={handleDeleteTodo}
                  onEdit={handleEditTodo}
                />
              </div>
            </>
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Update Todo Modal */}
      <UpdateTodoModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        todo={todoToUpdate}
        onUpdate={handleUpdateTodo}
      />
    </div>
  );
};

export default Todos;
