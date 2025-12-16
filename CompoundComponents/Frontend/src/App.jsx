import ThemeProvider from "./components/ContextApi";
import CompoundComponents from "./components/CompoundComponents";

const App = () => {
  return (
    <ThemeProvider>
      <CompoundComponents>
        <CompoundComponents.Header>My Awesome Header</CompoundComponents.Header>
        <CompoundComponents.Body>
          Welcome to the body section with Tailwind styling!
        </CompoundComponents.Body>
        <CompoundComponents.Footer>
          Footer Information
        </CompoundComponents.Footer>
      </CompoundComponents>
    </ThemeProvider>
  );
};

export default App;
