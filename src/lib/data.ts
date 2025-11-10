import { AcademicRecord } from '@/types/academic';
import { Project } from '@/types/projects';
import { TechIcon } from '@/types/tech';
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
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiExpo,
  SiVite,
  SiSqlite,
} from "react-icons/si";

export const academicRecords = [
  {
    id: 1,
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "Faculdade Tech",
    type: "Graduação Tecnológica",
    duration: "2022 - 2025",
    description:
      "Focado no desenvolvimento de software, banco de dados e gestão de projetos. Ênfase em arquitetura de microsserviços e desenvolvimento Full-stack.",
    certificateUrl: "https://minhafaculdade.com/certificado/ads",
  },
  {
    id: 2,
    course: "Bootcamp React & Next.js",
    institution: "Rocketseat",
    type: "Curso de Especialização",
    duration: "6 meses (400h)",
    description:
      "Imersão intensiva no ecossistema React, incluindo Redux, Testes Unitários e Integração, Performance Web e o framework Next.js.",
    certificateUrl: "https://rocketseat.com/certificado/bootcamp-rn",
  },
  {
    id: 3,
    course: "Certificação AWS Cloud Practitioner",
    institution: "Amazon Web Services (AWS)",
    type: "Certificação Profissional",
    duration: "2024",
    description:
      "Certificação que valida o conhecimento fundamental sobre a Nuvem AWS, seus serviços principais, segurança, arquitetura e modelo de faturamento.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Image2DOC",
    description:
      "Uma aplicação em GTK4/Libadwaita com foco em extração de dados via OCR para conversão, renomiação e organização de documentos.",
    videoSrc: "/videos/image2doc.mp4",
    technologies: ["python"],
    projectUrl: "",
    githubUrl: "https://github.com/EmanuProds/tarefas-api",
  },
  {
    id: 2,
    title: "Notary Connect X (antigo)",
    description:
      "Um sistema local com interface web, focado em antendimento automatizado e humanizado, utilizando a API do WhatsApp",
    videoSrc: "",
    technologies: ["html", "css", "javascript", "nodejs", "express.js"],
    projectUrl: "",
    githubUrl: "https://github.com/EmanuProds/e-commerce-ui",
  },
];

export const langProgramming: TechIcon[] = [
  { Icon: FaHtml5, name: "HTML", color: "text-orange-500" },
  { Icon: FaCss3, name: "CSS", color: "text-blue-500" },
  { Icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
  { Icon: SiTypescript, name: "TypeScript", color: "text-blue-700" },
  { Icon: FaPython, name: "Python", color: "text-blue-500" },
];

export const toolsTech: TechIcon[] = [
  { Icon: FaReact, name: "React", color: "text-cyan-600" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-500" },
  { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { Icon: SiExpress, name: "Express.js", color: "text-gray-400" },
  { Icon: SiNextdotjs, name: "Next.js", color: "text-white" },
  { Icon: SiVite, name: "Vite", color: "text-purple-500" },
  { Icon: SiExpo, name: "Expo", color: "text-slate-400" },
];

export const systemOperation: TechIcon[] = [
  { Icon: FaDocker, name: "Docker", color: "text-blue-400" },
  { Icon: SiSqlite, name: "SQLite", color: "text-blue-600" },
  { Icon: FaGit, name: "Git", color: "text-red-600" },
  { Icon: FaLinux, name: "Linux", color: "text-gray-200" },
];
