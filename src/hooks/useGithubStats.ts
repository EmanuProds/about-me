import { useState, useEffect } from "react";
import { GithubStatsData } from "@/types/github";

/**
 * GitHub API configuration constants
 */
const GITHUB_API_CONFIG = {
  BASE_URL: "https://api.github.com",
  EVENTS_PER_PAGE: 50,
  REPOS_PER_PAGE: 1,
  MONTHS_OF_DATA_ESTIMATE: 2,
  MIN_CONTRIBUTIONS: 50,
  REPO_CONTRIBUTION_MULTIPLIER: 25,
  EXPERIENCE_CONTRIBUTION_MULTIPLIER: 80,
} as const;

/**
 * Fallback data for when API fails
 */
const FALLBACK_STATS: GithubStatsData = {
  publicRepos: 6,
  totalContributions: 200,
  contributionsYear: new Date().getFullYear(),
  yearsOfExperience: 1,
};

/**
 * GitHub API event type
 */
interface GithubEvent {
  type: string;
  payload?: {
    commits?: unknown[];
  };
}

/**
 * Calculates years of experience based on first repository creation date
 */
const calculateYearsOfExperience = (reposData: { created_at?: string }[]): number => {
  if (reposData.length === 0 || !reposData[0]?.created_at) {
    return 1; // Default minimum
  }

  const firstRepoYear = new Date(reposData[0].created_at).getFullYear();
  const currentYear = new Date().getFullYear();

  return Math.max(currentYear - firstRepoYear + 1, 1);
};

/**
 * Estimates total contributions based on recent GitHub events
 */
const estimateContributionsFromEvents = async (username: string): Promise<number> => {
  try {
    const eventsResponse = await fetch(
      `${GITHUB_API_CONFIG.BASE_URL}/users/${username}/events?per_page=${GITHUB_API_CONFIG.EVENTS_PER_PAGE}`
    );

    if (!eventsResponse.ok) {
      throw new Error("Failed to fetch events");
    }

    const eventsData: GithubEvent[] = await eventsResponse.json();
    const pushEvents = eventsData.filter(event => event.type === "PushEvent");

    if (pushEvents.length === 0) {
      return 0;
    }

    // Count commits from recent events
    const recentCommits = pushEvents.reduce((total, event) => {
      return total + (Array.isArray(event.payload?.commits) ? event.payload.commits.length : 1);
    }, 0);

    // Estimate annual contributions based on recent activity
    const monthlyCommits = recentCommits / GITHUB_API_CONFIG.MONTHS_OF_DATA_ESTIMATE;
    return Math.round(monthlyCommits * 12);
  } catch (error) {
    console.warn("Failed to fetch events for contributions estimate:", error);
    return 0;
  }
};

/**
 * Fallback calculation for contributions when event data is unavailable
 */
const calculateFallbackContributions = (publicRepos: number, yearsOfExperience: number): number => {
  const repoBased = publicRepos * GITHUB_API_CONFIG.REPO_CONTRIBUTION_MULTIPLIER;
  const experienceBased = yearsOfExperience * GITHUB_API_CONFIG.EXPERIENCE_CONTRIBUTION_MULTIPLIER;

  return Math.max(repoBased, experienceBased, GITHUB_API_CONFIG.MIN_CONTRIBUTIONS);
};

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
      if (!username) return;

      try {
        setLoading(true);
        setError(null);

        // Fetch user data
        const userResponse = await fetch(
          `${GITHUB_API_CONFIG.BASE_URL}/users/${username}`
        );

        if (!userResponse.ok) {
          if (userResponse.status === 403) {
            console.warn("GitHub API rate limited for user data");
            throw new Error("RATE_LIMIT");
          }
          throw new Error("Failed to fetch user data");
        }

        const userData = await userResponse.json();

        // Fetch repositories to calculate years of experience
        const reposResponse = await fetch(
          `${GITHUB_API_CONFIG.BASE_URL}/users/${username}/repos?sort=created&per_page=${GITHUB_API_CONFIG.REPOS_PER_PAGE}`
        );

        if (!reposResponse.ok) {
          throw new Error("Failed to fetch repos");
        }

        const reposData = await reposResponse.json();
        const yearsOfExperience = calculateYearsOfExperience(reposData);

        // Try to get contributions from events, fallback to calculation
        let totalContributions = await estimateContributionsFromEvents(username);

        if (totalContributions === 0) {
          totalContributions = calculateFallbackContributions(userData.public_repos, yearsOfExperience);
        }

        const finalStats: GithubStatsData = {
          publicRepos: userData.public_repos,
          totalContributions,
          contributionsYear: new Date().getFullYear(),
          yearsOfExperience,
        };

        setStats(finalStats);
      } catch (err) {
        console.warn("GitHub API failed, using fallback data:", err);
        setError("Failed to load GitHub stats");
        setStats(FALLBACK_STATS);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  return { stats, loading, error };
};
