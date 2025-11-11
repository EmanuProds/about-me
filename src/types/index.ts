// Re-export de todos os tipos do projeto para facilitar importações
export * from "./github";
export * from "./academic";
export * from "./projects";
export * from "./tech";

// Tipos para links sociais utilizados em componentes de contato e footer
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

// Tipos para itens de navegação no header/menu
export interface NavigationItem {
  label: string;
  href: string;
}

// Tipos para opções de tema (claro, escuro, sistema)
export interface ThemeOption {
  value: "light" | "dark" | "system";
  label: string;
  icon: React.ElementType;
}
