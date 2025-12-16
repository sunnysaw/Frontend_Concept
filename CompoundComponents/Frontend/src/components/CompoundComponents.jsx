import { useContext } from "react";
import { ThemeContext } from "./ContextApi";

const CompoundComponents = ({ children }) => {
  const { defaultTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen p-8 ${
        defaultTheme ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <button
        onClick={toggleTheme}
        className={`mb-6 px-4 py-2 rounded ${
          defaultTheme ? "bg-white text-gray-900" : "bg-gray-900 text-white"
        } transition-colors duration-300`}
      >
        Toggle Theme
      </button>
      {children}
    </div>
  );
};

function HeaderSection({ children }) {
  return (
    <header className="mb-4 p-4 bg-blue-500 text-white rounded">
      {children || "Header Section"}
    </header>
  );
}

function BodySection({ children }) {
  return (
    <main className="mb-4 p-4 bg-green-500 text-white rounded">
      {children || "Body Section"}
    </main>
  );
}

function FooterSection({ children }) {
  return (
    <footer className="p-4 bg-purple-500 text-white rounded">
      {children || "Footer Section"}
    </footer>
  );
}

// Attach child components
CompoundComponents.Header = HeaderSection;
CompoundComponents.Body = BodySection;
CompoundComponents.Footer = FooterSection; // fixed typo

export default CompoundComponents;
