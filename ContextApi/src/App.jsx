import React from "react";
import UpperSection from "./Components/UpperSection.jsx";
import LowerSection from "./Components/LowerSection.jsx";
import AppProviders from "./Providers/ThemeProvider.jsx";

function App() {
  return (
    <AppProviders>
      <div>
        <h1 className="text-[220%] font-extrabold items-center justify-center flex m-5">Context API Demo</h1>
        <UpperSection />
        <LowerSection />
      </div>
    </AppProviders>
  );
}

export default App;
