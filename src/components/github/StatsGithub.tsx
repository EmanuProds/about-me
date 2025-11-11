"use client";

import React from "react";
import { useGithubStats } from "@/hooks/useGithubStats";
import { useTranslations } from "@/hooks/useTranslations";

/**
 * Individual card for GitHub statistic.
 */
const StatCard = ({
  value,
  label,
  className = "",
}: {
  value: string | number;
  label: string;
  className?: string;
}) => (
  <div
    className={`bg-gray-300/40 dark:bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-400/20 dark:border-gray-200/20 px-12 py-6 md:px-6 max-w-sm md:max-w-none mx-auto md:mx-0 text-center hover:bg-slate-400/40 dark:hover:bg-slate-600/40 active:bg-slate-400/40 dark:active:bg-slate-600/40 transition-all duration-300 cursor-pointer ${className}`}
  >
    <div className="text-3xl md:text-4xl font-bold text-slate-600 dark:text-slate-400 mb-2 select-none">
      {value}
    </div>
    <div className="text-2sm font-medium text-gray-700 dark:text-gray-300 select-none">
      {label}
    </div>
  </div>
);

/**
 * Component that displays GitHub statistics in custom cards.
 * Shows 3 main statistics: repositories, contributions and experience.
 */
const GithubStats = ({ username }: { username: string }) => {
  const { t } = useTranslations();
  const { stats, loading } = useGithubStats(username);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={i}
            className="bg-gray-300/40 dark:bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-400/20 dark:border-gray-200/20 px-4 py-6 md:px-6 max-w-sm md:max-w-none mx-auto md:mx-0 text-center animate-pulse"
          >
            <div className="h-8 bg-gray-400/30 rounded w-16 mx-auto mb-2" />
            <div className="h-4 bg-gray-400/30 rounded w-20 mx-auto" />
          </div>
        ))}
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <StatCard value={stats.publicRepos} label={t.github.publicRepos} />
      <StatCard
        value={`${stats.totalContributions}+`}
        label={t.github.contributions(stats.contributionsYear)}
      />
      <StatCard
        value={`${stats.yearsOfExperience}+`}
        label={t.github.yearsExperience}
      />
    </div>
  );
};

export default GithubStats;
