import { useRef, useEffect, useState } from "react";

/**
 * Hook personalizado para gerenciar o estado e comportamento de um player de vídeo.
 * Controla reprodução automática, estados de loading e interações do usuário.
 * @param videoSrc - URL opcional do vídeo a ser reproduzido
 * @returns Objeto com refs, estados e handlers para o vídeo
 */
export const useVideoPlayer = (videoSrc?: string) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Efeito para reprodução automática quando o vídeo carrega
  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement || !videoSrc) return;

    /**
     * Manipula o evento 'canplay' do vídeo, iniciando reprodução automática.
     * Trata erros de permissão de reprodução automática do navegador.
     */
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

  // Efeito para timeout de loading do vídeo
  useEffect(() => {
    if (!videoSrc) return;

    const timeout = setTimeout(() => {
      setVideoLoading(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [videoSrc]);

  /**
   * Manipula o início do carregamento do vídeo.
   * Define o estado de loading como verdadeiro.
   */
  const handleVideoLoadStart = () => {
    setVideoLoading(true);
  };

  /**
   * Manipula quando o vídeo está pronto para reprodução.
   * Define o estado de loading como falso.
   */
  const handleVideoCanPlay = () => {
    setVideoLoading(false);
  };

  /**
   * Manipula erros durante o carregamento do vídeo.
   * Define o estado de loading como falso.
   */
  const handleVideoError = () => {
    setVideoLoading(false);
  };

  /**
   * Manipula cliques no vídeo para alternar entre play e pause.
   * Trata erros de permissão de reprodução automática.
   */
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

  /**
   * Manipula o evento de play do vídeo.
   * Define o estado de reprodução como verdadeiro.
   */
  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };

  /**
   * Manipula o evento de pause do vídeo.
   * Define o estado de reprodução como falso.
   */
  const handleVideoPause = () => {
    setVideoPlaying(false);
  };

  /**
   * Manipula entrada do mouse no vídeo.
   * Define o estado de hover como verdadeiro.
   */
  const handleMouseEnter = () => setIsHovered(true);

  /**
   * Manipula saída do mouse do vídeo.
   * Define o estado de hover como falso.
   */
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
