import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext.jsx";

function UpperSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`p-6 rounded-xl transition-all duration-300 ${
        theme === "light"
          ? "bg-gray-100 text-gray-900 shadow-md"
          : "bg-gray-900 text-gray-100 shadow-xl"
      }`}
    >
      <h2 className="text-xl font-semibold">Upper Section</h2>
      <p className="mt-2 text-lg">Current Theme: {theme}</p>
    </div>
  );
}

export default UpperSection;
