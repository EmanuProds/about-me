"use client";

import React from "react";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";
import { useTranslations } from "@/hooks/useTranslations";
import { experienceEntries, technologies } from "@/lib/data";
import Card from "@/components/layout/Card";

/**
 * Maps experience entry ids to their translation keys
 */
const ENTRY_TEXT_KEYS = {
  1: "perains",
  2: "campos",
} as const;

/**
 * Compact professional experience timeline.
 * Most recent roles first; translations supply role, period and summary.
 */
const Experience = () => {
  const { t } = useTranslations();

  return (
    <Card
      id="experiencia"
      title={t.experience.title}
      titleClass="mt-28"
      maxWidth="4xl"
      scrollMargin="28"
      loadingDelay={600}
    >
      {() => (
        <ol className="relative border-l-2 border-slate-300 dark:border-slate-700 max-w-3xl mx-auto text-left space-y-10 pl-6 md:pl-8">
          {experienceEntries.map((entry) => {
            const key =
              ENTRY_TEXT_KEYS[entry.id as keyof typeof ENTRY_TEXT_KEYS];
            const text = key ? t.experience.entries[key] : undefined;
            const techs = entry.technologies
              .map((techKey) => technologies[techKey])
              .filter(Boolean);

            return (
              <li key={entry.id} className="relative">
                <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-500 dark:bg-slate-400 border-2 border-gray-200 dark:border-black" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 mb-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 select-none">
                    {text?.role ?? entry.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 shrink-0 select-none">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>{text?.period ?? entry.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 mb-3 select-none">
                  <FaBuilding className="w-4 h-4" />
                  <span>{entry.company}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-justify mb-3 select-none">
                  {text?.summary ?? entry.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => {
                    const Icon = tech.Icon;
                    return (
                      <span
                        key={tech.name}
                        title={tech.name}
                        className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${tech.color} bg-gray-100 dark:bg-gray-700/50 select-none`}
                      >
                        <Icon className="w-4 h-4 mr-1 select-none" />
                        {tech.name}
                      </span>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </Card>
  );
};

export default Experience;
