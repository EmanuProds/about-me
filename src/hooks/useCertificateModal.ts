import React from "react";

/**
 * Certificate configuration constants
 */
const CERTIFICATE_CONFIG = {
  DEVLINKS_ID: "devlinks",
  CERTIFICATES_PATH: "/certificates",
  BASE_PATH_PRODUCTION: "/about-me",
} as const;

/**
 * Detects if the application is running in a local development environment
 */
const isLocalEnvironment = (): boolean => {
  if (typeof window === "undefined") return false;

  const hostname = window.location.hostname;
  return (
    hostname === "localhost" ||
    hostname.startsWith("192.168.") ||
    hostname.startsWith("10.") ||
    hostname === "127.0.0.1"
  );
};

/**
 * Builds the full certificate URL based on the certificate identifier and language
 */
const buildCertificateUrl = (certificateUrl: string, currentLanguage: string): string => {
  const basePath = isLocalEnvironment() ? "" : CERTIFICATE_CONFIG.BASE_PATH_PRODUCTION;

  if (certificateUrl === CERTIFICATE_CONFIG.DEVLINKS_ID) {
    const langSuffix = currentLanguage === "pt-BR" ? "pt-br" : "en";
    return `${basePath}${CERTIFICATE_CONFIG.CERTIFICATES_PATH}/devlinks-certificate_${langSuffix}.pdf`;
  }

  return `${basePath}${certificateUrl}`;
};

/**
 * Hook to manage certificate opening in modal.
 * Handles special certificates like devlinks that vary by language.
 */
export const useCertificateModal = () => {
  /**
   * Opens certificate in new tab.
   * Supports dynamic certificates based on current language.
   * @param certificateUrl - Certificate URL or identifier
   * @param currentLanguage - Current application language
   */
  const handleCertificateClick = (
    certificateUrl: string,
    currentLanguage: string
  ) => {
    try {
      const fullUrl = buildCertificateUrl(certificateUrl, currentLanguage);

      // Open PDF in new tab for better compatibility with GitHub Pages
      window.open(fullUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error trying to open certificate:", error);
    }
  };

  return { handleCertificateClick };
};
