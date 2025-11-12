/**
 * English (en) translations.
 * Contains all user interface strings translated to English.
 */

import { Translations } from "@/types/translations";

export const en: Translations = {
  // Navigation and header translations
  header: {
    home: "Home",
    about: "About",
    projects: "Projects",
    education: "Education",
  },
  profile: {
    name: "Emanuel Pereira",
    title: "Fullstack Developer | DevOps | IT Technician",
  },
  about: {
    title: "About me",
    description: `Hello, my name is Emanuel da Costa Pereira, i am a Fullstack developer with a solid foundation in technology, driven by curiosity and the continuous pursuit of innovation and learning. I have practical experience in creating automation and process optimization solutions, combined with a strong aptitude for infrastructure and technical support. My passion for sharing knowledge was consolidated through my experience as an IT instructor, emphasizing my ability to guide and provide technical leadership.

Development Highlights and Projects

• Customer Service Platform Development - Notary Connect X (TypeScript, React/React Native, TailwindCSS/Nativewind, Expo, Node.js, Express.js, Python, SQLite): Creation and implementation of integrated WhatsApp solutions for customer service optimization, including sector redirection features and file management.

• Technical Automation: Demonstration of programming aptitude through the development of a shell script to automate the complex post-installation of Arch Linux.

Technology and Infrastructure Experience

• IT Support and Maintenance: Provision of IT infrastructure services, including maintenance and technical support for computers, local networks and servers, aiming at operational continuity and security.

• IT Instructor (Microlins): Guidance and assistance to students in administration, computing, programming, design and marketing courses, reinforcing communication skills and teaching of technical concepts.

• Digital Transition and Management: Proactive role in an organization's digital transition, responsible for technical production of YouTube live streams, audiovisual and graphic content editing, and website and app management.

Multidisciplinary Experience

• Extrajudicial Services Support: Specialized work in notary office routines (RCPN and Notary Offices), providing assistance in searches, certificate issuance, Hague apostilles and index management.

• Complementary Services: Experience in document digitization, customer service, sales and inventory organization, complementing a proactive and versatile profile.`,
  },
  github: {
    publicRepos: "Public Repositories",
    contributions: (year: number) => `Contributions in ${year}`,
    yearsExperience: "Years of Experience",
  },
  projects: {
    title: "Some Projects",
    viewProject: "View Project",
    videoComingSoon: "Video coming soon",
    titles: {
      image2doc: "Image2DOC",
      notaryConnect: "Notary Connect X (old)",
    },
    descriptions: {
      image2doc:
        "A GTK4/Libadwaita application focused on OCR data extraction for document conversion, renaming and organization.",
      notaryConnect:
        "A local system with web interface, focused on automated and humanized customer service, using WhatsApp API",
    },
  },
  academic: {
    title: "Education",
    viewCertificate: "View certificate",
    certificateNotIssued: "Certificate not issued",
    inProgress: "In Progress",
    types: {
      specializationCourse: "Specialization Course",
    },
    titles: {
      reactNativeExpo: "React Native with Expo",
      bootcampReactCSharp: "Akad - Fullstack Developer",
      lgpdEnnor: "LGPD and its Services",
      devlinks: "Devlinks",
      logicaProgramacao: "Programming Logic",
    },
    descriptions: {
      reactNativeExpo:
        "Intensive course focused on developing native mobile applications for iOS and Android using TypeScript, React Native and Expo Framework, covering everything from fundamental concepts to advanced mobile development techniques.",
      bootcampReactCSharp:
        "Complete full-stack training program that combines modern frontend development with TypeScript, React and Vite, and robust backend development using C# and ASP.NET, preparing for building complete web applications.",
      lgpdEnnor:
        "Specialized training in General Data Protection Law (LGPD) that addresses the fundamental principles of the legislation, organizational responsibilities and practical implementation of compliance measures for personal data protection.",
      devlinks:
        "Introductory course to modern web development fundamentals, covering semantic HTML5, advanced CSS3 styling, JavaScript for interactivity, version control with Git and collaboration through GitHub.",
      logicaProgramacao:
        "Comprehensive training in programming logic that establishes the fundamental bases of computational thinking, from basic algorithms and control structures to advanced concepts such as recursion, optimization and complex problem solving.",
    },
  },
  footer: {
    copyright: " All rights reserved.",
  },
};
