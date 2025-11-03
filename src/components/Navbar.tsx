// src/components/Navbar.tsx
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data"; // Importa os dados

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-background/80 backdrop-blur-md shadow-sm dark:shadow-lg"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-textLight hover:text-primary dark:hover:text-primary transition-colors"
        >
          {portfolioData.name.split(" ")[0]} {/* Apenas o primeiro nome */}
        </Link>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            {["Início", "Sobre", "Projetos", "Habilidades", "Contato"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
