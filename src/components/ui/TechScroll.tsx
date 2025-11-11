"use client";

import React, { useState, useEffect } from "react";
import { TECH_STACKS } from "@/lib/data";
import { TechIcon } from "@/types/tech";
import Card, {
  TECH_CARD_CLASSES,
  TECH_ICON_CLASSES,
  TECH_TEXT_CLASSES,
} from "@/components/layout/Card";



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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card py="2">
      {(loadingState) => (
        <div className="space-y-4 md:space-y-8">
          <div className="text-center mb-4 md:mb-8">
            <TechRow
              stack={TECH_STACKS.languages}
              direction="left"
              loading={loadingState}
            />
          </div>

          <div className="text-center mb-4 md:mb-8">
            <TechRow
              stack={TECH_STACKS.frameworks}
              direction="right"
              loading={loadingState}
            />
          </div>

          <div className="text-center">
            <TechRow
              stack={TECH_STACKS.tools}
              direction="left"
              loading={loadingState}
            />
          </div>
        </div>
      )}
    </Card>
  );
};

export default TechScroll;
