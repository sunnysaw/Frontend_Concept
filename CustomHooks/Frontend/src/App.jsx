import UpperTheme from "./components/UpperTheme";
import LowerTheme from "./components/LowerTheme";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <UpperTheme />
      <LowerTheme />
    </div>
  );
};

export default App;
