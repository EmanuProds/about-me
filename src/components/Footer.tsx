// src/components/Footer.tsx
import React from 'react';
import { portfolioData } from "@/lib/data";
import SocialLinks from './SocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 py-8 px-4 text-center text-gray-700 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto">
        <p className="mb-4 text-sm">&copy; {currentYear} {portfolioData.name}. Todos os direitos reservados.</p>
        <SocialLinks links={portfolioData.socialLinks} iconSize={24} className="justify-center" />
        <p className="mt-4 text-xs">Construído com Next.js, React, TypeScript e Tailwind CSS.</p>
      </div>
    </footer>
  );
}