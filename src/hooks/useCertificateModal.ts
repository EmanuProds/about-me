import React from "react";

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
      console.error("Error trying to open certificate:", error);
    }
  };

  return { handleCertificateClick };
};
