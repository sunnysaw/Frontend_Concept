import useTheme from "../utils/useTheme";

const UpperTheme = () => {
  const { defaultTheme, toggleTheme } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg shadow-lg text-center transition-colors duration-500
      ${
        defaultTheme ? "bg-gray-900 text-white" : "bg-yellow-100 text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">
        {defaultTheme ? "Dark Mode Active" : "Light Mode Active"}
      </h1>
      <button
        onClick={toggleTheme}
        className={`px-6 py-2 rounded-md font-semibold transition-colors duration-300
        ${
          defaultTheme
            ? "bg-white text-gray-900 hover:bg-gray-300"
            : "bg-gray-900 text-white hover:bg-gray-700"
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default UpperTheme;
