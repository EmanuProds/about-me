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
    experience: "Experience",
    projects: "Projects",
    education: "Education",
  },
  profile: {
    name: "Emanuel da Costa Pereira",
    title: "Software Engineer — Building ERPs & Automation",
  },
  about: {
    title: "About me",
    description: `Hello, my name is Emanuel da Costa Pereira — a software engineer who enjoys turning complex business rules into reliable, automated software. I'm the sole software developer at Perains ON Technology (since May 2026), where I researched, architected, and shipped a complete ERP for Brazilian accounting — from database schema and tax rules to API, UI, documents generation and CI. I also run my own cloud infrastructure on Oracle Cloud.

Currently

• Perains ON Sistemas — designing and building my own SaaS end to end: an API-first Go backend (chi, sqlc, pgx, OpenAPI/orval) and an Angular + TypeScript frontend, with a payroll workflow (preview, findings, operator approval, confirm/cancel), CSV export, audit trails and CI on every change.

• Oracle Cloud Infrastructure — provisioning, administering and optimizing OCI environments with Docker containers and virtual networks, always aiming at high availability and cost efficiency.

• AI-assisted engineering — designing my own AI agent harness on OpenCode: custom subagents and skills, LSP and MCP tool integration, SQLite-backed persistent memory, and a multi-provider model router with a 75-model evaluation battery.

Background

• Software Development Intern at Campos Development (Dec 2025 — May 2026): built a scalable marketplace / notary registry system as serverless microservices on AWS Lambda, with a React frontend, Python backend and Amazon Aurora PostgreSQL.

• Bachelor's in Computer Science at Descomplica Uniamerica (2025 — 2029), with a focus on Cloud Computing and Software Architecture.

• Linux daily driver — I automate my own post-install workflows and build tooling for Arch and Fedora.`,
  },
  experience: {
    title: "Experience",
    entries: {
      perains: {
        role: "Software Engineer",
        period: "May 2026 — Present",
        summary:
          "Sole software developer building an ERP for Brazilian accounting from zero — schema, business rules, API and UI. API-first Go backend and Angular frontend; payroll workflow with approval and audit trails; Oracle Cloud infrastructure and CI on every change.",
      },
      campos: {
        role: "Software Development Intern",
        period: "Dec 2025 — May 2026",
        summary:
          "Developed a scalable marketplace / notary registry system as serverless microservices on AWS Lambda — React frontend, Python backend and Amazon Aurora PostgreSQL provisioned via DDL.",
      },
    },
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
    caseStudy: "Private — Case study",
    titles: {
      perainsErp: "Perains ON Sistemas",
      clientOn: "Client On",
      image2file: "Image2File",
      omnicatalog: "OmniCatalog",
      archpiFedorapi: "archpi & fedorapi",
      aiHarness: "AI Agent Harness (OpenCode)",
    },
    descriptions: {
      perainsErp:
        "My own SaaS for Brazilian accounting — designed and built from zero: database schema, tax and payroll rules, API-first Go backend, Angular frontend, document generation, and CI.",
      clientOn:
        "Customer service platform that organizes incoming WhatsApp messages by department. Built with Next.js, Express, PostgreSQL and whatsapp-web.js, orchestrated with Docker Compose.",
      image2file:
        "A GTK4/Libadwaita desktop application that converts document images into organized PDFs using OCR (Tesseract) — auto-detects page numbers and allows manual correction when OCR fails.",
      omnicatalog:
        "Go CLI that discovers, validates, and catalogs free models from OmniRoute — built to measure real tool-use capability across providers.",
      archpiFedorapi:
        "Shell toolkits that turn a fresh Arch Linux or Fedora install into a complete development workstation in minutes — dotfiles, packages, and configs fully automated.",
      aiHarness:
        "A personal AI agent harness built on OpenCode — custom subagents and skills, LSP and MCP tool integration, SQLite-backed persistent memory, and a multi-provider model router with a 75-model evaluation battery.",
    },
  },
  academic: {
    title: "Education",
    viewCertificate: "View certificate",
    certificateNotIssued: "Certificate not issued",
    inProgress: "In Progress",
    types: {
      specializationCourse: "Specialization Course",
      degree: "Bachelor's Degree",
    },
    titles: {
      bachelorCs: "Bachelor's in Computer Science",
      reactNativeExpo: "React Native with Expo",
      bootcampReactCSharp: "Bootcamp React e C#",
      lgpdEnnor: "LGPD and its Services",
      devlinks: "Devlinks",
      logicaProgramacao: "Programming Logic",
    },
    descriptions: {
      bachelorCs:
        "Undergraduate program in Computer Science at Descomplica Uniamerica (2025 — 2029) covering algorithms, data structures, software engineering, databases, distributed systems and computer networks.",
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
