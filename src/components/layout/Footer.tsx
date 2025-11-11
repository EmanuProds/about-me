"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "@/lib/constants";
import { useTranslations } from "@/hooks/useTranslations";

/**
 * Application footer component.
 * Displays copyright, current year and social media links.
 */
const Footer = () => {
  const { t } = useTranslations();
  const currentYear = new Date().getFullYear();

  // Function to get the correct icon based on name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FaLinkedin":
        return FaLinkedin;
      case "FaWhatsapp":
        return FaWhatsapp;
      case "FaGithub":
        return FaGithub;
      default:
        return FaGithub;
    }
  };

  return (
    <footer className="mt-16 bg-gray-200/60 dark:bg-black/20 backdrop-blur-sm border-t border-gray-400/20 dark:border-gray-100/20 transition-colors duration-300">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 text-sm font-semibold text-gray-800 dark:text-gray-200">
          {/* Social links and Made with together on desktop */}
          <div className="hidden md:flex items-center gap-6">
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, iconName, label, hoverColor }) => {
                const Icon = getIcon(iconName);
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl text-gray-800 dark:text-gray-200 transition-colors duration-200 ${hoverColor}`}
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Copyright on the side */}
          <p className="text-center md:text-right flex items-center justify-center md:justify-end gap-2">
            <span className="text-lg">©</span>
            <span>
              {currentYear} EmanuProds. {t.footer.copyright}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
