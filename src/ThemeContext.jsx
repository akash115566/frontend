import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // ✅ Default background
  const defaultBg = "linear-gradient(to right, #d91394ff, #a10e63ff)";

  // ✅ State with localStorage
  const [themeColor, setThemeColor] = useState(
    localStorage.getItem("themeColor") || defaultBg
  );

  // ✅ Change color
  const changeColor = (color) => {
    setThemeColor(color);
    localStorage.setItem("themeColor", color);
  };

  // ✅ Reset to default background
  const resetColor = () => {
    setThemeColor(defaultBg);
    localStorage.removeItem("themeColor");
  };

  // ✅ Apply globally
  useEffect(() => {
    document.body.style.background = themeColor;
  }, [themeColor]);

  return (
    <ThemeContext.Provider value={{ themeColor, changeColor, resetColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

