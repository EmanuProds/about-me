"use client";

import React from "react";

import ProfileGithub from "@/routes/ProfileGithub";

interface ProfileProps {
  username: string;
}

const Profile: React.FC<ProfileProps> = ({ username }) => {
  return (
    <main>
      <ProfileGithub username={username} />
    </main>
  );
};

export default Profile;
