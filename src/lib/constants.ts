import { SocialLink } from "@/types";

/**
 * Social media links configuration for contact and footer components
 */
export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/emanuprods",
    icon: "FaLinkedin",
    ariaLabel: "Visite meu perfil no LinkedIn",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+5522996127465",
    icon: "FaWhatsapp",
    ariaLabel: "Entre em contato via WhatsApp",
  },
  {
    name: "GitHub",
    url: "https://github.com/EmanuProds",
    icon: "FaGithub",
    ariaLabel: "Veja meus projetos no GitHub",
  },
];

/**
 * GitHub API configuration constants
 */
export const GITHUB_CONFIG = {
  /** GitHub username for API requests */
  USERNAME: "EmanuProds",
  /** Base URL for GitHub API */
  API_BASE: "https://api.github.com",
} as const;
