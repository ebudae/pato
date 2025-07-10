import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('day'); // 'day' or 'night'

  useEffect(() => {
    if (theme === 'night') {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'day' ? 'night' : 'day'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
