"use client";

import { useTheme as useThemeContext } from '@/components/providers/ThemeProvider';

export type Theme = 'light' | 'dark';

export const useTheme = () => {
  return useThemeContext();
};
