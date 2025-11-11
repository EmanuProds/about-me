/**
 * Application translation system.
 * Centralizes all strings translated to Portuguese and English.
 */

import { ptBR } from "./pt-BR";
import { en } from "./en";
import { Translations, Locale } from "@/types/translations";

/**
 * Main object containing all translations organized by locale.
 * Used by the useTranslations hook to provide localized strings.
 */
export const translations: Record<Locale, Translations> = {
  "pt-BR": ptBR,
  en: en,
};

// Re-export individual translations for direct use if necessary
export { ptBR, en };
