import { useState, useEffect } from "react";
import { GithubStatsData } from "@/types/github";

/**
 * Custom hook to fetch GitHub statistics.
 * Compatible with GitHub Pages (static export).
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

        // Fetch user data
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!userResponse.ok) {
          if (userResponse.status === 403) {
            // Rate limit - use mock data
            console.warn("GitHub API rate limited for user data");
            throw new Error("RATE_LIMIT");
          }
          throw new Error("Failed to fetch user data");
        }

        const userData = await userResponse.json();

        // Fetch more repositories to calculate years of experience
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=created&per_page=1`
        );
        if (!reposResponse.ok) throw new Error("Failed to fetch repos");

        const reposData = await reposResponse.json();

        // Calculate years of experience based on first repo
        const firstRepoYear =
          reposData.length > 0 && reposData[0]?.created_at
            ? new Date(reposData[0].created_at).getFullYear()
            : new Date().getFullYear();

        const yearsOfExperience = Math.max(
          new Date().getFullYear() - firstRepoYear + 1,
          1
        );

        // Calculate contributions based on available real data
        // Since the contributions API may have CORS/rate limit issues,
        // use a more accurate estimate based on repositories and activity
        let totalContributions = 0;

        try {
          // Try to fetch recent events for more accurate estimate
          const eventsResponse = await fetch(
            `https://api.github.com/users/${username}/events?per_page=50`
          );

          if (eventsResponse.ok) {
            const eventsData = await eventsResponse.json();
            const pushEvents = eventsData.filter(
              (event: any) => event.type === "PushEvent"
            );

            if (pushEvents.length > 0) {
              // Count commits from recent events
              const recentCommits = pushEvents.reduce(
                (total: number, event: any) => {
                  return total + (event.payload?.commits?.length || 1);
                },
                0
              );

              // Estimate annual contributions based on recent activity
              // Assume 50 events represent ~1-2 months of activity
              const monthsOfData = 2;
              const monthlyCommits = recentCommits / monthsOfData;
              totalContributions = Math.round(monthlyCommits * 12); // annual
            }
          }
        } catch (error) {
          console.warn(
            "Failed to fetch events for contributions estimate:",
            error
          );
        }

        // If couldn't get event data, use repository-based estimate
        if (totalContributions === 0) {
          totalContributions = Math.max(
            userData.public_repos * 25,
            yearsOfExperience * 80
          );
        }

        // Ensure realistic minimum
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

        // More realistic fallback data based on known profile
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
