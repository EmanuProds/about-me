"use client";

import { useState, useEffect, useMemo } from "react";
import { translations, DEFAULT_LOCALE } from "@/lib/translations";
import { Locale } from "@/types/translations";

/**
 * Detects the appropriate locale based on saved preference or browser language
 * Safe for server-side rendering
 */
const detectLocale = (): Locale => {
  // Check for saved language preference (only on client side)
  if (typeof window !== "undefined") {
    try {
      const savedLanguage = localStorage.getItem("preferred-language") as Locale;
      if (savedLanguage && (savedLanguage === "pt-BR" || savedLanguage === "en")) {
        return savedLanguage;
      }
    } catch (error) {
      // localStorage might not be available in some environments
      console.warn("Could not access localStorage:", error);
    }
  }

  // Fallback to automatic detection based on browser language (client-side only)
  if (typeof navigator !== "undefined") {
    const browserLang = navigator.language;
    return browserLang.startsWith("pt") ? "pt-BR" : "en";
  }

  // Server-side default
  return "pt-BR";
};

/**
 * Hook to manage application translations and language.
 * Automatically detects browser language and allows persistence of user preference.
 */
export function useTranslations() {
  // Start with default locale for SSR consistency
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  // Update locale on client side if different from default
  useEffect(() => {
    const detectedLocale = detectLocale();
    if (detectedLocale !== DEFAULT_LOCALE) {
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
