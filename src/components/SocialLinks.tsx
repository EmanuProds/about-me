// src/components/SocialLinks.tsx
import Link from "next/link";
import { SocialLink } from "@/types";
import { IconType } from "react-icons";
import * as FaIcons from "react-icons/fa"; // Importa todos os ícones Fa
import * as SiIcons from "react-icons/si"; // Importa ícones Si (Simple Icons)

// Mapeia strings para componentes de ícones
const getIcon = (iconName: string): IconType | null => {
  const FaIcon = (FaIcons as any)[iconName];
  if (FaIcon) return FaIcon;
  const SiIcon = (SiIcons as any)[iconName];
  if (SiIcon) return SiIcon;
  return null;
};

interface SocialLinksProps {
  links: SocialLink[];
  iconSize?: number;
  className?: string;
}

export default function SocialLinks({
  links,
  iconSize = 24,
  className = "",
}: SocialLinksProps) {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {links.map((link) => {
        const IconComponent = getIcon(link.icon);
        return IconComponent ? (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-110"
          >
            <IconComponent size={iconSize} />
          </Link>
        ) : null;
      })}
    </div>
  );
}
