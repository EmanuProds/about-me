// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importa a fonte Inter
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] }); // Configura a fonte

export const metadata: Metadata = {
  title: "Seu Nome | Portfólio de Desenvolvedor",
  description: "Portfólio pessoal de [Seu Nome], desenvolvedor front-end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {" "}
      {/* Adiciona scroll-smooth e lang */}
      <body
        className={`${inter.className} bg-gray-50 dark:bg-background text-gray-900 dark:text-textLight transition-colors duration-300`}
      >
        <Navbar />
        <main className="pt-20">
          {" "}
          {/* Adiciona padding superior para não sobrepor a Navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
