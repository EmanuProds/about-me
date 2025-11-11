"use client";

import React from "react";
import { GITHUB_USERNAME } from "@/lib/constants";
import { useTranslations } from "@/hooks/useTranslations";

import ProfileGithub from "@/components/github/ProfileGithub";

const Profile: React.FC = () => {
  const { t } = useTranslations();

  return (
    <main id="inicio" className="flex flex-col items-center p-10 scroll-mt-20">
      <ProfileGithub username={GITHUB_USERNAME} />
      <h1 className="text-3xl font-bold mt-4 text-gray-900 dark:text-white">
        {t.profile.name}
      </h1>
      <p className="text-xl mt-2 text-gray-500 dark:text-slate-400">
        {t.profile.title}
      </p>
    </main>
  );
};

export default Profile;
