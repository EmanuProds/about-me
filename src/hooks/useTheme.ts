"use client";

import { useTheme as useThemeContext } from "@/components/providers/ThemeProvider";

/**
 * Theme types supported by the application.
 */
export type Theme = "light" | "dark";

/**
 * Custom hook to access theme context.
 * Simplified wrapper for ThemeProvider context.
 */
export const useTheme = () => {
  return useThemeContext();
};
