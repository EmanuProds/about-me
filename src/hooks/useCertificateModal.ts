import React from "react";

/**
 * Hook para gerenciar abertura de certificados em modal.
 * Trata certificados especiais como devlinks que variam por idioma.
 */
export const useCertificateModal = () => {
  /**
   * Abre certificado em nova aba.
   * Suporta certificados dinâmicos baseados no idioma atual.
   * @param certificateUrl - URL ou identificador do certificado
   * @param currentLanguage - Idioma atual da aplicação
   */
  const handleCertificateClick = (
    certificateUrl: string,
    currentLanguage: string
  ) => {
    try {
      const basePath =
        typeof window !== "undefined" &&
        (window.location.hostname === "localhost" ||
         window.location.hostname.startsWith("192.168.") ||
         window.location.hostname.startsWith("10.") ||
         window.location.hostname === "127.0.0.1")
          ? ""
          : "/about-me";

      // Handle devlinks certificates based on language
      if (certificateUrl === "devlinks") {
        const langSuffix = currentLanguage === "pt-BR" ? "pt-br" : "en";
        certificateUrl = `${basePath}/certificates/devlinks-certificate_${langSuffix}.pdf`;
      } else {
        certificateUrl = `${basePath}${certificateUrl}`;
      }

      // Open PDF in new tab for better compatibility with GitHub Pages
      window.open(certificateUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Erro ao tentar abrir certificado:", error);
    }
  };

  return { handleCertificateClick };
};
