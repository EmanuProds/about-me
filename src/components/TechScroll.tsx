import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGit,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiExpo,
  SiVite,
  SiSqlite,
} from "react-icons/si";

interface TechIcon {
  Icon: React.ElementType;
  name: string;
  color: string;
}

const langProgramming: TechIcon[] = [
  { Icon: FaHtml5, name: "HTML", color: "text-orange-500" },
  { Icon: FaCss3, name: "CSS", color: "text-blue-500" },
  { Icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
  { Icon: SiTypescript, name: "TypeScript", color: "text-blue-700" },
  { Icon: FaPython, name: "Python", color: "text-blue-500" },
];

const toolsTech: TechIcon[] = [
  { Icon: FaReact, name: "React", color: "text-cyan-600" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-500" },
  { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { Icon: SiExpress, name: "Express.js", color: "text-gray-400" },
  { Icon: SiNextdotjs, name: "Next.js", color: "text-white" },
  { Icon: SiVite, name: "Vite", color: "text-purple-500" },
  { Icon: SiExpo, name: "Expo", color: "text-slate-400" },
];

const systemOperation: TechIcon[] = [
  { Icon: FaDocker, name: "Docker", color: "text-blue-400" },
  { Icon: SiSqlite, name: "SQLite", color: "text-blue-600" },
  { Icon: FaGit, name: "Git", color: "text-red-600" },
  { Icon: FaLinux, name: "Linux", color: "text-gray-200" },
];

const IconItem: React.FC<{ tech: TechIcon }> = ({ tech }) => (
  <div className="flex flex-col items-center justify-center p-4 m-2 min-w-[100px] sm:min-w-[120px] bg-gray-900/10 dark:bg-white/5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <tech.Icon className={`h-8 w-8 sm:h-10 sm:w-10 ${tech.color}`} />
    <span className="text-xs sm:text-sm font-semibold mt-2 text-foreground/80 whitespace-nowrap">
      {tech.name}
    </span>
  </div>
);

interface ScrollContainerProps {
  stack: TechIcon[];
  direction: "left" | "right";
  className?: string;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({
  stack,
  direction,
  className = "",
}) => {
  const duplicatedStack = [...stack, ...stack, ...stack, ...stack];
  const animationClass =
    direction === "left"
      ? "animate-scroll-infinite"
      : "animate-scroll-infinite-right";

  return (
    <div className={`overflow-hidden py-4 w-full ${className}`}>
      <div className={`flex flex-row ${animationClass}`}>
        {duplicatedStack.map((tech, index) => (
          <IconItem key={`${tech.name}-${index}-${direction}`} tech={tech} />
        ))}
      </div>
    </div>
  );
};

const TechScroll: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto">
      <div className="relative">
        <div
          className="absolute inset-0 z-10 pointer-events-none
          bg-[linear-gradient(to_right,var(--background)_0%,transparent_15%,transparent_85%,var(--background)_100%)]"
        ></div>
        <ScrollContainer
          stack={langProgramming}
          direction="left"
          className="border-t border-b border-gray-700/20 dark:border-white/20"
        />
      </div>

      <div className="relative">
        <div
          className="absolute inset-0 z-10 pointer-events-none
          bg-[linear-gradient(to_left,var(--background)_0%,transparent_15%,transparent_85%,var(--background)_100%)]"
        ></div>
        <ScrollContainer
          stack={toolsTech}
          direction="right"
          className="border-t border-b border-gray-700/20 dark:border-white/20"
        />
      </div>

      <div className="relative">
        <div
          className="absolute inset-0 z-10 pointer-events-none
          bg-[linear-gradient(to_right,var(--background)_0%,transparent_15%,transparent_85%,var(--background)_100%)]"
        ></div>
        <ScrollContainer
          stack={systemOperation}
          direction="left"
          className="border-t border-b border-gray-700/20 dark:border-white/20"
        />
      </div>
    </div>
  );
};

export default TechScroll;
