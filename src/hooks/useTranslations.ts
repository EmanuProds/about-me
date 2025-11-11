'use client';

import { useEffect, useState, useMemo } from 'react';
import { translations } from '@/lib/translations';
import { Locale } from '@/types/translations';

export function useTranslations() {
  const [locale, setLocale] = useState<Locale>('pt-BR');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Locale;

    if (savedLanguage && (savedLanguage === 'pt-BR' || savedLanguage === 'en')) {
      setLocale(savedLanguage);
    } else {
      const browserLang = navigator.language || 'pt-BR';
      const detectedLocale = browserLang.startsWith('pt') ? 'pt-BR' : 'en';
      setLocale(detectedLocale);
    }
  }, []);

  const t = useMemo(() => translations[locale], [locale]);

  return {
    t,
    locale,
  };
}
