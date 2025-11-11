// Re-export of all project types to facilitate imports
export * from "./tech";
export * from "./github";
export * from "./projects";
export * from "./academic";
export * from "./translations";

/**
 * Theme options available in the application
 */
export interface ThemeOption {
  /** Theme value identifier */
  value: "light" | "dark" | "system";
  /** Display label for the theme */
  label: string;
  /** React component for the theme icon */
  icon: React.ElementType;
}

/**
 * Navigation item for header/menu components
 */
export interface NavigationItem {
  /** Display label for the navigation item */
  label: string;
  /** URL or anchor link */
  href: string;
}

/**
 * Social media link for contact and footer components
 */
export interface SocialLink {
  /** Name of the social platform */
  name: string;
  /** URL to the social profile */
  url: string;
  /** Icon identifier or path */
  icon: string;
  /** Accessibility label for screen readers */
  ariaLabel: string;
}
