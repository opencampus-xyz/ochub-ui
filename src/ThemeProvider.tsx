import { ReactNode, useEffect } from 'react';
import './theme.css';

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * ThemeProvider Component
 * 
 * Wraps your application to apply the OCHub UI theme.
 * This is optional - the theme CSS variables will be applied automatically.
 * 
 * @example
 * ```tsx
 * import { ThemeProvider, TopBar } from '@ochub/ui';
 * 
 * export function App() {
 *   return (
 *     <ThemeProvider>
 *       <TopBar />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    // Apply theme class to document root if needed
    document.documentElement.setAttribute('data-ochub-theme', 'applied');
  }, []);

  return <>{children}</>;
}
