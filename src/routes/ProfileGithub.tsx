"use client";

import React, { useState, useEffect } from "react";

interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
}

interface GithubProfileProps {
  username: string;
}

const ProfileGithub: React.FC<GithubProfileProps> = ({ username }) => {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
        );
        if (!response.ok) {
          throw new Error(
            `Não foi possível localizar o usuário: ${response.statusText}`,
          );
        }
        const data: GithubUser = await response.json();
        setUser(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Ocorreu um erro desconhecido",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  if (loading) {
    return <p>Carregando perfil...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Erro: {error}</p>;
  }

  if (user) {
    return (
      <div>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          <img
            src={user.avatar_url}
            alt={`${user.login} imagem de perfil do EmanuProds no GitHub`}
            className="w-50 h-50 border-4 border-slate-400 rounded-full"
          />
        </a>
      </div>
    );
  }
};

export default ProfileGithub;
