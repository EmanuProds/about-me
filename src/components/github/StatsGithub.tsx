import React from "react";
import { useTranslations } from "@/hooks/useTranslations";

/**
 * Props para o componente GithubStats.
 */
interface GithubStatsProps {
  /** Nome de usuário do GitHub */
  username: string;
}

/**
 * Componente que exibe estatísticas do GitHub usando GitHub Readme Stats.
 * Mostra estatísticas como imagens SVG dinâmicas do serviço github-readme-stats.
 */
const GithubStats: React.FC<GithubStatsProps> = ({ username }) => {
  const { t } = useTranslations();

  // URLs para as imagens SVG do GitHub Readme Stats
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&include_all_commits=true&count_private=true`;
  const languagesUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=transparent&hide_border=true&layout=compact`;

  return (
    <div className="flex flex-col items-center space-y-6 mt-4">
      {/* Estatísticas principais */}
      <div className="flex justify-center">
        <img
          src={statsUrl}
          alt={`Estatísticas do GitHub de ${username}`}
          className="max-w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* Linguagens mais usadas */}
      <div className="flex justify-center">
        <img
          src={languagesUrl}
          alt={`Linguagens mais usadas por ${username}`}
          className="max-w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default GithubStats;
