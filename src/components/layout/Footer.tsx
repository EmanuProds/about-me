"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "@/hooks/useTranslations";

const Footer = () => {
  const { t } = useTranslations();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://linkedin.com/in/EmanuProds",
      icon: FaLinkedin,
      label: "LinkedIn",
      hoverColor: "hover:text-slate-500 dark:hover:text-slate-400",
    },
    {
      href: "https://wa.me/+5522996127465",
      icon: FaWhatsapp,
      label: "WhatsApp",
      hoverColor: "hover:text-slate-500 dark:hover:text-slate-400",
    },
    {
      href: "https://github.com/EmanuProds",
      icon: FaGithub,
      label: "GitHub",
      hoverColor: "hover:text-slate-500 dark:hover:text-slate-400",
    },
  ];

  return (
    <footer className="mt-16 bg-gray-200/60 dark:bg-black/20 backdrop-blur-sm border-t border-gray-400/20 dark:border-gray-100/20 transition-colors duration-300">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between gap-6 text-sm font-semibold text-gray-800 dark:text-gray-200">
          <p>
            © {currentYear} EmanuProds {t.footer.copyright}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-sm mr-2">{t.footer.contacts}</span>
            {socialLinks.map(({ href, icon: Icon, label, hoverColor }) => (
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
            ))}
          </div>

          <p>{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
