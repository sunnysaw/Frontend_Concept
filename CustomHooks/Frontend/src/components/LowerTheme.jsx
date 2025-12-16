import useTheme from "../utils/useTheme";

const LowerTheme = () => {
  const { defaultTheme, toggleTheme } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg shadow-md text-center mt-6 transition-colors duration-500
      ${defaultTheme ? "bg-gray-800 text-white" : "bg-blue-100 text-gray-900"}`}
    >
      <h2 className="text-xl font-medium mb-3">
        {defaultTheme
          ? "This is Dark Mode Section"
          : "This is Light Mode Section"}
      </h2>
      <button
        onClick={toggleTheme}
        className={`px-5 py-2 rounded-md font-medium transition-colors duration-300
        ${
          defaultTheme
            ? "bg-white text-gray-900 hover:bg-gray-300"
            : "bg-gray-900 text-white hover:bg-gray-700"
        }`}
      >
        Switch Theme
      </button>
    </div>
  );
};

export default LowerTheme;
