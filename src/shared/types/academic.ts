/**
 * Represents an academic record or course completion
 */
export interface AcademicRecord {
  /** Unique identifier for the academic record */
  id: number;
  /** Name of the course or program */
  course: string;
  /** Institution that provided the course */
  institution: string;
  /** Type of academic record (e.g., specializationCourse) */
  type: string;
  /** Duration of the course */
  duration: string;
  /** Detailed description of the course content */
  description: string;
  /** Icon identifier for visual representation */
  icon: string;
  /** Optional URL to the certificate PDF */
  certificateUrl?: string;
  /** Whether the record is clickable for more details */
  isClickable?: boolean;
}
