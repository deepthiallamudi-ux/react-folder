import React, { useState } from 'react';
import Posts from './posts';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className="app-header">
        <h1>Welcome to Mock Assign</h1>
        <p>This is a simple React application.</p>
      </div>
      <Posts theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;