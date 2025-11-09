"use client";

import React from "react";

import ProfileGithub from "@/routes/ProfileGithub";

const Profile: React.FC = () => {
  const github_username = "EmanuProds";

  return (
    <main className="flex flex-col items-center p-10">
      <ProfileGithub username={github_username} />
      <h1 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">Emanuel Perereira</h1>
      <p className="text-xl text-gray-500 dark:text-slate-400 mt-2">Desenvolvedor Full-Stack</p>
    </main>
  );
};

export default Profile;
