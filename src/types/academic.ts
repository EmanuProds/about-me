export interface AcademicRecord {
  id: number;
  course: string;
  institution: string;
  type: string;
  duration: string;
  description: string;
  certificateUrl?: string;
}

export interface AcademicCardProps extends AcademicRecord {}
