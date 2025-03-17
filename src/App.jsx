import React, { useState, useEffect } from 'react';
import IngredientSearch from './components/IngredientSearch';
import './index.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="App">
      <div className="theme-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider round"></span>
        </label>
        <span className="theme-label">{darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}</span>
      </div>

      <h1 className="app-title">🍽️ AI-Powered Recipe Finder</h1>
      <p className="app-subtitle">
        Enter a **recipe name** to get its **image, ingredients, and step-by-step cooking instructions**!
      </p>
      
      <IngredientSearch />

      <footer className="app-footer">
        <p>👨‍🍳 Happy Cooking! | Powered by DummyJSON API</p>
      </footer>
    </div>
  );
};

export default App;
