/**
 * Translation keys for the application
 */
export interface Translations {
  /** Header navigation translations */
  header: {
    home: string;
    about: string;
    experience: string;
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
  /** Experience section translations */
  experience: {
    title: string;
    entries: {
      /** Perains ON Technology role */
      perains: ExperienceEntryText;
      /** Campos Development role */
      campos: ExperienceEntryText;
    };
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
    /** Badge shown on private projects without a public link */
    caseStudy: string;
    titles: {
      perainsErp: string;
      clientOn: string;
      image2file: string;
      omnicatalog: string;
      archpiFedorapi: string;
      aiHarness: string;
    };
    descriptions: {
      perainsErp: string;
      clientOn: string;
      image2file: string;
      omnicatalog: string;
      archpiFedorapi: string;
      aiHarness: string;
    };
  };
  /** Academic section translations */
  academic: {
    title: string;
    viewCertificate: string;
    certificateNotIssued: string;
    inProgress: string;
    types: {
      specializationCourse: string;
      degree: string;
    };
    titles: {
      bachelorCs: string;
      reactNativeExpo: string;
      bootcampReactCSharp: string;
      lgpdEnnor: string;
      devlinks: string;
      logicaProgramacao: string;
    };
    descriptions: {
      bachelorCs: string;
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
 * Localized text for a single experience entry
 */
export interface ExperienceEntryText {
  /** Job title */
  role: string;
  /** Employment period */
  period: string;
  /** Short summary of scope and responsibilities */
  summary: string;
}

/**
 * Supported locales for the application
 */
export type Locale = "pt-BR" | "en";
