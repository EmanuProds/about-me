"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useTranslations } from "@/hooks/useTranslations";

const Header = () => {
  const { t } = useTranslations();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-200/60 dark:bg-black/20 text-gray-900 dark:text-gray-100 backdrop-blur-lg border-b border-gray-400/20 dark:border-gray-100/20 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">@EmanuProds</h1>

        <nav className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-4">
            <a
              href="#inicio"
              className="text-md font-semibold hover:text-slate-500 dark:hover:text-slate-400 transition duration-150"
            >
              {t.header.home}
            </a>
            <a
              href="#sobre"
              className="text-md font-semibold hover:text-slate-500 dark:hover:text-slate-400 transition duration-150"
            >
              {t.header.about}
            </a>
            <a
              href="#projetos"
              className="text-md font-semibold hover:text-slate-500 dark:hover:text-slate-400 transition duration-150"
            >
              {t.header.projects}
            </a>
            <a
              href="#formacao"
              className="text-md font-semibold hover:text-slate-500 dark:hover:text-slate-400 transition duration-150"
            >
              {t.header.education}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
