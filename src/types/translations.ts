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
  about: {
    title: string;
    description: string;
  };
  projects: {
    title: string;
    viewProject: string;
    videoComingSoon: string;
    titles: {
      image2doc: string;
      notaryConnect: string;
    };
    descriptions: {
      image2doc: string;
      notaryConnect: string;
    };
  };
  academic: {
    title: string;
    viewCertificate: string;
  };
  stats: {
    repositories: string;
    contributions: string;
    experience: string;
  };
  footer: {
    copyright: string;
    madeWith: string;
  };
}

export type Locale = 'pt-BR' | 'en';
