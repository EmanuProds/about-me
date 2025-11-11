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
      // Handle devlinks certificates based on language
      if (certificateUrl === "devlinks") {
        const langSuffix = currentLanguage === "pt-BR" ? "pt-br" : "en";
        certificateUrl = `/about-me/certificates/devlinks-certificate_${langSuffix}.pdf`;
      } else {
        certificateUrl = `/about-me${certificateUrl}`;
      }

      // Open PDF in new tab for better compatibility with GitHub Pages
      window.open(certificateUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error("Erro ao tentar abrir certificado:", error);
    }
  };

  return { handleCertificateClick };
};
