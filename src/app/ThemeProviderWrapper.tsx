'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

// Este componente é um Client Component que encapsula o ThemeProvider.
// Ele é importado no layout.tsx (Server Component)
const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  return (
    // 'attribute="class"' faz com que 'next-themes' use a classe 'dark' no elemento <html>,
    // que é o padrão do Tailwind CSS.
    // 'defaultTheme="system"' define o tema padrão como o do sistema/navegador.
    // 'enableSystem' habilita a verificação do tema do sistema.
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;