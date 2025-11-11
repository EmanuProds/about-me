"use client";

import React from "react";
import { GITHUB_CONFIG, socialLinks } from "@/lib/constants";
import { useTranslations } from "@/hooks/useTranslations";
import { getSocialIcon } from "@/lib/data";
import ProfileGithub from "@/components/github/ProfileGithub";

/**
 * Main profile component.
 * Displays basic user information and integrates with the GitHub profile component.
 */
const Profile: React.FC = () => {
  const { t } = useTranslations();

  return (
    <main id="inicio" className="flex flex-col items-center p-10 scroll-mt-20">
      <ProfileGithub username={GITHUB_CONFIG.USERNAME} />
      <h1 className="text-3xl font-bold mt-4 text-gray-900 dark:text-white text-center md:text-left">
        {t.profile.name}
      </h1>
      <p className="text-xl mt-2 text-gray-500 dark:text-slate-400 text-center md:text-left">
        {t.profile.title}
      </p>
      <div className="flex items-center justify-center gap-4 mt-4">
        {socialLinks.map(({ name, url, icon, ariaLabel }) => {
          const Icon = getSocialIcon(icon);
          return (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:text-slate-500 dark:hover:text-slate-400"
              aria-label={ariaLabel}
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
