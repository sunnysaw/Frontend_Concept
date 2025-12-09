import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext.jsx";

function LowerSection() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div
      className={`p-6 rounded-xl mt-4 transition-all duration-300 ${
        theme === "light"
          ? "bg-white text-gray-900 shadow-md"
          : "bg-gray-800 text-gray-100 shadow-xl"
      }`}
    >
      <h2 className="text-xl font-semibold">Lower Section — {theme}</h2>

      <button
        onClick={toggleTheme}
        className={`mt-4 px-4 py-2 rounded-lg font-semibold transition-all duration-300
          ${
            theme === "light"
              ? "bg-gray-900 text-white hover:bg-gray-700"
              : "bg-gray-200 text-gray-900 hover:bg-white"
          }
        `}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default LowerSection;
