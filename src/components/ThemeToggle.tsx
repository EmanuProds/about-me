'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react'; // Ícones modernos

// Mapeamento dos temas para ícones e textos
const themesMap = [
  { value: 'light', label: 'Claro', icon: Sun },
  { value: 'system', label: 'Sistema', icon: Monitor },
  { value: 'dark', label: 'Escuro', icon: Moon },
];

const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-8 w-40 animate-pulse bg-gray-700 dark:bg-gray-200/20 rounded-full" />;
  }

  const currentActiveTheme = theme;

  return (
    <div className="flex items-center space-x-2 text-sm">
      <div className="p-1 rounded-full bg-gray-700/50 dark:bg-gray-200/20 flex items-center shadow-inner">
        {themesMap.map(({ value, label, icon: Icon }) => {
          const isActive = currentActiveTheme === value;
          
          return (
            <button
              key={value}
              onClick={() => setTheme(value)}
              title={`Selecionar tema ${label}`}
              aria-pressed={isActive}
              className={`
                relative px-3 py-1 rounded-full transition-all duration-300 ease-in-out flex items-center justify-center
                ${isActive
                  ? 'bg-sky-500/80 text-white shadow-md'
                  : 'text-gray-300 dark:text-gray-400 hover:text-white/90 dark:hover:text-gray-100'
                }
              `}
            >
              <Icon size={16} className="mr-1 hidden sm:inline" />
              <span className="font-medium text-xs sm:text-sm">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeToggle;