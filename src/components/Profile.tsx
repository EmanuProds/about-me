"use client";

import React from "react";

import ProfileGithub from "@/routes/ProfileGithub";

interface ProfileProps {
  username: string;
}

const Profile: React.FC<ProfileProps> = () => {
  const github_username = "EmanuProds";

  return (
    <main className="flex flex-col items-center p-10">
      <ProfileGithub username={github_username} />
      <h1 className="text-3xl font-bold mt-2">Emanuel Perereira</h1>
      <p className="text-xl text-slate-400 mt-2">Desenvolvedor Full-Stack</p>
    </main>
  );
};

export default Profile;
