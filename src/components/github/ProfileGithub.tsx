"use client";

import React, { useState, useEffect } from "react";
import { GithubUser } from "@/types/github";

/**
 * Props for the ProfileGithub component.
 */
interface GithubProfileProps {
  /** GitHub username */
  username: string;
}

/**
 * Component that displays GitHub profile image.
 * Fetches user data via GitHub API and displays avatar with loading state.
 */
const ProfileGithub: React.FC<GithubProfileProps> = ({ username }) => {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setImageLoaded(false);
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          if (response.status === 403) {
            // Rate limit - use fallback
            console.warn("GitHub API rate limited, using fallback");
            setUser({
              login: username,
              avatar_url: `https://github.com/${username}.png`,
              html_url: `https://github.com/${username}`,
              name: username,
            });
            return;
          }
          throw new Error(`Error fetching profile: ${response.status}`);
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.warn("Error fetching GitHub profile:", err);
        // Silent fallback
        setUser({
          login: username,
          avatar_url: `https://github.com/${username}.png`,
          html_url: `https://github.com/${username}`,
          name: username,
        });
        setLoading(false);
      }
    };

    if (username) {
      fetchProfile();
    }
  }, [username]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setLoading(false);
  };

  const handleImageError = () => {
    setImageLoaded(true);
    setLoading(false);
  };

  const imageContainerClasses = "relative w-38 h-38 md:w-64 md:h-64 mx-auto";

  if (error) {
    return <p className="text-red-500 text-center">Error: {error}</p>;
  }

  return (
    <div className={imageContainerClasses}>
      {loading && (
        <div className="absolute inset-0 bg-slate-600 dark:bg-slate-400 rounded-full animate-pulse" />
      )}

      {user && (
        <img
          src={user.avatar_url}
          alt={`${user.login} GitHub profile image`}
          className={`w-38 h-38 md:w-64 md:h-64 border-4 border-slate-400 rounded-full transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
    </div>
  );
};

export default ProfileGithub;
