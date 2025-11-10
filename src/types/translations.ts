export interface Translations {
  header: {
    home: string;
    about: string;
    projects: string;
    education: string;
  };
  profile: {
    name: string;
    title: string;
  };
  footer: {
    copyright: string;
    madeWith: string;
  };
  loading: {
    stats: string;
  };
}

export type Locale = 'pt-BR' | 'en';
