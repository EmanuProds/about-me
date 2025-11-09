// StatsGithub.tsx

"use client";

import React, { useState, useEffect } from "react";

interface GithubStatsData {
  public_repos: number;
  totalContributions: number; // Novo campo
}

interface GithubStatsProps {
  username: string;
}

const GithubStats: React.FC<GithubStatsProps> = ({ username }) => {
  const [stats, setStats] = useState<GithubStatsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [startYear, setStartYear] = useState<number | null>(null);

  // Calcula os anos de experiência com base no primeiro ano de commit encontrado
  const START_YEAR = 2023; 
  const anosDeExperiencia = new Date().getFullYear() - START_YEAR;

  useEffect(() => {
    const fetchGithubData = async () => {
      setLoading(true);
      
      try {
        // --- 1. Buscar o número de Repositórios (API v3) ---
        const statsResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!statsResponse.ok) throw new Error("Erro ao buscar stats v3.");
        const statsData = await statsResponse.json();

        // --- 2. Buscar Contribuições (Nosso Novo API Endpoint) ---
        const contributionsResponse = await fetch("/api/github-stats", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username }),
        });
        if (!contributionsResponse.ok) throw new Error("Erro ao buscar contribuições da API interna.");
        const contributionsData = await contributionsResponse.json();
        
        // --- 3. Buscar o Primeiro Ano de Commit (Eventos) ---
        let fetchedStartYear = 2023; // Fallback
        const eventsResponse = await fetch(`https://api.github.com/users/${username}/events/public`);
        if (eventsResponse.ok) {
            const events = await eventsResponse.json();
            const pushEvents = events.filter((event: any) => event.type === "PushEvent");
            if (pushEvents.length > 0) {
                const oldestEvent = pushEvents[pushEvents.length - 1];
                const firstCommitDate = new Date(oldestEvent.created_at);
                fetchedStartYear = firstCommitDate.getFullYear();
            }
        }
        setStartYear(fetchedStartYear);
        
        // --- 4. Atualizar o Estado com TODOS os dados ---
        setStats({
            public_repos: statsData.public_repos || 0,
            totalContributions: contributionsData.totalContributions || 0,
        });

      } catch (err) {
        console.error("Erro na busca de dados do GitHub:", err);
        setStats({ public_repos: 0, totalContributions: 0 }); // Fallback
        setStartYear(2023); // Fallback
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [username]);

  if (loading) {
    return <p className="text-slate-500 mt-4">Carregando estatísticas...</p>;
  }

  const repoCount = stats?.public_repos ?? 0;
  // Agora temos o número exato de contribuições!
  const contributionsCount = stats?.totalContributions ?? 0;

  return (
    <div className="flex space-x-14 mt-4 text-center">
      
      <div className="flex flex-col">
        <span className="text-5xl font-bold text-slate-400">{repoCount}</span>
        <span className="text-sm text-white">Repositórios</span>
      </div>

      <div className="flex flex-col">
        <span className="text-5xl font-bold text-slate-400">{contributionsCount}</span>
        <span className="text-sm text-white">Contribuições</span>
      </div>

      <div className="flex flex-col">
        <span className="text-5xl font-bold text-slate-400">{anosDeExperiencia}+</span>
        <span className="text-sm text-white">Anos de Experiência</span>
      </div>

    </div>
  );
};

export default GithubStats;