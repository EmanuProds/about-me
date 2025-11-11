import { useState, useEffect } from "react";
import { Locale } from "@/types/translations";

/**
 * Custom hook for language toggle functionality
 * @returns Object containing current locale, toggle function, flag emoji, and title
 */
export const useLanguageToggle = () => {
  // Start with default locale for SSR consistency
  const [locale, setLocale] = useState<Locale>("pt-BR");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load locale from localStorage on client side
  useEffect(() => {
    const storedLocale = localStorage.getItem("preferred-language") as Locale;
    if (storedLocale && (storedLocale === "pt-BR" || storedLocale === "en")) {
      setLocale(storedLocale);
    }
    setIsLoaded(true);
  }, []);

  const toggleLanguage = () => {
    const newLocale: Locale = locale === "pt-BR" ? "en" : "pt-BR";
    setLocale(newLocale);
    localStorage.setItem("preferred-language", newLocale);
    window.location.reload();
  };

  const flag = locale === "pt-BR" ? "🇧🇷" : "🇺🇸";
  const title = locale === "pt-BR" ? "Switch to English" : "Mudar para Português";

  return {
    locale,
    toggleLanguage,
    flag,
    title,
    isLoaded,
  };
};
