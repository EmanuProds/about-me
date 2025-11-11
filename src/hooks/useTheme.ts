"use client";

import { useTheme as useThemeContext } from "@/components/providers/ThemeProvider";

/**
 * Tipos de tema suportados pela aplicação.
 */
export type Theme = "light" | "dark";

/**
 * Hook personalizado para acessar o contexto de tema.
 * Wrapper simplificado para o ThemeProvider context.
 */
export const useTheme = () => {
  return useThemeContext();
};
