// src/types/index.d.ts

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string; // Caminho para a imagem
  tags: string[]; // Ex: ['Next.js', 'Tailwind CSS', 'TypeScript']
  githubUrl: string;
  demoUrl?: string; // Opcional
}

export interface Skill {
  name: string;
  icon: string; // Ex: 'FaReact' para FontAwesome React icon
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Ex: 'FaGithub'
}

export interface PortfolioData {
  name: string;
  title: string;
  profilePicture: string;
  about: string;
  email: string;
  projects: Project[];
  skills: Skill[];
  socialLinks: SocialLink[];
}