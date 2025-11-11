"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

/**
 * Tipos de tema suportados.
 */
type Theme = 'light' | 'dark';

/**
 * Interface do contexto de tema.
 */
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

/**
 * Contexto para gerenciamento de tema da aplicação.
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Hook personalizado para acessar o contexto de tema.
 * Deve ser usado dentro de um ThemeProvider.
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

/**
 * Props para o ThemeProvider.
 */
interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Provedor de contexto para gerenciamento de tema.
 * Detecta automaticamente a preferência do sistema e permite alternância manual.
 * Persiste a escolha do usuário no localStorage.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Só executar no cliente
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme);
    } else {
      // Detectar preferência do sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Evitar renderizar até estar montado para prevenir hydration mismatch
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
