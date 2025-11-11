/**
 * Translation keys for the application
 */
export interface Translations {
  /** Header navigation translations */
  header: {
    home: string;
    about: string;
    projects: string;
    education: string;
  };
  /** Profile section translations */
  profile: {
    name: string;
    title: string;
  };
  /** About section translations */
  about: {
    title: string;
    description: string;
  };
  /** GitHub section translations */
  github: {
    publicRepos: string;
    contributions: (year: number) => string;
    yearsExperience: string;
  };
  /** Projects section translations */
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
  /** Academic section translations */
  academic: {
    title: string;
    viewCertificate: string;
    certificateNotIssued: string;
    types: {
      specializationCourse: string;
    };
    titles: {
      reactNativeExpo: string;
      bootcampReactCSharp: string;
      lgpdEnnor: string;
      devlinks: string;
      logicaProgramacao: string;
    };
    descriptions: {
      reactNativeExpo: string;
      bootcampReactCSharp: string;
      lgpdEnnor: string;
      devlinks: string;
      logicaProgramacao: string;
    };
  };
  /** Footer translations */
  footer: {
    copyright: string;
  };
}

/**
 * Supported locales for the application
 */
export type Locale = "pt-BR" | "en";
