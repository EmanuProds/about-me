"use client";

import React, { useState, useEffect } from "react";
import { GithubUser } from "@/types/github";

interface GithubProfileProps {
  username: string;
}

const IMAGE_CLASSES = "w-38 h-38 md:w-64 md:h-64 border-4 border-slate-400 rounded-full transition-opacity duration-300";
const CONTAINER_CLASSES = "relative w-38 h-38 md:w-64 md:h-64 mx-auto";

const createFallbackUser = (username: string): GithubUser => ({
  login: username,
  avatar_url: `https://github.com/${username}.png`,
  html_url: `https://github.com/${username}`,
  name: username,
});

const ProfileGithub: React.FC<GithubProfileProps> = ({ username }) => {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!username) return;

    const fetchProfile = async () => {
      setLoading(true);
      setImageLoaded(false);

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (response.status === 403) {
          console.warn("GitHub API rate limited, using fallback");
          setUser(createFallbackUser(username));
          return;
        }

        if (!response.ok) {
          throw new Error(`Error fetching profile: ${response.status}`);
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.warn("Error fetching GitHub profile:", err);
        setUser(createFallbackUser(username));
      }
    };

    fetchProfile();
  }, [username]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setLoading(false);
  };

  const handleImageError = () => {
    setImageLoaded(true);
    setLoading(false);
  };

  return (
    <div className={CONTAINER_CLASSES}>
      {loading && (
        <div className="absolute inset-0 bg-slate-600 dark:bg-slate-400 rounded-full animate-pulse" />
      )}

      {user && (
        <img
          src={user.avatar_url}
          alt={`${user.login} GitHub profile image`}
          className={`${IMAGE_CLASSES} ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
    </div>
  );
};

export default ProfileGithub;
