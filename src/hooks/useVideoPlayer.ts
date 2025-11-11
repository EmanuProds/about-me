import { useRef, useEffect, useState } from "react";

/**
 * Custom hook to manage video player state and behavior.
 * Controls automatic playback, loading states and user interactions.
 * @param videoSrc - Optional video URL to be played
 * @param enabled - Whether the hook should be active (default: true)
 * @returns Object with refs, states and handlers for the video
 */
export const useVideoPlayer = (videoSrc?: string, enabled: boolean = true) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Effect for automatic playback when video loads
  useEffect(() => {
    if (!enabled) return;

    const videoElement = videoRef.current;

    if (!videoElement || !videoSrc) return;

    /**
     * Handles video 'canplay' event, starting automatic playback.
     * Handles browser autoplay permission errors.
     */
    const handleCanPlay = () => {
      videoElement.play().catch((error) => {
        if (error.name !== "NotAllowedError") {
          console.error("Error trying to play video:", error);
        }
      });
    };

    videoElement.addEventListener("canplay", handleCanPlay);

    return () => {
      videoElement.removeEventListener("canplay", handleCanPlay);
    };
  }, [videoSrc, enabled]);

  // Effect to sync state when video changes externally
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

    // Check state periodically
    const interval = setInterval(checkVideoState, 100);

    // Also check on important events
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

  // Effect for video loading timeout
  useEffect(() => {
    if (!enabled || !videoSrc) return;

    const timeout = setTimeout(() => {
      setVideoLoading(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [videoSrc, enabled]);

  /**
   * Handles video loading start.
   * Sets loading state to true.
   */
  const handleVideoLoadStart = () => {
    setVideoLoading(true);
  };

  /**
   * Handles when video is ready for playback.
   * Sets loading state to false.
   */
  const handleVideoCanPlay = () => {
    setVideoLoading(false);
  };

  /**
   * Handles errors during video loading.
   * Sets loading state to false.
   */
  const handleVideoError = () => {
    setVideoLoading(false);
  };

  /**
   * Handles video clicks to toggle between play and pause.
   * Handles autoplay permission errors.
   */
  const handleVideoClick = () => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (videoElement.paused) {
      videoElement.play().catch((error) => {
        if (error.name !== "NotAllowedError") {
          console.error("Error trying to play video:", error);
        }
      });
      setVideoPlaying(true);
    } else {
      videoElement.pause();
      setVideoPlaying(false);
    }
  };

  /**
   * Handles video play event.
   * Sets playback state to true.
   */
  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };

  /**
   * Handles video pause event.
   * Sets playback state to false.
   */
  const handleVideoPause = () => {
    setVideoPlaying(false);
  };

  /**
   * Handles mouse enter on video.
   * Sets hover state to true.
   */
  const handleMouseEnter = () => setIsHovered(true);

  /**
   * Handles mouse leave on video.
   * Sets hover state to false.
   */
  const handleMouseLeave = () => setIsHovered(false);

  /**
   * Forces update of video playback state.
   * Useful for external synchronization (e.g., modal).
   * @param playing - New playback state
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
