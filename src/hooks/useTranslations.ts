"use client";

import { useEffect, useState, useMemo } from "react";
import { translations } from "@/lib/translations";
import { Locale } from "@/types/translations";

/**
 * Hook para gerenciar traduções e idioma da aplicação.
 * Detecta automaticamente o idioma do navegador e permite persistência da preferência do usuário.
 */
export function useTranslations() {
  const [locale, setLocale] = useState<Locale>("pt-BR");

  useEffect(() => {
    // Carrega idioma salvo ou detecta automaticamente
    const savedLanguage = localStorage.getItem("preferred-language") as Locale;

    if (
      savedLanguage &&
      (savedLanguage === "pt-BR" || savedLanguage === "en")
    ) {
      setLocale(savedLanguage);
    } else {
      // Fallback para detecção automática baseada no navegador
      const browserLang = navigator.language || "pt-BR";
      const detectedLocale = browserLang.startsWith("pt") ? "pt-BR" : "en";
      setLocale(detectedLocale);
    }
  }, []);

  // Memoiza as traduções para evitar recálculos desnecessários
  const t = useMemo(() => translations[locale], [locale]);

  return {
    t,
    locale,
  };
}
