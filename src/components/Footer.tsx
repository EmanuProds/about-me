// Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaRegCopyright } from "react-icons/fa";

// Você pode adicionar mais ícones ou links conforme a sua necessidade

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 border-t border-gray-700/50 text-white p-6 mt-8">
      <div className="container mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700/50 pb-2">
          
          <div>
            <h2 className="text-2xl font-bold text-slate-400">Emanuel Pereira</h2>
            <p className="text-gray-400 text-sm mt-1">Desenvolvedor Full-Stack</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/EmanuProds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-slate-400 transition duration-150"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/EmanuProds" // Ajustei o link para um padrão mais realista
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-sky-400 transition duration-150"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/+5522996127465" // Substitua pelo seu número
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-sky-400 transition duration-150"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright and Credits */}
        <div className="flex flex-row justify-between text-gray-500 text-xs pt-2 mb-2">
          <p className="flex">
            <FaRegCopyright className="mr-1" /> {currentYear} EmanuProds. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido com <span className="text-red-500">❤️</span> utilizando: TypeScript, React.js e Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
