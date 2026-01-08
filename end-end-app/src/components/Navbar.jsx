import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';

const Navbar = ({ currentFilter, onFilterChange }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const filters = [
    { id: 'all', label: 'All Todos' },
    { id: 'completed', label: 'Completed' },
    { id: 'pending', label: 'Pending' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* App Title */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Todo Application</h1>
          </div>

          {/* Filter Options */}
          <div className="flex items-center space-x-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => onFilterChange(filter.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* User Info & Sign Out */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">{user?.email}</span>
            <Button variant="destructive" size="sm" onClick={handleLogout}>
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
