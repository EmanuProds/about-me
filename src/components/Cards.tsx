"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  FaPlay,
  FaCode,
  FaGlobe,
  FaDatabase,
  FaCloud,
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
import { LuZap, LuDatabase, LuType, LuLink, LuComponent } from "react-icons/lu";

import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiExpo,
  SiVite,
  SiSqlite,
} from "react-icons/si";

interface Technology {
  name: string;
  icon: React.ElementType;
  color: string;
}

const technologies: Record<string, Technology> = {
  
  react: { name: "React", icon: LuComponent, color: "text-sky-400" },
  typescript: { name: "TypeScript", icon: LuType, color: "text-blue-500" },
  nodejs: { name: "Node.js", icon: FaCloud, color: "text-green-500" },
  nextjs: { name: "Next.js", icon: FaGlobe, color: "text-white" },
};

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  videoSrc: string;
  technologies: (keyof typeof technologies)[];
  projectUrl: string;
  githubUrl: string;
}

const projects: ProjectCardProps[] = [
  {
    id: 1,
    title: "Image2DOC",
    description:
      "Uma aplicação em GTK4/Libadwaita com foco em extração de dados via OCR para conversão, renomiação e organização de documentos.",
    videoSrc: "/videos/image2docVideo.mp4",
    technologies: ["python", "typescript", "nodejs"],
    projectUrl: "https://seuprojeto.com/tarefas",
    githubUrl: "https://github.com/EmanuProds/tarefas-api",
  },
  {
    id: 2,
    title: "Landing Page de E-commerce",
    description:
      "Uma landing page moderna e totalmente responsiva para um e-commerce fictício, com foco em usabilidade e design mobile-first.",
    videoSrc: "https://cdn.example.com/project-video-2.mp4",
    technologies: ["nextjs", "typescript", "react"],
    projectUrl: "https://seuprojeto.com/ecommerce",
    githubUrl: "https://github.com/EmanuProds/e-commerce-ui",
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  videoSrc,
  technologies: techKeys,
  projectUrl,
  githubUrl,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const cardElement = cardRef.current;

    if (!videoElement || !cardElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play().catch((error) => {
            if (error.name !== "NotAllowedError") {
              console.error("Erro ao tentar dar play no vídeo:", error);
            }
          });
        } else {
          videoElement.pause();
          videoElement.currentTime = 0;
        }
      },
      {
        root: null, // Observa em relação à viewport
        rootMargin: "0px",
        threshold: 0.5, // 50% do card deve estar visível
      },
    );

    observer.observe(cardElement);

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, []);

  const projectTechs = techKeys
    .map((key) => technologies[key])
    .filter((t) => t);

  return (
    <div
      ref={cardRef}
      className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] border border-gray-700 w-full"
    >
      <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://placehold.co/600x400/1f2937/ffffff?text=Loading+Video"
        >
          Seu navegador não suporta a tag de vídeo.
        </video>
        <div className="absolute inset-0 flex items-center justify-center opacity-50 text-white pointer-events-none">
          <FaPlay className="w-16 h-16" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 h-20 overflow-hidden">{description}</p>

        <div className="flex flex-wrap gap-3 mb-6 min-h-10 items-center">
          {projectTechs.map((tech) => {
            const Icon = tech.icon;
            return (
              <span
                key={tech.name}
                className={`flex items-center text-sm font-medium px-3 py-1 rounded-full ${tech.color} bg-gray-700/50`}
                title={tech.name}
              >
                <Icon className="w-6 h-8" />
              </span>
            );
          })}
        </div>

        <div className="flex justify-start space-x-4">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-colors duration-200 text-sm font-semibold shadow-md"
            aria-label={`Ver o projeto ${title} online`}
          >
            <FaGlobe className="w-4 h-4 mr-2" />
            Ver Projeto
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm font-semibold shadow-md"
            aria-label={`Ver o código de ${title} no GitHub`}
          >
            <FaCode className="w-4 h-4 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Cards: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-extrabold text-white text-center mb-12">
        Alguns dos meus projetos
      </h2>
      <div className="grid lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Cards;
