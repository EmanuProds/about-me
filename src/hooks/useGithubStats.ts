import { useState, useEffect } from "react";
import { GithubStatsData } from "@/types/github";

/**
 * Hook customizado para buscar estatísticas do GitHub.
 * Compatível com GitHub Pages (static export).
 */
export const useGithubStats = (username: string) => {
  const [stats, setStats] = useState<GithubStatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);

        // Buscar dados do usuário
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!userResponse.ok) {
          if (userResponse.status === 403) {
            // Rate limit - usar dados mock
            console.warn("GitHub API rate limited for user data");
            throw new Error("RATE_LIMIT");
          }
          throw new Error("Failed to fetch user data");
        }

        const userData = await userResponse.json();

        // Buscar mais repositórios para calcular anos de experiência
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=created&per_page=1`
        );
        if (!reposResponse.ok) throw new Error("Failed to fetch repos");

        const reposData = await reposResponse.json();

        // Calcular anos de experiência baseado no primeiro repo
        const firstRepoYear =
          reposData.length > 0 && reposData[0]?.created_at
            ? new Date(reposData[0].created_at).getFullYear()
            : new Date().getFullYear();

        const yearsOfExperience = Math.max(
          new Date().getFullYear() - firstRepoYear + 1,
          1
        );

        // Calcular contribuições baseado em dados reais disponíveis
        // Como a API de contribuições pode ter problemas de CORS/rate limit,
        // usar uma estimativa mais precisa baseada nos repositórios e atividade
        let totalContributions = 0;

        try {
          // Tentar buscar eventos recentes para estimativa mais precisa
          const eventsResponse = await fetch(
            `https://api.github.com/users/${username}/events?per_page=50`
          );

          if (eventsResponse.ok) {
            const eventsData = await eventsResponse.json();
            const pushEvents = eventsData.filter(
              (event: any) => event.type === "PushEvent"
            );

            if (pushEvents.length > 0) {
              // Contar commits dos eventos recentes
              const recentCommits = pushEvents.reduce(
                (total: number, event: any) => {
                  return total + (event.payload?.commits?.length || 1);
                },
                0
              );

              // Estimar contribuições anuais baseado na atividade recente
              // Assumir que 50 eventos representam ~1-2 meses de atividade
              const monthsOfData = 2;
              const monthlyCommits = recentCommits / monthsOfData;
              totalContributions = Math.round(monthlyCommits * 12); // anual
            }
          }
        } catch (error) {
          console.warn(
            "Failed to fetch events for contributions estimate:",
            error
          );
        }

        // Se não conseguiu dados de eventos, usar estimativa baseada em repositórios
        if (totalContributions === 0) {
          totalContributions = Math.max(
            userData.public_repos * 25,
            yearsOfExperience * 80
          );
        }

        // Garantir mínimo realista
        totalContributions = Math.max(totalContributions, 50);

        const finalStats = {
          publicRepos: userData.public_repos,
          totalContributions,
          contributionsYear: new Date().getFullYear(),
          yearsOfExperience,
        };

        setStats(finalStats);
      } catch (err) {
        console.warn("GitHub API failed, using fallback data:", err);
        setError("Failed to load GitHub stats");

        // Fallback data mais realista baseado no perfil conhecido
        setStats({
          publicRepos: 6,
          totalContributions: 200, 
          contributionsYear: 2025,
          yearsOfExperience: 1, 
        });
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchStats();
    }
  }, [username]);

  return { stats, loading, error };
};
