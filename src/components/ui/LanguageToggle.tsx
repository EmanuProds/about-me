"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { Locale } from "@/types/translations";

/**
 * Componente para alternar entre idiomas da aplicação.
 * Salva a preferência no localStorage e recarrega a página para aplicar as mudanças.
 */
const LanguageToggle: React.FC = () => {
  const { locale, t } = useTranslations();

  /**
   * Alterna entre português e inglês, salvando a preferência e recarregando a página.
   * Recarregamento é necessário para aplicar as traduções em todos os componentes.
   */
  const toggleLanguage = () => {
    const newLocale: Locale = locale === 'pt-BR' ? 'en' : 'pt-BR';
    localStorage.setItem('preferred-language', newLocale);
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-1 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-all duration-200 cursor-pointer"
      title={locale === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'}
    >
      <span className="text-2xl">
        {locale === 'pt-BR' ? '🇧🇷' : '🇺🇸'}
      </span>
    </button>
  );
};

export default LanguageToggle;
