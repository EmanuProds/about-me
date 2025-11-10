import { ElementType } from "react";
import { LuComponent, LuType } from "react-icons/lu";
import {
  FaGlobe,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";

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
  react: { name: "React", icon: LuComponent, color: "text-cyan-600" },
  typescript: { name: "TypeScript", icon: LuType, color: "text-blue-700" },
  nodejs: { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  nextjs: { name: "Next.js", icon: FaGlobe, color: "text-white" },
  python: { name: "Python", icon: FaPython, color: "text-blue-500" },
  html: { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  css: { name: "CSS", icon: FaCss3, color: "text-blue-500" },
  javascript: { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
  "express.js": { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
};
