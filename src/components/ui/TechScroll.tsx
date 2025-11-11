"use client";

import { TechIcon, ScrollContainerProps } from "@/types/tech";
import { langProgramming, toolsTech, systemOperation } from "@/lib/data";

// Constantes para classes Tailwind comuns
const TECH_CARD_CLASSES = "group flex flex-col items-center justify-center p-6 m-2 min-w-[120px] rounded-2xl bg-gray-300/40 dark:bg-black/30 backdrop-blur-sm border border-gray-400/20 dark:border-gray-200/20 hover:bg-slate-400/40 dark:hover:bg-slate-600/40 hover:scale-105 transition-all duration-300 ease-out";
const TECH_ICON_CLASSES = "h-10 w-10 mb-3 group-hover:scale-110 transition-transform duration-300";
const TECH_TEXT_CLASSES = "text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300";

/**
 * Componente para exibir um cartão de tecnologia.
 * @param tech - Objeto contendo ícone e nome da tecnologia
 */
const TechCard = ({ tech }: { tech: TechIcon }) => (
  <div className={TECH_CARD_CLASSES}>
    <tech.Icon className={`${TECH_ICON_CLASSES} ${tech.color}`} />
    <span className={TECH_TEXT_CLASSES}>
      {tech.name}
    </span>
  </div>
);

const TechRow = ({ stack, direction }: { stack: TechIcon[]; direction: "left" | "right" }) => {
  const duplicatedStack = [...stack, ...stack, ...stack];
  const animationClass = direction === "left"
    ? "animate-[scroll_40s_linear_infinite]"
    : "animate-[scroll_40s_linear_infinite_reverse]";

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background via-background/80 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background via-background/80 to-transparent z-10" />

      <div className={`flex gap-6 ${animationClass} hover:[animation-play-state:paused]`}>
        {duplicatedStack.map((tech, index) => (
          <TechCard key={`${tech.name}-${index}-${direction}`} tech={tech} />
        ))}
      </div>
    </div>
  );
};

const TechScroll = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-2">
      <div className="space-y-8">
        <div className="text-center mb-8">
          <TechRow stack={langProgramming} direction="left" />
        </div>

        <div className="text-center mb-8">
          <TechRow stack={toolsTech} direction="right" />
        </div>

        <div className="text-center">
          <TechRow stack={systemOperation} direction="left" />
        </div>
      </div>
    </section>
  );
};

export default TechScroll;
