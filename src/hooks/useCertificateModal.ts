import React from "react";

export const useCertificateModal = () => {
  const handleCertificateClick = (
    certificateUrl: string,
    currentLanguage: string
  ) => {
    try {
      // Handle devlinks certificates based on language
      if (certificateUrl === "devlinks") {
        const langSuffix = currentLanguage === "pt-BR" ? "pt-br" : "en";
        certificateUrl = `/certificates/devlinks-certificate_${langSuffix}.pdf`;
      }

      const container = document.createElement("div");
      container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.9);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
      `;

      const iframe = document.createElement("iframe");
      iframe.src = certificateUrl;
      iframe.style.cssText = `
        max-width: 90vw;
        max-height: 90vh;
        width: 800px;
        height: 600px;
        border: none;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      `;

      const closeButton = document.createElement("button");
      closeButton.innerHTML = "✕";
      closeButton.style.cssText = `
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(0,0,0,0.7);
        color: white;
        border: none;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
      `;

      closeButton.onclick = () => {
        document.body.removeChild(container);
      };

      container.appendChild(iframe);
      container.appendChild(closeButton);
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
    } catch (error) {
      console.error("Erro ao tentar abrir certificado:", error);
    }
  };

  return { handleCertificateClick };
};
