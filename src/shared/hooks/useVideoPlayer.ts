import { useRef, useEffect, useState, useCallback } from "react";

/**
 * Video player configuration constants
 */
const VIDEO_CONFIG = {
  LOADING_TIMEOUT: 10000, // 10 seconds
  STATE_CHECK_INTERVAL: 100, // Check every 100ms
  READY_STATE_THRESHOLD: 2, // HAVE_CURRENT_DATA or higher
  AUTOPLAY_ERROR_NAME: "NotAllowedError",
} as const;

/**
 * Safely attempts to play a video element, handling autoplay restrictions
 */
const safePlayVideo = async (videoElement: HTMLVideoElement): Promise<void> => {
  try {
    await videoElement.play();
  } catch (error) {
    if ((error as Error).name !== VIDEO_CONFIG.AUTOPLAY_ERROR_NAME) {
      console.error("Error trying to play video:", error);
    }
  }
};

/**
 * Checks if a video element is currently playing
 */
const isVideoPlaying = (videoElement: HTMLVideoElement): boolean => {
  return !videoElement.paused && !videoElement.ended && videoElement.readyState > VIDEO_CONFIG.READY_STATE_THRESHOLD;
};

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



  // Effect to sync state when video changes externally
  useEffect(() => {
    if (!enabled) return;

    const videoElement = videoRef.current;
    if (!videoElement) return;

    const checkVideoState = () => {
      const actuallyPlaying = isVideoPlaying(videoElement);
      if (actuallyPlaying !== videoPlaying) {
        setVideoPlaying(actuallyPlaying);
      }
    };

    const interval = setInterval(checkVideoState, VIDEO_CONFIG.STATE_CHECK_INTERVAL);

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

    const timeout = setTimeout(() => setVideoLoading(false), VIDEO_CONFIG.LOADING_TIMEOUT);
    return () => clearTimeout(timeout);
  }, [videoSrc, enabled]);

  /**
   * Toggles video playback between play and pause states
   */
  const handleVideoClick = useCallback(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (videoElement.paused) {
      safePlayVideo(videoElement);
      setVideoPlaying(true);
    } else {
      videoElement.pause();
      setVideoPlaying(false);
    }
  }, []);

  /**
   * Forces update of video playback state.
   * Useful for external synchronization (e.g., modal).
   */
  const forcePlayingState = useCallback((playing: boolean) => {
    setVideoPlaying(playing);
  }, []);

  // Simple state setters - no need for useCallback as they're very lightweight
  const handleVideoLoadStart = () => setVideoLoading(true);
  const handleVideoCanPlay = () => setVideoLoading(false);
  const handleVideoError = () => setVideoLoading(false);
  const handleVideoPlay = () => setVideoPlaying(true);
  const handleVideoPause = () => setVideoPlaying(false);
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
    forcePlayingState,
  };
};
