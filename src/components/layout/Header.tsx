"use client";

import LanguageToggle from "@/components/ui/LanguageToggle";
import { useTranslations } from "@/hooks/useTranslations";

const NAV_LINKS = [
  { href: "#inicio", key: "home" },
  { href: "#sobre", key: "about" },
  { href: "#projetos", key: "projects" },
  { href: "#formacao", key: "education" },
] as const;

const Header = () => {
  const { t } = useTranslations();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:p-4 bg-gray-200/60 dark:bg-black/20 text-gray-900 dark:text-gray-100 backdrop-blur-lg border-b border-gray-400/20 dark:border-gray-100/20 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        <h1 className="text-lg md:text-xl font-semibold truncate">
          @EmanuProds
        </h1>

        <nav className="flex items-center space-x-3 md:space-x-6">
          <div className="hidden md:flex space-x-4">
            {NAV_LINKS.map(({ href, key }) => (
              <a
                key={key}
                href={href}
                className="text-sm md:text-md font-semibold hover:text-slate-500 dark:hover:text-slate-400 transition duration-150"
              >
                {t.header[key]}
              </a>
            ))}
          </div>
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
