/**
 * Represents a compact entry in the professional experience timeline
 */
export interface Experience {
  /** Unique identifier for the entry */
  id: number;
  /** Job title held at the company */
  role: string;
  /** Company name */
  company: string;
  /** Employment period, e.g. "May 2026 — Present" */
  period: string;
  /** Short summary of scope and responsibilities */
  summary: string;
  /** Keys of technologies used, resolved through the tech icon map */
  technologies: string[];
}
