import React from "react";
import useTheme from "../Store/Theme";

const UpperSection = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div
      className={`h-40 flex flex-col items-center justify-center transition-all duration-300 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <div
        className={`w-20 h-20 rounded-xl mb-4 transition-all duration-300 ${
          theme === "light" ? "bg-yellow-300" : "bg-white"
        }`}
      ></div>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Upper Section Toggle Theme
      </button>
    </div>
  );
};

export default UpperSection;
