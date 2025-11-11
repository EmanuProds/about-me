/**
 * Sistema de traduções da aplicação.
 * Centraliza todas as strings traduzidas para português e inglês.
 */

import { ptBR } from "./pt-BR";
import { en } from "./en";
import { Translations, Locale } from "@/types/translations";

/**
 * Objeto principal contendo todas as traduções organizadas por locale.
 * Usado pelo hook useTranslations para fornecer strings localizadas.
 */
export const translations: Record<Locale, Translations> = {
  "pt-BR": ptBR,
  en: en,
};

// Re-export das traduções individuais para uso direto se necessário
export { ptBR, en };
