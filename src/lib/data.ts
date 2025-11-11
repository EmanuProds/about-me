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
  FaTerminal,
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

export const academicRecords = [
  {
    id: 1,
    course: "React Native com Expo",
    institution: "Rocketseat",
    type: "Curso de Especialização",
    duration: "Cursando",
    description: "Curso intensivo focado no desenvolvimento de aplicações móveis nativas para iOS e Android utilizando TypeScript, React Native e Expo Framework, abrangendo desde conceitos fundamentais até técnicas avançadas de desenvolvimento mobile.",
    icon: "Clock",
    isClickable: false,
  },
  {
    id: 2,
    course: "Bootcamp React e C#",
    institution: "Dio.io",
    type: "Curso de Especialização",
    duration: "Cursando",
    description: "Programa completo de formação full-stack que combina desenvolvimento frontend moderno com TypeScript, React e Vite, e desenvolvimento backend robusto utilizando C# e ASP.NET, preparando para construção de aplicações web completas.",
    icon: "Clock",
    isClickable: false,
  },
  {
    id: 3,
    course: "LGPD e seus Serviços",
    institution: "ENNOR",
    type: "Curso de Especialização",
    duration: "2h",
    description: "Formação especializada em Lei Geral de Proteção de Dados (LGPD) que aborda os princípios fundamentais da legislação, responsabilidades das organizações e implementação prática de medidas de compliance para proteção de dados pessoais.",
    icon: "FaShieldAlt",
    certificateUrl: "/certificates/ENNOR-LGPD.pdf",
  },
  {
    id: 4,
    course: "Devlinks",
    institution: "Rocketseat",
    type: "Curso de Especialização",
    duration: "5h",
    description: "Curso introdutório aos fundamentos do desenvolvimento web moderno, cobrindo HTML5 semântico, CSS3 para estilização avançada, JavaScript para interatividade, controle de versão com Git e colaboração através do GitHub.",
    icon: "FaRocket",
    certificateUrl: "devlinks",
  },
  {
    id: 5,
    course: "Lógica de programação",
    institution: "Dev Samurai",
    type: "Curso de Especialização",
    duration: "18h",
    description: "Formação abrangente em lógica de programação que estabelece as bases fundamentais do pensamento computacional, desde algoritmos básicos e estruturas de controle até conceitos avançados como recursão, otimização e resolução de problemas complexos.",
    icon: "GiNinjaMask",
    isClickable: false,
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
  { Icon: SiTailwindcss, name: "TailwindCSS", color: "text-teal-500" },
  { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { Icon: SiExpress, name: "Express.js", color: "text-gray-700 dark:text-gray-400" },
  { Icon: SiNextdotjs, name: "Next.js", color: "text-gray-800 dark:text-white" },
  { Icon: SiVite, name: "Vite", color: "text-purple-500" },
  { Icon: SiExpo, name: "Expo", color: "text-slate-400" },
];

export const systemOperation: TechIcon[] = [
  { Icon: FaDocker, name: "Docker", color: "text-blue-400" },
  { Icon: SiSqlite, name: "SQLite", color: "text-blue-600" },
  { Icon: FaGit, name: "Git", color: "text-red-600" },
  { Icon: SiGithub, name: "GitHub", color: "text-gray-800 dark:text-gray-300" },
  { Icon: FaLinux, name: "Linux", color: "text-gray-600 dark:text-gray-200" },
  { Icon: FaTerminal, name: "ShellScript", color: "text-green-400" },
];
