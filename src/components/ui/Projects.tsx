"use client";

import React, { useState, useEffect } from "react";
import { FaPlay, FaPause, FaCode, FaGlobe, FaExpand } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useTranslations } from "@/hooks/useTranslations";
import { ProjectCardProps, technologies } from "@/types/projects";
import { projects } from "@/lib/data";
import { useVideoPlayer } from "@/hooks/useVideoPlayer";
import { useVideoModal } from "@/hooks/useVideoModal";

// Constantes para classes Tailwind comuns para manter consistência
const CARD_BASE_CLASSES =
  "relative bg-gray-300/40 dark:bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-400/20 dark:border-gray-200/20 p-8 hover:bg-slate-400/40 dark:hover:bg-slate-600/40 active:bg-slate-400/40 dark:active:bg-slate-600/40 transition-all duration-300 hover:scale-[1.02] active:scale-[1.02] hover:shadow-lg active:shadow-lg flex flex-col h-full cursor-pointer";
const VIDEO_CONTAINER_CLASSES =
  "relative aspect-video bg-gray-800 rounded-xl overflow-hidden mb-4";
const BUTTON_BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 rounded-lg px-4 py-2 shadow-md hover:shadow-lg active:shadow-lg";

const ProjectCard = ({
  title,
  description,
  videoSrc,
  technologies: techKeys,
  projectUrl,
  githubUrl,
  id,
  loading = false,
}: ProjectCardProps & { loading?: boolean }) => {
  const { t } = useTranslations();
  const router = useRouter();
  const [videoError, setVideoError] = useState(false);

  /**
   * Retorna o título traduzido do projeto baseado no ID.
   * Utiliza traduções específicas para projetos conhecidos ou o título padrão.
   * @param projectId - ID único do projeto
   * @returns Título traduzido ou padrão
   */
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

  /**
   * Retorna a descrição traduzida do projeto baseada no ID.
   * Utiliza descrições específicas para projetos conhecidos ou a descrição padrão.
   * @param recordId - ID único do registro acadêmico
   * @returns Descrição traduzida ou padrão
   */
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

  const basePath =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
     window.location.hostname.startsWith("192.168.") ||
     window.location.hostname.startsWith("10.") ||
     window.location.hostname === "127.0.0.1")
      ? ""
      : "/about-me";
  const adjustedVideoSrc = videoSrc ? `${basePath}${videoSrc}` : "";

  const {
    videoRef,
    cardRef,
    videoLoading,
    videoPlaying,
    isHovered,
    handleVideoClick,
    handleVideoLoadStart,
    handleVideoCanPlay,
    handleVideoError,
    handleVideoPlay,
    handleVideoPause,
    handleMouseEnter,
    handleMouseLeave,
    forcePlayingState,
  } = useVideoPlayer(adjustedVideoSrc, !loading && !videoError);

  /**
   * Manipula erros do vídeo e define estado de erro.
   */
  const handleVideoErrorFallback = () => {
    setVideoError(true);
    handleVideoError();
  };

  const { handleExpandClick } = useVideoModal();

  /**
   * Manipula a expansão do vídeo em modal.
   * Verifica se o vídeo existe antes de chamar a função de expansão.
   */
  const handleExpand = () => {
    if (videoRef.current) {
      handleExpandClick(videoRef.current, forcePlayingState);
    }
  };

  const projectTechs = techKeys.map((key) => technologies[key]).filter(Boolean);

  if (loading) {
    return (
      <div className="bg-gray-300/40 dark:bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-400/20 dark:border-gray-200/20 p-8 animate-pulse">
        <div className={`${VIDEO_CONTAINER_CLASSES} bg-gray-400/30 mb-4`} />
        <div className="h-6 bg-gray-400/30 rounded w-3/4 mb-3" />
        <div className="space-y-2 mb-4 grow">
          <div className="h-4 bg-gray-400/30 rounded" />
          <div className="h-4 bg-gray-400/30 rounded w-5/6" />
          <div className="h-4 bg-gray-400/30 rounded w-4/6" />
        </div>
        <div className="flex flex-wrap gap-2 mb-4 min-h-8 items-center justify-center">
          <div className="h-6 bg-gray-400/30 rounded-full w-16" />
          <div className="h-6 bg-gray-400/30 rounded-full w-20" />
          <div className="h-6 bg-gray-400/30 rounded-full w-14" />
        </div>
        <div className="flex gap-3 mt-auto">
          <div className="h-10 bg-gray-400/30 rounded flex-1" />
          <div className="h-10 bg-gray-400/30 rounded flex-1" />
        </div>
      </div>
    );
  }

  return (
    <div className={`group ${CARD_BASE_CLASSES}`}>
      <div
        className={VIDEO_CONTAINER_CLASSES}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {videoSrc && !videoError ? (
          <>
            <video
              ref={videoRef}
              src={adjustedVideoSrc}
              loop
              muted
              playsInline
              className="w-full h-full object-cover cursor-pointer"
              onLoadStart={handleVideoLoadStart}
              onCanPlay={handleVideoCanPlay}
              onError={handleVideoErrorFallback}
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onClick={handleVideoClick}
            />
            {!videoLoading && (
              <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none transition-opacity duration-300">
                {videoPlaying && isHovered ? (
                  <FaPause className="w-12 h-12 text-white transition-opacity duration-300" />
                ) : !videoPlaying && isHovered ? (
                  <FaPlay className="w-12 h-12 text-white transition-opacity duration-300" />
                ) : null}
              </div>
            )}
            {!videoLoading && (
              <button
                onClick={handleExpand}
                className="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 active:bg-black/80 text-gray-100 rounded-lg transition-colors duration-200 z-20 cursor-pointer"
                title="Expandir vídeo"
              >
                <FaExpand className="w-4 h-4" />
              </button>
            )}
            {videoLoading && (
              <div className="absolute inset-0 bg-slate-600 dark:bg-slate-400 rounded-xl animate-pulse" />
            )}
          </>
        ) : (
          <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
            <div className="text-center text-gray-600 dark:text-gray-400">
              <FaCode className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm font-medium">
                {t.projects.videoComingSoon}
              </p>
            </div>
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors min-h-10 line-clamp-2 mb-2 select-none">
        {getTranslatedTitle(id)}
      </h3>

      <div className="flex flex-wrap gap-2 mb-4 min-h-8 items-start justify-center">
        {projectTechs.map((tech) => {
          const Icon = tech.icon;
          return (
            <span
              key={tech.name}
              className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${tech.color} bg-gray-100 dark:bg-gray-700/50 select-none`}
              title={tech.name}
            >
              <Icon className="w-4 h-4 mr-1 select-none" />
              {tech.name}
            </span>
          );
        })}
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-sm text-justify leading-relaxed mb-4 line-clamp-3 grow select-none">
        {getTranslatedDescription(id)}
      </p>

      <div className="flex gap-3 mt-auto">
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 ${BUTTON_BASE_CLASSES} text-gray-100 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 select-none`}
          >
            <FaGlobe className="w-4 h-4 select-none" />
            {t.projects.viewProject}
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 ${BUTTON_BASE_CLASSES} text-white dark:text-gray-100 bg-slate-500 dark:bg-gray-600 hover:bg-slate-700 select-none`}
          >
            <FaCode className="w-4 h-4 select-none" />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslations();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula um pequeno delay de loading para mostrar o skeleton
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projetos"
      className="w-full max-w-6xl mx-auto px-4 py-16 scroll-mt-16"
    >
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-linear-to-r bg-slate-600 dark:bg-slate-400 mx-auto rounded-full" />
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} loading={loading} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
