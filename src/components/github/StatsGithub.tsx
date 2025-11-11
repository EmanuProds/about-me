"use client";

import React from "react";
import { useGithubStats } from "@/hooks/useGithubStats";
import { useTranslations } from "@/hooks/useTranslations";
import { STAT_CARD_CLASSES } from "@/components/layout/Card";

const StatCard = ({
  value,
  label,
  className = "",
}: {
  value: string | number;
  label: string;
  className?: string;
}) => (
  <div className={`${STAT_CARD_CLASSES} ${className}`}>
    <div className="text-3xl md:text-4xl font-bold text-slate-600 dark:text-slate-400 mb-2 select-none">
      {value}
    </div>
    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 select-none">
      {label}
    </div>
  </div>
);

const LoadingSkeleton = () => (
  <div className={`${STAT_CARD_CLASSES} animate-pulse`}>
    <div className="h-8 bg-gray-400/30 rounded w-16 mx-auto mb-2" />
    <div className="h-4 bg-gray-400/30 rounded w-20 mx-auto" />
  </div>
);

const GithubStats = ({ username }: { username: string }) => {
  const { t } = useTranslations();
  const { stats, loading } = useGithubStats(username);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {Array.from({ length: 3 }, () => (
          <LoadingSkeleton key={Math.random()} />
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
