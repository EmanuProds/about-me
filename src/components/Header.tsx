'use client';

import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle"; // Importa o ThemeToggle

// A função Header foi convertida em um Client Component para melhor integração
// com o ThemeToggle, mesmo que o Header em si não use um hook de tema.

export const Header = () => {
  return (
    // Ajustado para cores compatíveis com light/dark theme e efeito de desfoque
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md sticky top-0 z-50 p-4 mb-10 shadow-md dark:shadow-xl text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Título */}
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">EmanuProds.dev</h1>
        
        {/* Navegação e Toggle */}
        <nav className="flex items-center space-x-6">
          {/* Links de navegação */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#inicio"
              className="text-md font-semibold text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition duration-150"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-md font-semibold text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition duration-150"
            >
              Sobre
            </a>
            <a
              href="#projetos"
              className="text-md font-semibold text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition duration-150"
            >
              Projetos
            </a>
            <a
              href="#formacao"
              className="text-md font-semibold text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition duration-150"
            >
              Formação
            </a>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Ícones Sociais (Apenas para demonstração, mantido para layout) */}
          <div className="flex space-x-4">
            {/* Ocultado para simplificar, mas mantendo a estrutura de exemplo */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;