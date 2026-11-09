/**
 * Static portfolio data - academic records, projects, experience and technologies.
 * Centralizes all information displayed in the application components.
 */

import { TechIcon } from "@/types/tech";
import { Experience } from "@/types/experience";
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
  FaVial,
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
  SiGo,
  SiAngular,
  SiPostgresql,
  SiNestjs,
  SiOracle,
  SiOpenapiinitiative,
  SiVitest,
  SiAmazonwebservices,
  SiGnubash,
} from "react-icons/si";

/**
 * Technology stacks organized by category
 */
export const TECH_STACKS = {
  /** Programming languages */
  languages: [
    { Icon: SiGo, name: "Go", color: "text-cyan-500" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-700" },
    { Icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
    { Icon: FaPython, name: "Python", color: "text-blue-500" },
    { Icon: FaHtml5, name: "HTML", color: "text-orange-500" },
    { Icon: FaCss3, name: "CSS", color: "text-blue-500" },
  ] as TechIcon[],

  /** Frameworks and libraries */
  frameworks: [
    { Icon: SiAngular, name: "Angular", color: "text-red-600" },
    { Icon: FaReact, name: "React", color: "text-cyan-600" },
    { Icon: SiNextdotjs, name: "Next.js", color: "text-gray-800 dark:text-white" },
    { Icon: SiNestjs, name: "NestJS", color: "text-red-500" },
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    {
      Icon: SiExpress,
      name: "Express.js",
      color: "text-gray-700 dark:text-gray-400",
    },
    { Icon: SiTailwindcss, name: "TailwindCSS", color: "text-teal-500" },
    { Icon: SiVite, name: "Vite", color: "text-purple-500" },
    { Icon: SiExpo, name: "Expo", color: "text-slate-400" },
  ] as TechIcon[],

  /** Tools and infrastructure */
  tools: [
    { Icon: FaDocker, name: "Docker", color: "text-blue-400" },
    { Icon: SiOracle, name: "Oracle Cloud", color: "text-red-700" },
    { Icon: SiAmazonwebservices, name: "AWS", color: "text-amber-500" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-600" },
    { Icon: SiSqlite, name: "SQLite", color: "text-blue-600" },
    { Icon: SiOpenapiinitiative, name: "OpenAPI", color: "text-green-600" },
    { Icon: SiVitest, name: "Vitest", color: "text-green-500" },
    { Icon: FaVial, name: "Playwright", color: "text-green-600" },
    { Icon: FaGit, name: "Git", color: "text-red-600" },
    { Icon: SiGithub, name: "GitHub", color: "text-gray-800 dark:text-gray-300" },
    { Icon: FaLinux, name: "Linux", color: "text-gray-600 dark:text-gray-200" },
    { Icon: SiGnubash, name: "ShellScript", color: "text-green-400" },
  ] as TechIcon[],
} as const;

// Legacy exports for backward compatibility
export const langProgramming = TECH_STACKS.languages;
export const toolsTech = TECH_STACKS.frameworks;
export const systemOperation = TECH_STACKS.tools;

/**
 * Professional experience, most recent first. Rendered by the compact
 * Experience timeline; translated summaries live in the locale files.
 */
export const experienceEntries: Experience[] = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Perains ON Technology",
    period: "May 2026 — Present",
    summary:
      "Sole software developer building an ERP for Brazilian accounting from zero — schema, business rules, API and UI. Payroll workflow (preview, findings, approval, confirm/cancel) with CSV export and audit trails; API-first Go backend (chi, sqlc, pgx, OpenAPI/orval) and Angular frontend; Oracle Cloud infrastructure and CI on every change.",
    technologies: ["go", "angular", "typescript", "postgresql", "docker", "openapi"],
  },
  {
    id: 2,
    role: "Software Development Intern",
    company: "Campos Development",
    period: "Dec 2025 — May 2026",
    summary:
      "Developed a scalable marketplace / notary registry system as serverless microservices on AWS Lambda. Built the React frontend and Python backend, with Amazon Aurora PostgreSQL provisioned via DDL.",
    technologies: ["react", "python", "postgresql", "aws", "typescript"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Perains ON ERP",
    description:
      "Sole developer of a private ERP for Brazilian accounting — designed and built from zero: database schema, tax and payroll rules, API-first Go backend, Angular frontend, document generation, and CI.",
    technologies: ["go", "angular", "typescript", "postgresql", "docker", "openapi"],
    projectUrl: "",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Client On",
    description:
      "Customer service platform that organizes incoming WhatsApp messages by department. Built with Next.js, Express, PostgreSQL and whatsapp-web.js, orchestrated with Docker Compose.",
    videoSrc: "/videos/client-on.mp4",
    technologies: [
      "nextjs",
      "typescript",
      "express.js",
      "postgresql",
      "docker",
      "react",
    ],
    projectUrl: "",
    githubUrl: "https://github.com/EmanuProds/client-on",
  },
  {
    id: 3,
    title: "Image2File",
    description:
      "A GTK4/Libadwaita desktop application that converts document images into organized PDFs using OCR (Tesseract) — auto-detects page numbers and allows manual correction when OCR fails.",
    videoSrc: "/videos/image2doc.mp4",
    technologies: ["python"],
    projectUrl: "",
    githubUrl: "https://github.com/EmanuProds/image2file",
  },
  {
    id: 4,
    title: "OmniCatalog",
    description:
      "Go CLI that discovers, validates, and catalogs free models from OmniRoute — built to measure real tool-use capability across providers.",
    technologies: ["go"],
    projectUrl: "",
    githubUrl: "https://github.com/EmanuProds/omnicatalog",
  },
  {
    id: 5,
    title: "archpi & fedorapi",
    description:
      "Shell toolkits that turn a fresh Arch Linux or Fedora install into a complete development workstation in minutes — dotfiles, packages, and configs fully automated.",
    technologies: ["bash", "linux"],
    projectUrl: "",
    githubUrl: "https://github.com/EmanuProds/archpi",
  },
  {
    id: 6,
    title: "AI Agent Harness (OpenCode)",
    description:
      "A personal AI agent harness built on OpenCode — custom subagents and skills, LSP and MCP tool integration, SQLite-backed persistent memory, and a multi-provider model router with a 75-model evaluation battery.",
    technologies: ["typescript", "python", "bash"],
    projectUrl: "",
    githubUrl: "https://github.com/EmanuProds/dotfiles",
  },
];

/**
 * Mapping of technology keys to their icon data for projects
 */
export const technologies: Record<string, TechIcon> = {
  go: { Icon: SiGo, name: "Go", color: "text-cyan-500" },
  angular: { Icon: SiAngular, name: "Angular", color: "text-red-600" },
  react: { Icon: FaReact, name: "React", color: "text-cyan-600" },
  typescript: { Icon: SiTypescript, name: "TypeScript", color: "text-blue-700" },
  javascript: { Icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
  nodejs: { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  nextjs: { Icon: SiNextdotjs, name: "Next.js", color: "text-white" },
  nestjs: { Icon: SiNestjs, name: "NestJS", color: "text-red-500" },
  python: { Icon: FaPython, name: "Python", color: "text-blue-500" },
  html: { Icon: FaHtml5, name: "HTML", color: "text-orange-500" },
  css: { Icon: FaCss3, name: "CSS", color: "text-blue-500" },
  "express.js": { Icon: SiExpress, name: "Express.js", color: "text-gray-400" },
  postgresql: { Icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-600" },
  docker: { Icon: FaDocker, name: "Docker", color: "text-blue-400" },
  openapi: {
    Icon: SiOpenapiinitiative,
    name: "OpenAPI",
    color: "text-green-600",
  },
  aws: { Icon: SiAmazonwebservices, name: "AWS", color: "text-amber-500" },
  bash: { Icon: SiGnubash, name: "ShellScript", color: "text-green-400" },
  linux: { Icon: FaLinux, name: "Linux", color: "text-gray-600 dark:text-gray-200" },
  terminal: { Icon: FaTerminal, name: "ShellScript", color: "text-green-400" },
};

export const academicRecords = [
  {
    id: 1,
    course: "Bachelor's in Computer Science",
    institution: "Descomplica Uniamerica",
    type: "degree",
    duration: "2025 — 2029",
    description:
      "Undergraduate program in Computer Science covering algorithms, data structures, software engineering, databases, distributed systems, and computer networks.",
    icon: "FaGraduationCap",
    isClickable: false,
  },
  {
    id: 2,
    course: "React Native com Expo",
    institution: "Rocketseat",
    type: "specializationCourse",
    duration: "In Progress",
    description:
      "Intensive course focused on developing native mobile applications for iOS and Android using TypeScript, React Native and Expo Framework, covering everything from fundamental concepts to advanced mobile development techniques.",
    icon: "Clock",
    isClickable: false,
  },
  {
    id: 3,
    course: "Bootcamp React e C#",
    institution: "Dio.io",
    type: "specializationCourse",
    duration: "In Progress",
    description:
      "Complete full-stack training program that combines modern frontend development with TypeScript, React and Vite, and robust backend development using C# and ASP.NET, preparing for building complete web applications.",
    icon: "Clock",
    isClickable: false,
  },
  {
    id: 4,
    course: "LGPD e seus Serviços",
    institution: "ENNOR",
    type: "specializationCourse",
    duration: "2h",
    description:
      "Specialized training in General Data Protection Law (LGPD) that addresses the fundamental principles of the legislation, organizational responsibilities and practical implementation of compliance measures for personal data protection.",
    icon: "FaShieldAlt",
    certificateUrl: "/certificates/ENNOR-LGPD.pdf",
  },
  {
    id: 5,
    course: "Devlinks",
    institution: "Rocketseat",
    type: "specializationCourse",
    duration: "5h",
    description:
      "Introductory course to modern web development fundamentals, covering semantic HTML5, advanced CSS3 styling, JavaScript for interactivity, version control with Git and collaboration through GitHub.",
    icon: "FaRocket",
    certificateUrl: "devlinks",
  },
  {
    id: 6,
    course: "Lógica de programação",
    institution: "Dev Samurai",
    type: "specializationCourse",
    duration: "18h",
    description:
      "Comprehensive training in programming logic that establishes the fundamental bases of computational thinking, from basic algorithms and control structures to advanced concepts such as recursion, optimization and complex problem solving.",
    icon: "GiNinjaMask",
    isClickable: false,
  },
];

/**
 * Maps icon name strings to React icon components for social links
 * @param iconName - The string name of the icon
 * @returns The corresponding React icon component
 */
export const getSocialIcon = (
  iconName: string
): React.ComponentType<{ className?: string }> => {
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
