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
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error("Failed to fetch user data");

        const userData = await userResponse.json();

        // Buscar mais repositórios para melhor estimativa
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
        );
        if (!reposResponse.ok) throw new Error("Failed to fetch repos");

        const reposData = await reposResponse.json();

        // Calcular anos de experiência baseado no primeiro repo
        const firstRepoYear = reposData.length > 0 && reposData[reposData.length - 1]?.created_at
          ? new Date(reposData[reposData.length - 1].created_at).getFullYear()
          : new Date().getFullYear();

        const yearsOfExperience = Math.max(new Date().getFullYear() - firstRepoYear + 1, 1);

        // Calcular contribuições baseado em commits dos repositórios
        let totalContributions = 0;
        const sampleRepos = reposData.slice(0, 5); // Analisar primeiros 5 repos

        for (const repo of sampleRepos) {
          try {
            const commitsResponse = await fetch(
              `https://api.github.com/repos/${username}/${repo.name}/commits?author=${username}&per_page=100`
            );
            if (commitsResponse.ok) {
              const commitsLink = commitsResponse.headers.get('link');
              // Se há link de paginação, estimar mais commits
              if (commitsLink && commitsLink.includes('rel="next"')) {
                totalContributions += 100; // Pelo menos 100 commits neste repo
              } else {
                // Contar commits reais se não há paginação
                const commitsData = await commitsResponse.json();
                totalContributions += commitsData.length;
              }
            }
          } catch (err) {
            // Ignorar erros individuais de repositório
            console.warn(`Failed to fetch commits for ${repo.name}:`, err);
          }
        }

        // Garantir mínimo de contribuições baseado nos repositórios
        totalContributions = Math.max(totalContributions, userData.public_repos * 8, 50);

        setStats({
          publicRepos: userData.public_repos,
          totalContributions,
          yearsOfExperience,
        });
      } catch (err) {
        console.warn("GitHub API failed, using fallback data:", err);
        setError("Failed to load GitHub stats");

        // Fallback data para GitHub Pages
        setStats({
          publicRepos: 15,
          totalContributions: 450,
          yearsOfExperience: 3,
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
