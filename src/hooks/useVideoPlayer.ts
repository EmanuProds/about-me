import { useRef, useEffect, useState } from "react";

/**
 * Hook personalizado para gerenciar o estado e comportamento de um player de vídeo.
 * Controla reprodução automática, estados de loading e interações do usuário.
 * @param videoSrc - URL opcional do vídeo a ser reproduzido
 * @param enabled - Se o hook deve estar ativo (padrão: true)
 * @returns Objeto com refs, estados e handlers para o vídeo
 */
export const useVideoPlayer = (videoSrc?: string, enabled: boolean = true) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Efeito para reprodução automática quando o vídeo carrega
  useEffect(() => {
    if (!enabled) return;

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
  }, [videoSrc, enabled]);

  // Efeito para sincronizar estado quando o vídeo muda externamente
  useEffect(() => {
    if (!enabled) return;

    const videoElement = videoRef.current;
    if (!videoElement) return;

    const checkVideoState = () => {
      const isActuallyPlaying =
        !videoElement.paused &&
        !videoElement.ended &&
        videoElement.readyState > 2;
      if (isActuallyPlaying !== videoPlaying) {
        setVideoPlaying(isActuallyPlaying);
      }
    };

    // Verificar estado periodicamente
    const interval = setInterval(checkVideoState, 100);

    // Também verificar em eventos importantes
    const handlePlay = () => setVideoPlaying(true);
    const handlePause = () => setVideoPlaying(false);
    const handleEnded = () => setVideoPlaying(false);

    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);
    videoElement.addEventListener("ended", handleEnded);

    return () => {
      clearInterval(interval);
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePause);
      videoElement.removeEventListener("ended", handleEnded);
    };
  }, [enabled, videoPlaying]);

  // Efeito para timeout de loading do vídeo
  useEffect(() => {
    if (!enabled || !videoSrc) return;

    const timeout = setTimeout(() => {
      setVideoLoading(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [videoSrc, enabled]);

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

  /**
   * Força atualização do estado de reprodução do vídeo.
   * Útil para sincronização externa (ex: modal).
   * @param playing - Novo estado de reprodução
   */
  const forcePlayingState = (playing: boolean) => {
    setVideoPlaying(playing);
  };

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
    forcePlayingState,
  };
};
