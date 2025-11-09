'use client';

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

// Definindo tipos e contexto
type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark'; // O tema efetivamente aplicado (light ou dark)
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook para usar o tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Isso é crucial para debugar: indica que o hook foi usado fora do provider
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};

// Provedor de Tema para envolver a aplicação
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // 1. Inicializa o tema a partir do localStorage ou 'system'
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setThemeState(savedTheme);
    }
    setMounted(true); // O componente montou, podemos acessar o DOM/localStorage
  }, []);

  // 2. Lógica para resolver o tema e aplicar a classe 'dark' no <html>
  useEffect(() => {
    if (!mounted) return; // Espera o componente montar para evitar hidratação incorreta

    // Detecta a preferência do sistema
    const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let newResolvedTheme: 'light' | 'dark';
    if (theme === 'dark') {
      newResolvedTheme = 'dark';
    } else if (theme === 'light') {
      newResolvedTheme = 'light';
    } else { // 'system'
      newResolvedTheme = systemIsDark ? 'dark' : 'light';
    }

    setResolvedTheme(newResolvedTheme);

    // Aplica a classe 'dark' ao <html> (necessário para o Tailwind)
    const html = document.documentElement;
    if (newResolvedTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    // Adiciona listener para mudanças no tema do sistema enquanto o tema for 'system'
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        // Força uma reavaliação do resolvedTheme
        setThemeState('system'); 
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
    
  }, [theme, mounted]);

  // Função para mudar o tema e salvar no localStorage
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Previne FOUC (Flash of Unstyled Content) ou temas incorretos durante a renderização inicial
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};