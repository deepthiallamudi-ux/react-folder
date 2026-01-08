const Sidebar = ({ todos, selectedTodo, onSelectTodo }) => {
  return (
    <aside className="w-80 bg-white border-r overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">All Todos</h2>
        
        {todos.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-8">
            No todos yet. Create one to get started!
          </p>
        ) : (
          <div className="space-y-2">
            {todos.map((todo) => (
              <button
                key={todo.id}
                onClick={() => onSelectTodo(todo)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedTodo?.id === todo.id
                    ? 'bg-blue-50 border-2 border-blue-500'
                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-medium truncate ${
                        todo.completed
                          ? 'text-gray-500 line-through'
                          : 'text-gray-900'
                      }`}
                    >
                      {todo.title}
                    </p>
                  </div>
                  {todo.completed && (
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      ✓
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
