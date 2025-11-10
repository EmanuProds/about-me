"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { Locale } from "@/types/translations";

const LanguageToggle: React.FC = () => {
  const { locale, t } = useTranslations();

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
