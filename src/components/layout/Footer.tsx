"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "@/lib/constants";
import { useTranslations } from "@/hooks/useTranslations";

const ICON_MAP = {
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
} as const;

const Footer = () => {
  const { t } = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-gray-200/60 dark:bg-black/20 backdrop-blur-sm border-t border-gray-400/20 dark:border-gray-100/20 transition-colors duration-300">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 text-sm font-semibold text-gray-800 dark:text-gray-200">
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map(({ name, url, icon, ariaLabel }) => {
              const Icon = ICON_MAP[icon as keyof typeof ICON_MAP] || FaGithub;
              return (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:text-slate-500 dark:hover:text-slate-400"
                  aria-label={ariaLabel}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

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
