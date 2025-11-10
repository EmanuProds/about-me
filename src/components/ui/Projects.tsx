"use client";

import React, { useRef, useEffect } from "react";
import { FaPlay, FaCode, FaGlobe } from "react-icons/fa";
import { useTranslations } from "@/hooks/useTranslations";
import { ProjectCardProps, technologies } from "@/types/projects";
import { projects } from "@/lib/data";

const ProjectCard = ({ title, description, videoSrc, technologies: techKeys, projectUrl, githubUrl, id }: ProjectCardProps) => {
  const { t } = useTranslations();

  const getTranslatedTitle = (projectId: number) => {
    switch (projectId) {
      case 1:
        return t.projects.titles.image2doc;
      case 2:
        return t.projects.titles.notaryConnect;
      default:
        return title;
    }
  };

  const getTranslatedDescription = (projectId: number) => {
    switch (projectId) {
      case 1:
        return t.projects.descriptions.image2doc;
      case 2:
        return t.projects.descriptions.notaryConnect;
      default:
        return description;
    }
  };
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const cardElement = cardRef.current;

    if (!videoElement || !cardElement || !videoSrc) return;

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
      { threshold: 0.5 }
    );

    observer.observe(cardElement);
    return () => observer.unobserve(cardElement);
  }, [videoSrc]);

  const projectTechs = techKeys.map((key) => technologies[key]).filter(Boolean);

  return (
    <div className="group relative bg-gray-300/40 dark:bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-400/20 dark:border-gray-200/20 p-6 hover:bg-slate-400/40 dark:hover:bg-slate-600/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex flex-col h-full">
      <div className="relative aspect-video bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden mb-4">
        {videoSrc ? (
          <>
            <video
              ref={videoRef}
              src={videoSrc}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://placehold.co/600x400/1f2937/ffffff?text=Loading+Video"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-50 text-gray-900 dark:text-white pointer-events-none">
              <FaPlay className="w-12 h-12" />
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
            <div className="text-center text-gray-600 dark:text-gray-400">
              <FaCode className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm font-medium">{t.projects.videoComingSoon}</p>
            </div>
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors min-h-10 line-clamp-2 mb-3">
        {getTranslatedTitle(id)}
      </h3>

      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 grow">
        {getTranslatedDescription(id)}
      </p>

      <div className="flex flex-wrap gap-2 mb-4 min-h-8 items-center justify-center">
        {projectTechs.map((tech) => {
          const Icon = tech.icon;
          return (
            <span
              key={tech.name}
              className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${tech.color} bg-gray-100 dark:bg-gray-700/50`}
              title={tech.name}
            >
              <Icon className="w-4 h-4 mr-1" />
              {tech.name}
            </span>
          );
        })}
      </div>

      <div className="flex gap-3 mt-auto">
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 rounded-lg px-4 py-2 shadow-md hover:shadow-lg"
          >
            <FaGlobe className="w-4 h-4" />
            {t.projects.viewProject}
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 rounded-lg px-4 py-2 shadow-md hover:shadow-lg"
          >
            <FaCode className="w-4 h-4" />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslations();

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-linear-to-r bg-slate-600 dark:bg-slate-400 mx-auto rounded-full" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
