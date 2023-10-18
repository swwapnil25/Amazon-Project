import React, { createContext, useContext, useState } from "react";

// Create a context
export const DarkModeContext = createContext();

// Create a provider component to wrap your app
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to access the dark mode state and toggle function
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
