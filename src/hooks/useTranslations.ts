"use client";

import { useEffect, useState, useMemo } from "react";
import { translations } from "@/lib/translations";
import { Locale } from "@/types/translations";

/**
 * Hook to manage application translations and language.
 * Automatically detects browser language and allows persistence of user preference.
 */
export function useTranslations() {
  const [locale, setLocale] = useState<Locale>("pt-BR");

  useEffect(() => {
    // Load saved language or detect automatically
    const savedLanguage = localStorage.getItem("preferred-language") as Locale;

    if (
      savedLanguage &&
      (savedLanguage === "pt-BR" || savedLanguage === "en")
    ) {
      setLocale(savedLanguage);
    } else {
      // Fallback to automatic detection based on browser
      const browserLang = navigator.language || "pt-BR";
      const detectedLocale = browserLang.startsWith("pt") ? "pt-BR" : "en";
      setLocale(detectedLocale);
    }
  }, []);

  // Memoize translations to avoid unnecessary recalculations
  const t = useMemo(() => translations[locale], [locale]);

  return {
    t,
    locale,
  };
}
