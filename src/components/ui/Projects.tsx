"use client";

import React, { useState, useEffect } from "react";
import { FaPlay, FaPause, FaCode, FaGlobe, FaExpand } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useTranslations } from "@/hooks/useTranslations";
import { ProjectCardProps } from "@/types/projects";
import { projects, technologies } from "@/lib/data";
import { useVideoPlayer } from "@/hooks/useVideoPlayer";
import { useVideoModal } from "@/hooks/useVideoModal";
import Card, {
  CARD_BASE_CLASSES,
  VIDEO_CONTAINER_CLASSES,
  BUTTON_BASE_CLASSES,
} from "@/components/layout/Card";

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
  const [videoTested, setVideoTested] = useState(false);

  /**
   * Translation mappings for project content
   */
  const PROJECT_TRANSLATIONS = {
    1: {
      title: t.projects.titles.image2doc,
      description: t.projects.descriptions.image2doc,
    },
    2: {
      title: t.projects.titles.notaryConnect,
      description: t.projects.descriptions.notaryConnect,
    },
  } as const;

  /**
   * Gets translated project title, falling back to default
   */
  const getTranslatedTitle = (projectId: number) =>
    PROJECT_TRANSLATIONS[projectId as keyof typeof PROJECT_TRANSLATIONS]
      ?.title || title;

  /**
   * Gets translated project description, falling back to default
   */
  const getTranslatedDescription = (projectId: number) =>
    PROJECT_TRANSLATIONS[projectId as keyof typeof PROJECT_TRANSLATIONS]
      ?.description || description;

  // Determine base path for GitHub Pages deployment
  const getBasePath = () => {
    if (typeof window === "undefined") return "";

    const hostname = window.location.hostname;
    const isLocal =
      hostname === "localhost" ||
      hostname.startsWith("192.168.") ||
      hostname.startsWith("10.") ||
      hostname === "127.0.0.1" ||
      hostname === "0.0.0.0";

    return isLocal ? "" : "/about-me";
  };

  const basePath = getBasePath();
  const adjustedVideoSrc = videoSrc ? `${basePath}${videoSrc}` : "";

  // Test video availability on mount
  useEffect(() => {
    if (!adjustedVideoSrc || videoTested) return;

    const testVideo = async () => {
      try {
        const response = await fetch(adjustedVideoSrc, { method: "HEAD" });
        if (!response.ok) {
          console.warn(`Video not accessible: ${adjustedVideoSrc}`);
          setVideoError(true);
        }
      } catch (error) {
        console.warn(
          `Failed to test video accessibility: ${adjustedVideoSrc}`,
          error
        );
        setVideoError(true);
      }
      setVideoTested(true);
    };

    testVideo();
  }, [adjustedVideoSrc, videoTested]);

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
   * Handles video errors and sets error state.
   */
  const handleVideoErrorFallback = () => {
    setVideoError(true);
    handleVideoError();
  };

  const { handleExpandClick } = useVideoModal();

  /**
   * Handles video expansion in modal.
   * Checks if video exists before calling the expansion function.
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
                  <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center">
                    <FaPause className="w-8 h-8 text-white" />
                  </div>
                ) : !videoPlaying && isHovered ? (
                  <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center">
                    <FaPlay className="w-8 h-8 text-white" />
                  </div>
                ) : null}
              </div>
            )}
            {!videoLoading && (
              <button
                onClick={handleExpand}
                className="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 active:bg-black/80 text-gray-100 rounded-lg transition-colors duration-200 z-20 cursor-pointer"
                title="Expand video"
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
          const Icon = tech.Icon;
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

const ProjectsContent = ({ loading }: { loading: boolean }) => {
  return (
    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} loading={loading} />
      ))}
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslations();

  return (
    <Card
      id="projetos"
      title={t.projects.title}
      titleClass="mt-28"
      maxWidth="6xl"
      scrollMargin="28"
      loadingDelay={1200}
    >
      {(loading) => <ProjectsContent loading={loading} />}
    </Card>
  );
};

export default Projects;
