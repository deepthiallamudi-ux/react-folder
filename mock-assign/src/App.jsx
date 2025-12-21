import React, { useState } from 'react';
import Posts from './posts';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  let themeClass = '';
  if (theme === 'dark') {
    themeClass = 'dark-theme';
  } else {
    themeClass = 'light-theme';
  }

  return (
    <div className={`app-container ${themeClass}`}>
      <div className="app-header">
        <h1>Welcome to Mock Assign</h1>
        <p>This is a simple React application.</p>
      </div>
      <Posts theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;