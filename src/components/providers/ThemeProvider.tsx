"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

/**
 * Supported theme types.
 */
type Theme = "light" | "dark";

/**
 * Theme context interface.
 */
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

/**
 * Context for application theme management.
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Custom hook to access theme context.
 * Must be used within a ThemeProvider.
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

/**
 * Props for ThemeProvider.
 */
interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Context provider for theme management.
 * Automatically detects system preference and allows manual switching.
 * Persists user choice in localStorage.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only execute on client
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setTheme(savedTheme);
    } else {
      // Detect system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Avoid rendering until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
