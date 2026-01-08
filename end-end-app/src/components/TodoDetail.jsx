import Button from './ui/Button';

const TodoDetail = ({ todo, onToggle, onDelete, onEdit }) => {
  if (!todo) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <p className="mt-4 text-lg">Select a todo to view details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="space-y-4">
        {/* Todo Title */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Title</h3>
          <p
            className={`text-lg font-semibold ${
              todo.completed ? 'text-gray-500 line-through' : 'text-gray-900'
            }`}
          >
            {todo.title}
          </p>
        </div>

        {/* Status */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Status</h3>
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              todo.completed
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {todo.completed ? '✓ Completed' : '○ Pending'}
          </span>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t space-y-2">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Actions</h3>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              onClick={() => onToggle(todo.id, !todo.completed)}
              variant={todo.completed ? 'secondary' : 'primary'}
              className="flex-1"
            >
              {todo.completed ? 'Mark as Pending' : 'Mark as Completed'}
            </Button>
            
            <Button
              onClick={() => onEdit(todo)}
              variant="outline"
              className="flex-1"
            >
              Edit Title
            </Button>
            
            <Button
              onClick={() => onDelete(todo.id)}
              variant="destructive"
              className="flex-1"
            >
              Delete
            </Button>
          </div>
        </div>

        {/* Metadata */}
        <div className="pt-4 border-t">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Details</h3>
          <div className="text-sm text-gray-600 space-y-1">
            {todo.createdAt && (
              <p>Created: {new Date(todo.createdAt.seconds * 1000).toLocaleString()}</p>
            )}
            {todo.updatedAt && (
              <p>Updated: {new Date(todo.updatedAt.seconds * 1000).toLocaleString()}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDetail;
