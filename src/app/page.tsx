// src/app/page.tsx
"use client"; // Marca como Client Component para usar Framer Motion e ScrollSpy

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";
import { IconType } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

// Helper para obter ícones (mesma lógica do SocialLinks)
const getIcon = (iconName: string): IconType | null => {
  const FaIcon = (FaIcons as any)[iconName];
  if (FaIcon) return FaIcon;
  const SiIcon = (SiIcons as any)[iconName];
  if (SiIcon) return SiIcon;
  return null;
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative flex flex-col items-center justify-center min-h-screen text-center py-20 px-4 bg-gradient-to-br from-gray-100 to-white dark:from-background dark:to-gray-900"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-primary shadow-lg"
        >
          <Image
            src={portfolioData.profilePicture}
            alt={portfolioData.name}
            layout="fill"
            objectFit="cover"
            priority // Otimiza o carregamento da imagem principal
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-extrabold text-gray-900 dark:text-textLight mb-3 leading-tight"
        >
          Olá, eu sou <span className="text-primary">{portfolioData.name}</span>
          .
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
        >
          {portfolioData.title}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex space-x-4 mb-8"
        >
          <Link
            href="#contato"
            className="px-8 py-3 bg-primary text-white text-lg font-semibold rounded-full shadow-lg hover:bg-secondary transition-colors transform hover:scale-105"
          >
            Entre em Contato
          </Link>
          <Link
            href="/resume.pdf" // Adicione seu CV em public/resume.pdf
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors transform hover:scale-105"
          >
            Ver Currículo
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SocialLinks links={portfolioData.socialLinks} iconSize={28} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader title="Sobre Mim" subtitle="Quem eu sou?" />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-center"
          >
            {portfolioData.about}
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projetos"
        className="py-20 px-4 bg-gray-50 dark:bg-background"
      >
        <div className="container mx-auto">
          <SectionHeader title="Meus Projetos" subtitle="O que eu construí?" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="habilidades"
        className="py-20 px-4 bg-white dark:bg-gray-800"
      >
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            title="Minhas Habilidades"
            subtitle="Ferramentas e Tecnologias"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
            {portfolioData.skills.map((skill) => {
              const IconComponent = getIcon(skill.icon);
              return IconComponent ? (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md dark:shadow-xl hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <IconComponent
                    size={48}
                    className="mx-auto mb-3 text-primary"
                  />
                  <p className="text-lg font-semibold text-gray-800 dark:text-textLight">
                    {skill.name}
                  </p>
                </motion.div>
              ) : null;
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contato"
        className="py-20 px-4 bg-gray-50 dark:bg-background"
      >
        <div className="container mx-auto max-w-2xl text-center">
          <SectionHeader title="Entre em Contato" subtitle="Vamos conversar!" />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8"
          >
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à
            vontade para me enviar um e-mail ou conectar-se nas redes sociais.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center space-y-6"
          >
            <Link
              href={`mailto:${portfolioData.email}`}
              className="px-8 py-4 bg-primary text-white text-xl font-semibold rounded-full shadow-xl hover:bg-secondary transition-colors transform hover:scale-105"
            >
              ✉️ {portfolioData.email}
            </Link>
            <SocialLinks
              links={portfolioData.socialLinks}
              iconSize={36}
              className="mt-8"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
