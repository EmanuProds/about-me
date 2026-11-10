/**
 * Basic GitHub user information
 */
export interface GithubUser {
  /** GitHub username */
  login: string;
  /** URL to the user's avatar image */
  avatar_url: string;
  /** URL to the user's GitHub profile */
  html_url: string;
  /** Display name of the user */
  name: string;
}

/**
 * GitHub statistics response from API
 */
export interface GithubStatsResponse {
  /** Number of public repositories */
  publicRepos: number;
  /** Total contributions across all time */
  totalContributions: number;
  /** Years of coding experience */
  yearsOfExperience: number;
}

/**
 * Extended GitHub statistics including yearly contributions
 */
export interface GithubStatsData extends GithubStatsResponse {
  /** Contributions in the current year */
  contributionsYear: number;
}
