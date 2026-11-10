import React from "react";

/**
 * Modal styling constants
 */
const MODAL_STYLES = {
  container: `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  `,
  video: `
    max-width: 90vw;
    max-height: 90vh;
    width: auto;
    height: auto;
    object-fit: contain;
  `,
  closeButton: `
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(0,0,0,0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10000;
  `,
  playPauseButton: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    border: none;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 10001;
  `,
  timeline: `
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: min(80vw, 56rem);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    background: rgba(0, 0, 0, 0.55);
    border-radius: 0.75rem;
    z-index: 10001;
    user-select: none;
  `,
  timeLabel: `
    color: white;
    font-size: 0.8rem;
    font-variant-numeric: tabular-nums;
    min-width: 2.6rem;
    text-align: center;
  `,
  track: `
    position: relative;
    flex: 1;
    height: 0.4rem;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 9999px;
    cursor: pointer;
    touch-action: none;
  `,
  fill: `
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0%;
    background: #e6e6e6;
    border-radius: 9999px;
    pointer-events: none;
  `,
} as const;

/**
 * Creates and injects custom CSS styles for video controls
 */
const injectVideoStyles = () => {
  const styleId = "custom-video-styles";
  if (document.getElementById(styleId)) return;

  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = `
    video::-webkit-media-controls-fullscreen-button {
      display: none !important;
    }
    video::-moz-media-controls-fullscreen-button {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
};

/**
 * Creates the modal container element
 */
const createModalContainer = (): HTMLDivElement => {
  const container = document.createElement("div");
  container.style.cssText = MODAL_STYLES.container;
  return container;
};

/**
 * Creates and configures the cloned video element
 */
const createClonedVideo = (originalVideo: HTMLVideoElement): HTMLVideoElement => {
  const clonedVideo = originalVideo.cloneNode(true) as HTMLVideoElement;
  clonedVideo.style.cssText = MODAL_STYLES.video;
  clonedVideo.controls = false;
  clonedVideo.muted = false;
  clonedVideo.currentTime = originalVideo.currentTime;
  return clonedVideo;
};

/**
 * Creates the close button element
 */
const createCloseButton = (onClose: () => void): HTMLButtonElement => {
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "✕";
  closeButton.style.cssText = MODAL_STYLES.closeButton;
  closeButton.onclick = onClose;
  return closeButton;
};

/**
 * Creates the play/pause control button
 */
const createPlayPauseButton = (clonedVideo: HTMLVideoElement): HTMLButtonElement => {
  const playPauseButton = document.createElement("button");
  playPauseButton.id = "modal-play-pause-button";
  playPauseButton.style.cssText = MODAL_STYLES.playPauseButton;

  const iconContainer = document.createElement("div");
  iconContainer.id = "modal-play-pause-icon";
  playPauseButton.appendChild(iconContainer);

  playPauseButton.onclick = () => {
    if (clonedVideo.paused) {
      clonedVideo.play();
    } else {
      clonedVideo.pause();
    }
  };

  return playPauseButton;
};

/**
 * Updates the play/pause icon based on video state
 */
const updatePlayPauseIcon = (isPlaying: boolean) => {
  const iconContainer = document.getElementById("modal-play-pause-icon");
  if (!iconContainer) return;

  iconContainer.innerHTML = isPlaying
    ? '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="w-8 h-8 text-white"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48h-32z"></path></svg>'
    : '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="w-8 h-8 text-white"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>';
};

/**
 * Sets up video event listeners for synchronization
 */
const setupVideoEventListeners = (
  clonedVideo: HTMLVideoElement,
  originalVideo: HTMLVideoElement,
  onStateChange: (playing: boolean) => void
) => {
  let modalVideoPlaying = false;

  clonedVideo.addEventListener("play", () => {
    modalVideoPlaying = true;
    updatePlayPauseIcon(true);
    // Sync with original video
    if (originalVideo.paused) {
      originalVideo.play().catch(console.error);
    }
  });

  clonedVideo.addEventListener("pause", () => {
    modalVideoPlaying = false;
    updatePlayPauseIcon(false);
    // Sync with original video
    if (!originalVideo.paused) {
      originalVideo.pause();
    }
  });

  // Sync progress in real time
  const syncProgress = () => {
    originalVideo.currentTime = clonedVideo.currentTime;
  };
  clonedVideo.addEventListener("timeupdate", syncProgress);

  return { getModalVideoPlaying: () => modalVideoPlaying };
};

/**
 * Formats a time in seconds as m:ss (or h:mm:ss)
 */
const formatTime = (seconds: number): string => {
  if (!Number.isFinite(seconds)) return "0:00";
  const s = Math.floor(seconds % 60);
  const m = Math.floor((seconds / 60) % 60);
  const h = Math.floor(seconds / 3600);
  const mm = h > 0 ? String(m).padStart(2, "0") : String(m);
  const ss = String(s).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
};

/**
 * Creates the timeline (seek bar) with current/total time labels.
 * Supports click and drag seeking; syncs the original card video through
 * the existing timeupdate listener.
 */
const createTimeline = (clonedVideo: HTMLVideoElement) => {
  const timeline = document.createElement("div");
  timeline.style.cssText = MODAL_STYLES.timeline;

  const currentLabel = document.createElement("span");
  currentLabel.style.cssText = MODAL_STYLES.timeLabel;
  currentLabel.textContent = "0:00";

  const track = document.createElement("div");
  track.style.cssText = MODAL_STYLES.track;
  track.setAttribute("role", "slider");
  track.setAttribute("aria-label", "Seek");
  track.setAttribute("tabindex", "0");

  const fill = document.createElement("div");
  fill.style.cssText = MODAL_STYLES.fill;
  track.appendChild(fill);

  const durationLabel = document.createElement("span");
  durationLabel.style.cssText = MODAL_STYLES.timeLabel;
  durationLabel.textContent = "0:00";

  const updateFill = () => {
    const duration = clonedVideo.duration;
    if (!Number.isFinite(duration) || duration <= 0) return;
    const ratio = Math.min(1, Math.max(0, clonedVideo.currentTime / duration));
    fill.style.width = `${ratio * 100}%`;
    currentLabel.textContent = formatTime(clonedVideo.currentTime);
    track.setAttribute("aria-valuenow", String(Math.round(clonedVideo.currentTime)));
    track.setAttribute("aria-valuemax", String(Math.round(duration)));
  };

  const updateDuration = () => {
    if (Number.isFinite(clonedVideo.duration)) {
      durationLabel.textContent = formatTime(clonedVideo.duration);
      updateFill();
    }
  };

  const seekToRatio = (ratio: number) => {
    const duration = clonedVideo.duration;
    if (!Number.isFinite(duration) || duration <= 0) return;
    const clamped = Math.min(1, Math.max(0, ratio));
    clonedVideo.currentTime = clamped * duration;
    updateFill();
  };

  const seekFromPointer = (e: PointerEvent) => {
    const rect = track.getBoundingClientRect();
    if (rect.width === 0) return;
    seekToRatio((e.clientX - rect.left) / rect.width);
  };

  // Click/drag seeking with pointer capture so the drag continues outside the track
  track.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    track.setPointerCapture(e.pointerId);
    seekFromPointer(e);

    const onMove = (moveEvent: PointerEvent) => seekFromPointer(moveEvent);
    const onUp = () => {
      track.removeEventListener("pointermove", onMove);
      track.removeEventListener("pointerup", onUp);
      track.removeEventListener("pointercancel", onUp);
    };
    track.addEventListener("pointermove", onMove);
    track.addEventListener("pointerup", onUp);
    track.addEventListener("pointercancel", onUp);
  });

  // Keyboard seeking: arrows = 5s, Home/End = start/end
  track.addEventListener("keydown", (e) => {
    const duration = clonedVideo.duration;
    if (!Number.isFinite(duration)) return;
    const step = 5;
    if (e.key === "ArrowLeft") {
      clonedVideo.currentTime = Math.max(0, clonedVideo.currentTime - step);
    } else if (e.key === "ArrowRight") {
      clonedVideo.currentTime = Math.min(duration, clonedVideo.currentTime + step);
    } else if (e.key === "Home") {
      clonedVideo.currentTime = 0;
    } else if (e.key === "End") {
      clonedVideo.currentTime = duration;
    } else {
      return;
    }
    e.preventDefault();
    updateFill();
  });

  clonedVideo.addEventListener("loadedmetadata", updateDuration);
  clonedVideo.addEventListener("durationchange", updateDuration);
  clonedVideo.addEventListener("timeupdate", updateFill);
  // Metadata may already be available from the card video source
  updateDuration();

  timeline.appendChild(currentLabel);
  timeline.appendChild(track);
  timeline.appendChild(durationLabel);

  return timeline;
};

