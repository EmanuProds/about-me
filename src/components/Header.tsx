import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { colors } from "@/styles/colors";

interface HeaderProps {
  username: string;
  size: number;
}

export const Header = () => {
  return (
    <header className="bg-neutral-800/80 backdrop-blur-md sticky top-0 z-50 p-4 shadow-lg text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Portifólio</h1>
        <nav className="space-x-4">
          <a
            href="#"
            className="text-xl font-semibold hover:text-gray-400 transition duration-150"
          >
            Início
          </a>
          <a
            href="#"
            className="text-xl font-semibold hover:text-gray-400 transition duration-150"
          >
            Tecnologias
          </a>
          <a
            href="#"
            className="text-xl font-semibold hover:text-gray-400 transition duration-150"
          >
            Projetos
          </a>
          <a
            href="#"
            className="text-xl font-semibold hover:text-gray-400 transition duration-150"
          >
            Contato
          </a>
        </nav>
        <div className="flex space-x-4">
          <a
            href="https://github.com/EmanuProds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition duration-150"
          >
            <FaGithub />
          </a>
          <a
            href="https://github.com/EmanuProds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition duration-150"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/EmanuProds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition duration-150"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
