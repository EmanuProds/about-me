import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { colors } from "@/styles/colors";

interface HeaderProps {
  username: string;
  size: number;
}

export const Header = () => {
  return (
    <header className="bg-neutral-800/80 backdrop-blur-md sticky top-0 z-50 p-4 mb-10 shadow-lg text-white">
      <div className="container flex justify-between">
        <h1 className="text-1xl font-semibold">EmanuProds.dev</h1>
        <nav className="space-x-4">
          <a
            href="#"
            className="text-1xl font-semibold hover:text-gray-400 transition duration-150"
          >
            Início
          </a>
          <a
            href="#"
            className="text-1xl font-semibold hover:text-gray-400 transition duration-150"
          >
            Sobre
          </a>
          <a
            href="#"
            className="text-1xl font-semibold hover:text-gray-400 transition duration-150"
          >
            Projetos
          </a>
          <a
            href="#"
            className="text-1xl font-semibold hover:text-gray-400 transition duration-150"
          >
            Formação
          </a>
          <a
            href="#"
            className="text-1xl font-semibold hover:text-gray-400 transition duration-150"
          >
            Experiências
          </a>
          <a
            href="#"
            className="text-1xl font-semibold hover:text-gray-400 transition duration-150"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