/**
 * Sets up controls visibility with auto-hide
 */
const setupControlsVisibility = (container: HTMLElement, clonedVideo: HTMLVideoElement) => {
  let controlsTimeout: NodeJS.Timeout;

  const showControls = () => {
    const button = document.getElementById("modal-play-pause-button");
    if (button) {
      button.style.opacity = "1";
      clearTimeout(controlsTimeout);
      controlsTimeout = setTimeout(() => {
        button.style.opacity = "0";
      }, 2000);
    }
  };

  container.onmousemove = showControls;
  clonedVideo.onmousemove = showControls;
};

/**
 * Custom hook to manage video expansion in modal.
 * Creates a modal overlay with video controls and synchronization with the original video.
 */
export const useVideoModal = () => {
  /**
   * Handles video expansion in modal.
   * Creates a modal overlay with custom controls and synchronizes with the original video.
   */
  const handleExpandClick = async (
    videoElement: HTMLVideoElement,
    onStateSync?: (playing: boolean) => void
  ) => {
    try {
      // Inject custom styles
      injectVideoStyles();

      // Create modal elements
      const container = createModalContainer();
      const clonedVideo = createClonedVideo(videoElement);

      // Set up event listeners and get state tracking
      const { getModalVideoPlaying } = setupVideoEventListeners(
        clonedVideo,
        videoElement,
        onStateSync || (() => {})
      );

      // Create control elements
      const closeModal = () => {
        const isPlaying = getModalVideoPlaying();
        // Sync playback state when closing modal
        if (isPlaying && videoElement.paused) {
          videoElement.play().catch(console.error);
        } else if (!isPlaying && !videoElement.paused) {
          videoElement.pause();
        }
        // Sync state in hook
        onStateSync?.(isPlaying);
        document.body.removeChild(container);
      };

      const closeButton = createCloseButton(closeModal);
      const playPauseButton = createPlayPauseButton(clonedVideo);
      const timeline = createTimeline(clonedVideo);

      // Set up controls visibility
      setupControlsVisibility(container, clonedVideo);

      // Assemble modal
      container.appendChild(clonedVideo);
      container.appendChild(closeButton);
      container.appendChild(playPauseButton);
      container.appendChild(timeline);
      document.body.appendChild(container);

      // Handle modal dismissal
      container.onclick = (e) => {
        if (e.target === container) {
          closeModal();
        }
      };

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeModal();
          document.removeEventListener("keydown", handleEscape);
        }
      };
      document.addEventListener("keydown", handleEscape);

      // Start playback
      clonedVideo.play().catch(console.error);
    } catch (error) {
      console.error("Error trying to expand video:", error);
    }
  };

  return { handleExpandClick };
};
