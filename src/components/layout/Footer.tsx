"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "@/lib/constants";
import { useTranslations } from "@/hooks/useTranslations";

/**
 * Componente de rodapé da aplicação.
 * Exibe copyright, ano atual e links para redes sociais.
 */
const Footer = () => {
  const { t } = useTranslations();
  const currentYear = new Date().getFullYear();

  // Função para obter o ícone correto baseado no nome
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
          {/* Copyright always visible */}
          <p className="text-center md:text-left flex items-center justify-center md:justify-start gap-2">
            <span className="text-lg">©</span>
            <span>{currentYear} EmanuProds {t.footer.copyright}</span>
          </p>

          {/* Social links only on desktop */}
          <div className="hidden md:flex items-center justify-center gap-4">
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

          {/* Made with only on desktop */}
          <p className="hidden md:block text-right">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
