// Re-export of all project types to facilitate imports
export * from "./tech";
export * from "./github";
export * from "./projects";
export * from "./academic";

// Types for theme options (light, dark, system)
export interface ThemeOption {
  value: "light" | "dark" | "system";
  label: string;
  icon: React.ElementType;
}

// Types for navigation items in header/menu
export interface NavigationItem {
  label: string;
  href: string;
}

// Types for social links used in contact and footer components
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}
