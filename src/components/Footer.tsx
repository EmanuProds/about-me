'user client';

import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaRegCopyright } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle"; // Importa o novo componente

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Adicionadas classes responsivas ao tema para o Footer
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700/50 text-gray-800 dark:text-gray-200 p-6 mt-8 transition-colors duration-300">
      <div className="container mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 dark:border-gray-700/50 pb-4">
          
          <div>
            <h2 className="text-2xl font-bold text-slate-600 dark:text-slate-400">Emanuel Pereira</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Desenvolvedor Full-Stack</p>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/EmanuProds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-800 dark:text-white hover:text-sky-500 dark:hover:text-slate-400 transition duration-150"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/EmanuProds" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-500 dark:text-gray-400 hover:text-sky-500 transition duration-150"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/+5522996127465" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-500 dark:text-gray-400 hover:text-sky-500 transition duration-150"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Seção Inferior: Direitos Autorais, Créditos e Tema */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 dark:text-gray-400 text-xs pt-4">
          {/* Parte 1: Copyright e Créditos */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 order-2 md:order-1">
            <p className="flex items-center">
              <FaRegCopyright className="mr-1" /> {currentYear} EmanuProds. Todos os direitos reservados.
            </p>
            <p className="hidden md:block">|</p> {/* Separador */}
            <p className="text-center">
              Desenvolvido com <span className="text-red-500">❤️</span> utilizando: TypeScript, React.js e Next.js.
            </p>
          </div>
          
          {/* Parte 2: Theme Toggle (Posicionada à esquerda ou topo no mobile, ordem 1) */}
          <div className="mt-4 md:mt-0 order-1 md:order-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;