import { useRef, useEffect, useState } from "react";

export const useVideoPlayer = (videoSrc?: string) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement || !videoSrc) return;

    // Reproduzir automaticamente quando o vídeo carrega
    const handleCanPlay = () => {
      videoElement.play().catch((error) => {
        if (error.name !== "NotAllowedError") {
          console.error("Erro ao tentar dar play no vídeo:", error);
        }
      });
    };

    videoElement.addEventListener("canplay", handleCanPlay);

    return () => {
      videoElement.removeEventListener("canplay", handleCanPlay);
    };
  }, [videoSrc]);

  useEffect(() => {
    if (!videoSrc) return;

    const timeout = setTimeout(() => {
      setVideoLoading(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [videoSrc]);

  const handleVideoLoadStart = () => {
    setVideoLoading(true);
  };

  const handleVideoCanPlay = () => {
    setVideoLoading(false);
  };

  const handleVideoError = () => {
    setVideoLoading(false);
  };

  const handleVideoClick = () => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (videoElement.paused) {
      videoElement.play().catch((error) => {
        if (error.name !== "NotAllowedError") {
          console.error("Erro ao tentar dar play no vídeo:", error);
        }
      });
      setVideoPlaying(true);
    } else {
      videoElement.pause();
      setVideoPlaying(false);
    }
  };

  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setVideoPlaying(false);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return {
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
  };
};
