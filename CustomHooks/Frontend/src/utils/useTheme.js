import { useState } from "react";

const useTheme = () => {
  const [defaultTheme, setDefaultTheme] = useState(false);

  const toggleTheme = () => {
    setDefaultTheme((prev) => !prev);
  };

  return { defaultTheme, toggleTheme };
};

export default useTheme;
