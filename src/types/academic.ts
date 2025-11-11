export interface AcademicRecord {
  id: number;
  course: string;
  institution: string;
  type: string;
  duration: string;
  description: string;
  icon: string;
  certificateUrl?: string;
  isClickable?: boolean;
}

export interface AcademicCardProps extends AcademicRecord {}
