import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [defaultTheme, setDefaultTheme] = useState(false);

  const toggleTheme = () => setDefaultTheme((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ toggleTheme, defaultTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
