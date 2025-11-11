/**
 * Application translation system.
 * Centralizes all strings translated to Portuguese and English.
 */

import { ptBR } from "./pt-BR";
import { en } from "./en";
import { Translations, Locale } from "@/types/translations";

/**
 * Available application locales
 */
export const AVAILABLE_LOCALES: Locale[] = ["pt-BR", "en"] as const;

/**
 * Default application locale
 */
export const DEFAULT_LOCALE: Locale = "pt-BR";

/**
 * Main translations object containing all localized strings organized by locale.
 * Used by the useTranslations hook to provide localized content throughout the app.
 */
export const translations: Record<Locale, Translations> = {
  "pt-BR": ptBR,
  en,
} as const;

// Re-export individual locale translations for direct access if needed
export { ptBR, en };
