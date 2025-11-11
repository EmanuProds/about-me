"use client";

import React, { useState, useEffect } from "react";
import { TechIcon, ScrollContainerProps } from "@/types/tech";
import { langProgramming, toolsTech, systemOperation } from "@/lib/data";

// Constants for common Tailwind classes
const TECH_CARD_CLASSES =
  "group flex flex-col items-center justify-center p-4 md:p-6 m-1 min-w-[100px] md:min-w-[120px] rounded-2xl bg-gray-300/40 dark:bg-black/30 backdrop-blur-sm border border-gray-400/20 dark:border-gray-200/20 hover:bg-slate-400/40 dark:hover:bg-slate-600/40 active:bg-slate-400/40 dark:active:bg-slate-600/40 hover:scale-105 active:scale-105 transition-all duration-300 ease-out cursor-pointer";
const TECH_ICON_CLASSES =
  "h-8 w-8 md:h-10 md:w-10 mb-2 md:mb-3 group-hover:scale-110 group-active:scale-110 transition-transform duration-300";
const TECH_TEXT_CLASSES =
  "text-xs md:text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-200 group-active:text-gray-700 dark:group-active:text-gray-200 transition-colors duration-300 select-none";

/**
 * Component to display a technology card with loading state.
 * @param tech - Object containing technology icon and name
 * @param loading - Indicates if the card is in loading state
 */
const TechCard = ({
  tech,
  loading = false,
}: {
  tech: TechIcon;
  loading?: boolean;
}) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-4 md:p-6 m-1 min-w-[100px] md:min-w-[120px] rounded-2xl bg-gray-300/40 dark:bg-black/30 backdrop-blur-sm border border-gray-400/20 dark:border-gray-200/20 animate-pulse">
        <div className="h-8 w-8 md:h-10 md:w-10 bg-gray-400/30 rounded mb-2 md:mb-3" />
        <div className="h-3 md:h-4 bg-gray-400/30 rounded w-12 md:w-16" />
      </div>
    );
  }

  return (
    <div className={TECH_CARD_CLASSES}>
      <tech.Icon className={`${TECH_ICON_CLASSES} ${tech.color}`} />
      <span className={TECH_TEXT_CLASSES}>{tech.name}</span>
    </div>
  );
};

const TechRow = ({
  stack,
  direction,
  loading = false,
}: {
  stack: TechIcon[];
  direction: "left" | "right";
  loading?: boolean;
}) => {
  const duplicatedStack = [...stack, ...stack, ...stack, ...stack, ...stack];
  const animationClass =
    direction === "left"
      ? "animate-[scroll_18s_linear_infinite] md:animate-[scroll_25s_linear_infinite]"
      : "animate-[scroll_18s_linear_infinite_reverse] md:animate-[scroll_25s_linear_infinite_reverse]";

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-linear-to-r from-background via-background/80 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-linear-to-l from-background via-background/80 to-transparent z-10" />

      <div
        className={`flex gap-4 md:gap-6 ${animationClass} hover:[animation-play-state:paused] active:[animation-play-state:paused]`}
      >
        {duplicatedStack.map((tech, index) => (
          <TechCard
            key={`${tech.name}-${index}-${direction}`}
            tech={tech}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
};

const TechScroll = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulates a small loading delay to show the skeleton
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-2">
      <div className="space-y-4 md:space-y-8">
        <div className="text-center mb-4 md:mb-8">
          <TechRow stack={langProgramming} direction="left" loading={loading} />
        </div>

        <div className="text-center mb-4 md:mb-8">
          <TechRow stack={toolsTech} direction="right" loading={loading} />
        </div>

        <div className="text-center">
          <TechRow stack={systemOperation} direction="left" loading={loading} />
        </div>
      </div>
    </section>
  );
};

export default TechScroll;
