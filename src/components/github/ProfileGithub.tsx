"use client";

import React, { useState, useEffect } from "react";
import { GithubUser } from "@/types/github";

/**
 * Props para o componente ProfileGithub.
 */
interface GithubProfileProps {
  /** Nome de usuário do GitHub */
  username: string;
}

/**
 * Componente que exibe a imagem de perfil do GitHub.
 * Busca dados do usuário via GitHub API e exibe avatar com loading state.
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
          throw new Error(`Erro ao buscar perfil: ${response.status}`);
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.error("Erro ao buscar perfil:", err);
        setError(err instanceof Error ? err.message : "Erro desconhecido");
        setLoading(false);
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

  const imageContainerClasses = "relative w-64 h-64 mx-auto";

  if (error) {
    return <p className="text-red-500 text-center">Erro: {error}</p>;
  }

  return (
    <div className={imageContainerClasses}>
      {loading && (
        <div className="absolute inset-0 bg-slate-600 dark:bg-slate-400 rounded-full animate-pulse" />
      )}

      {user && (
        <img
          src={user.avatar_url}
          alt={`${user.login} imagem de perfil do GitHub`}
          className={`w-64 h-64 border-4 border-slate-400 rounded-full transition-opacity duration-300 ${
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
