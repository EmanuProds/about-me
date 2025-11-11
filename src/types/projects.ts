/**
 * Represents a project in the portfolio
 */
export interface Project {
  /** Unique identifier for the project */
  id: number;
  /** Project title */
  title: string;
  /** Project description */
  description: string;
  /** Path to the project video */
  videoSrc: string;
  /** Array of technology keys used in the project */
  technologies: string[];
  /** URL to the live project (empty if not deployed) */
  projectUrl: string;
  /** URL to the GitHub repository */
  githubUrl: string;
}

/**
 * Props for the ProjectCard component (alias for Project)
 */
export type ProjectCardProps = Project;
