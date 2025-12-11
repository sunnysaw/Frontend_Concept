import React from "react";
import UpperSection from "./Components/UpperSection.jsx";
import LowerSection from "./Components/LowerSection.jsx";
import { ThemeProvider } from "./Contexts/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1 className="text-[220%] font-extrabold items-center justify-center flex m-5">
          Context API Demo
        </h1>

        <UpperSection />
        <LowerSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
