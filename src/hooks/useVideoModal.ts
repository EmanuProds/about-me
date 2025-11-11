import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export const useVideoModal = () => {
  const handleExpandClick = async (videoElement: HTMLVideoElement) => {
    try {
      const container = document.createElement("div");
      container.style.cssText = `
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
      `;

      const clonedVideo = videoElement.cloneNode(true) as HTMLVideoElement;
      clonedVideo.style.cssText = `
        max-width: 90vw;
        max-height: 90vh;
        width: auto;
        height: auto;
        object-fit: contain;
      `;
      clonedVideo.controls = false;
      clonedVideo.muted = false;
      clonedVideo.currentTime = videoElement.currentTime; // Manter o progresso do vídeo original

      let modalVideoPlaying = false;

      const renderIcon = () => {
        const iconContainer = document.getElementById("modal-play-pause-icon");
        if (!iconContainer) return;

        iconContainer.innerHTML = modalVideoPlaying
          ? '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="2rem" width="2rem"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48h-32z"></path></svg>'
          : '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="2rem" width="2rem"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>';
      };

      clonedVideo.addEventListener("play", () => {
        modalVideoPlaying = true;
        renderIcon();
        // Sincronizar com o vídeo original
        if (videoElement.paused) {
          videoElement.play().catch(console.error);
        }
      });
      clonedVideo.addEventListener("pause", () => {
        modalVideoPlaying = false;
        renderIcon();
        // Sincronizar com o vídeo original
        if (!videoElement.paused) {
          videoElement.pause();
        }
      });

      // Sincronizar progresso em tempo real
      const syncProgress = () => {
        videoElement.currentTime = clonedVideo.currentTime;
      };
      clonedVideo.addEventListener("timeupdate", syncProgress);

      const styleId = "custom-video-styles";
      if (!document.getElementById(styleId)) {
        const style = document.createElement("style");
        style.id = styleId;
        style.textContent = `
          /* Esconde botão de fullscreen */
          video::-webkit-media-controls-fullscreen-button {
            display: none !important;
          }
          video::-moz-media-controls-fullscreen-button {
            display: none !important;
          }
        `;
        document.head.appendChild(style);
      }

      const closeButton = document.createElement("button");
      closeButton.innerHTML = "✕";
      closeButton.style.cssText = `
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
      `;

      closeButton.onclick = () => {
        document.body.removeChild(container);
      };

      const playPauseButton = document.createElement("button");
      playPauseButton.id = "modal-play-pause-button";
      playPauseButton.style.cssText = `
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
      `;

      const iconContainer = document.createElement("div");
      iconContainer.id = "modal-play-pause-icon";
      playPauseButton.appendChild(iconContainer);

      renderIcon();

      playPauseButton.onclick = () => {
        if (clonedVideo.paused) {
          clonedVideo.play();
        } else {
          clonedVideo.pause();
        }
      };

      let controlsTimeout: NodeJS.Timeout;
      const showControls = () => {
        playPauseButton.style.opacity = "1";
        clearTimeout(controlsTimeout);
        controlsTimeout = setTimeout(() => {
          playPauseButton.style.opacity = "0";
        }, 2000);
      };

      container.onmousemove = showControls;
      clonedVideo.onmousemove = showControls;

      container.appendChild(clonedVideo);
      container.appendChild(closeButton);
      container.appendChild(playPauseButton);
      document.body.appendChild(container);

      container.onclick = (e) => {
        if (e.target === container) {
          document.body.removeChild(container);
        }
      };

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          document.body.removeChild(container);
          document.removeEventListener("keydown", handleEscape);
        }
      };
      document.addEventListener("keydown", handleEscape);

      clonedVideo.play().catch(console.error);
    } catch (error) {
      console.error("Erro ao tentar expandir vídeo:", error);
    }
  };

  return { handleExpandClick };
};
