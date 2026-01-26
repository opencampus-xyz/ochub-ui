// Import theme CSS automatically - ensures theme is always available
import "./theme.css";

// Export all components and icons
export * from "./components";

// Export theme configuration
export { ochubTheme } from "./theme";
export type { OchubTheme } from "./theme";

// Export theme provider for explicit theme wrapping (optional)
export { ThemeProvider } from "./ThemeProvider";
