import { ThemeProvider } from "../Contexts/ThemeContext.jsx";

export default function AppProviders({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
