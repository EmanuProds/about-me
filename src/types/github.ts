export interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
}

export interface GithubStatsData {
  publicRepos: number;
  totalContributions: number;
  contributionsYear: number;
  yearsOfExperience: number;
}

export interface GithubStatsResponse {
  publicRepos: number;
  totalContributions: number;
  yearsOfExperience: number;
}
