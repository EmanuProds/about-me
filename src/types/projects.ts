import { ElementType } from 'react';
import { LuComponent, LuType, LuCloud } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa";

export interface Technology {
  name: string;
  icon: ElementType;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  videoSrc: string;
  technologies: (keyof typeof technologies)[];
  projectUrl: string;
  githubUrl: string;
}

export interface ProjectCardProps extends Project {}

export const technologies: Record<string, Technology> = {
  react: { name: "React", icon: LuComponent, color: "text-sky-400" },
  typescript: { name: "TypeScript", icon: LuType, color: "text-blue-500" },
  nodejs: { name: "Node.js", icon: LuCloud, color: "text-green-500" },
  nextjs: { name: "Next.js", icon: FaGlobe, color: "text-white" },
  python: { name: "Python", icon: () => null, color: "text-blue-500" },
};
