"use client";

import React, { useState, useEffect } from "react";
import { GithubStatsData } from "@/types/github";
import { useTranslations } from "@/hooks/useTranslations";

interface GithubStatsProps {
  username: string;
}

const GithubStats: React.FC<GithubStatsProps> = ({ username }) => {
  const { t } = useTranslations();
  const [stats, setStats] = useState<GithubStatsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/github-stats", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username }),
        });

        if (!response.ok) {
          throw new Error(`Erro na API: ${response.status}`);
        }

        const data = await response.json();
        setStats(data);
      } catch (err) {
        console.error("Erro ao buscar estatísticas:", err);
        setError(err instanceof Error ? err.message : "Erro desconhecido");
        setStats({
          publicRepos: 0,
          totalContributions: 0,
          yearsOfExperience: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="w-16 h-16 border-4 border-gray-300 dark:border-gray-600 border-t-slate-500 dark:border-t-slate-400 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 mt-4">Erro: {error}</p>;
  }

  return (
    <div className="flex space-x-14 mt-4 text-center justify-center">
      <div className="flex flex-col">
        <span className="text-6xl font-bold text-slate-600 dark:text-slate-400">
          {stats?.publicRepos ?? 0}
        </span>
        <span className="mt-2 text-1xl text-gray-100">{t.stats.repositories}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-6xl font-bold text-slate-600 dark:text-slate-400">
          {stats?.totalContributions ?? 0}
        </span>
        <span className="mt-2 text-1xl text-gray-100">{t.stats.contributions}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-6xl font-bold text-slate-600 dark:text-slate-400">
          {stats?.yearsOfExperience ?? 0}+
        </span>
        <span className="mt-2 text-1xl text-gray-100">{t.stats.experience}</span>
      </div>
    </div>
  );
};

export default GithubStats;
