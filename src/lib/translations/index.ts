import { ptBR } from './pt-BR';
import { en } from './en';
import { Translations, Locale } from '@/types/translations';

export const translations: Record<Locale, Translations> = {
  'pt-BR': ptBR,
  'en': en,
};

export { ptBR, en };
