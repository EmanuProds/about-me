export * from "./github";
export * from "./academic";
export * from "./projects";
export * from "./tech";

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ThemeOption {
  value: "light" | "dark" | "system";
  label: string;
  icon: React.ElementType;
}
