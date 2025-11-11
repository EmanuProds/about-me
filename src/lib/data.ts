/**
 * Static portfolio data - academic records, projects and technologies.
 * Centralizes all information displayed in the application components.
 */

import { TechIcon } from "@/types/tech";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGit,
  FaLinux,
  FaTerminal,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiExpo,
  SiVite,
  SiSqlite,
  SiGithub,
} from "react-icons/si";

/**
 * Technology stacks organized by category
 */
export const TECH_STACKS = {
  /** Programming languages */
  languages: [
    { Icon: FaHtml5, name: "HTML", color: "text-orange-500" },
    { Icon: FaCss3, name: "CSS", color: "text-blue-500" },
    { Icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-700" },
    { Icon: FaPython, name: "Python", color: "text-blue-500" },
  ] as TechIcon[],

  /** Frameworks and libraries */
  frameworks: [
    { Icon: FaReact, name: "React", color: "text-cyan-600" },
    { Icon: SiTailwindcss, name: "TailwindCSS", color: "text-teal-500" },
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    {
      Icon: SiExpress,
      name: "Express.js",
      color: "text-gray-700 dark:text-gray-400",
    },
    {
      Icon: SiNextdotjs,
      name: "Next.js",
      color: "text-gray-800 dark:text-white",
    },
    { Icon: SiVite, name: "Vite", color: "text-purple-500" },
    { Icon: SiExpo, name: "Expo", color: "text-slate-400" },
  ] as TechIcon[],

  /** Tools and infrastructure */
  tools: [
    { Icon: FaDocker, name: "Docker", color: "text-blue-400" },
    { Icon: SiSqlite, name: "SQLite", color: "text-blue-600" },
    { Icon: FaGit, name: "Git", color: "text-red-600" },
    { Icon: SiGithub, name: "GitHub", color: "text-gray-800 dark:text-gray-300" },
    { Icon: FaLinux, name: "Linux", color: "text-gray-600 dark:text-gray-200" },
    { Icon: FaTerminal, name: "ShellScript", color: "text-green-400" },
  ] as TechIcon[],
} as const;

// Legacy exports for backward compatibility
export const langProgramming = TECH_STACKS.languages;
export const toolsTech = TECH_STACKS.frameworks;
export const systemOperation = TECH_STACKS.tools;

export const projects = [
  {
    id: 1,
    title: "Image2DOC",
    description:
      "A GTK4/Libadwaita application focused on OCR data extraction for document conversion, renaming and organization.",
    videoSrc: "/videos/image2doc.mp4",
    technologies: ["python"],
    projectUrl: "",
    githubUrl: "https://github.com/EmanuProds/image2doc",
  },
  {
    id: 2,
    title: "Notary Connect X (antigo)",
    description:
      "A local system with web interface, focused on automated and humanized customer service, using WhatsApp API",
    videoSrc: "/videos/notary-connect-old.mp4",
    technologies: ["html", "css", "javascript", "nodejs", "express.js"],
    projectUrl: "",
    githubUrl: "https://github.com/EmanuProds/notary-connect-old",
  },
];

/**
 * Mapping of technology keys to their icon data for projects
 */
export const technologies: Record<string, TechIcon> = {
  react: { Icon: FaReact, name: "React", color: "text-cyan-600" },
  typescript: { Icon: SiTypescript, name: "TypeScript", color: "text-blue-700" },
  nodejs: { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  nextjs: { Icon: SiNextdotjs, name: "Next.js", color: "text-white" },
  python: { Icon: FaPython, name: "Python", color: "text-blue-500" },
  html: { Icon: FaHtml5, name: "HTML", color: "text-orange-500" },
  css: { Icon: FaCss3, name: "CSS", color: "text-blue-500" },
  javascript: { Icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
  "express.js": { Icon: SiExpress, name: "Express.js", color: "text-gray-400" },
};

export const academicRecords = [
  {
    id: 1,
    course: "React Native com Expo",
    institution: "Rocketseat",
    type: "specializationCourse",
    duration: "In Progress",
    description:
      "Curso intensivo focado no desenvolvimento de aplicações móveis nativas para iOS e Android utilizando TypeScript, React Native e Expo Framework, abrangendo desde conceitos fundamentais até técnicas avançadas de desenvolvimento mobile.",
    icon: "Clock",
    isClickable: false,
  },
  {
    id: 2,
    course: "Bootcamp React e C#",
    institution: "Dio.io",
    type: "specializationCourse",
    duration: "In Progress",
    description:
      "Programa completo de formação full-stack que combina desenvolvimento frontend moderno com TypeScript, React e Vite, e desenvolvimento backend robusto utilizando C# e ASP.NET, preparando para construção de aplicações web completas.",
    icon: "Clock",
    isClickable: false,
  },
  {
    id: 3,
    course: "LGPD e seus Serviços",
    institution: "ENNOR",
    type: "specializationCourse",
    duration: "2h",
    description:
      "Formação especializada em Lei Geral de Proteção de Dados (LGPD) que aborda os princípios fundamentais da legislação, responsabilidades das organizações e implementação prática de medidas de compliance para proteção de dados pessoais.",
    icon: "FaShieldAlt",
    certificateUrl: "/certificates/ENNOR-LGPD.pdf",
  },
  {
    id: 4,
    course: "Devlinks",
    institution: "Rocketseat",
    type: "specializationCourse",
    duration: "5h",
    description:
      "Curso introdutório aos fundamentos do desenvolvimento web moderno, cobrindo HTML5 semântico, CSS3 para estilização avançada, JavaScript para interatividade, controle de versão com Git e colaboração através do GitHub.",
    icon: "FaRocket",
    certificateUrl: "devlinks",
  },
  {
    id: 5,
    course: "Lógica de programação",
    institution: "Dev Samurai",
    type: "specializationCourse",
    duration: "18h",
    description:
      "Formação abrangente em lógica de programação que estabelece as bases fundamentais do pensamento computacional, desde algoritmos básicos e estruturas de controle até conceitos avançados como recursão, otimização e resolução de problemas complexos.",
    icon: "GiNinjaMask",
    isClickable: false,
  },
];

/**
 * Maps icon name strings to React icon components for social links
 * @param iconName - The string name of the icon
 * @returns The corresponding React icon component
 */
export const getSocialIcon = (iconName: string): React.ComponentType<any> => {
  switch (iconName) {
    case "FaLinkedin":
      return FaLinkedin;
    case "FaWhatsapp":
      return FaWhatsapp;
    case "FaGithub":
      return FaGithub;
    default:
      return FaGithub;
  }
};
