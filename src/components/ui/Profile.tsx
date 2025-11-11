"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GITHUB_USERNAME, socialLinks } from "@/lib/constants";
import { useTranslations } from "@/hooks/useTranslations";
import ProfileGithub from "@/components/github/ProfileGithub";

/**
 * Main profile component.
 * Displays basic user information and integrates with the GitHub profile component.
 */
const Profile: React.FC = () => {
  const { t } = useTranslations();

  // Function to get the correct icon based on name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FaLinkedin":
        return FaLinkedin;
      case "FaWhatsapp":
        return FaWhatsapp;
      case "FaGithub":
        return FaGithub;
      default:
        return FaGithub;
    }
  };

  return (
    <main id="inicio" className="flex flex-col items-center p-10 scroll-mt-20">
      <ProfileGithub username={GITHUB_USERNAME} />
      <h1 className="text-3xl font-bold mt-4 text-gray-900 dark:text-white text-center md:text-left">
        {t.profile.name}
      </h1>
      <p className="text-xl mt-2 text-gray-500 dark:text-slate-400 text-center md:text-left">
        {t.profile.title}
      </p>
      <div className="flex items-center justify-center gap-4 mt-4">
        {socialLinks.map(({ href, iconName, label, hoverColor }) => {
          const Icon = getIcon(iconName);
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl text-gray-800 dark:text-gray-200 transition-colors duration-200 ${hoverColor}`}
              aria-label={label}
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </main>
  );
};

export default Profile;
