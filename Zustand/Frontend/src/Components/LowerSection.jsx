import React from "react";
import  useTheme  from "../Store/Theme"; // adjust path if needed

const LowerSection = () => {
  const theme = useTheme((state) => state.theme);
  const toggleTheme = useTheme((state) => state.toggleTheme);

  return (
    <div
      className={`h-40 w-full flex flex-col items-center justify-center rounded-xl shadow-md 
      transition-all duration-300 mt-6
      ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}
    `}
    >
      {/* Box just like the upper section */}
      <div
        className={`w-20 h-20 rounded-xl mb-4 transition-all duration-300 
        ${theme === "light" ? "bg-yellow-300" : "bg-white"}
      `}
      ></div>

      {/* Button — same styling as provided */}
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition active:scale-95"
      >
        Lower Section Toggle Theme
      </button>
    </div>
  );
};


export default LowerSection;
