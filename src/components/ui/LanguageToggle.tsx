"use client";

import React from "react";
import { useLanguageToggle } from "@/hooks/useLanguageToggle";

const LanguageToggle: React.FC = () => {
  const { toggleLanguage, flag, title } = useLanguageToggle();

  return (
    <button
      onClick={toggleLanguage}
      className="p-1 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-all duration-200 cursor-pointer"
      title={title}
      aria-label={title}
    >
      <span className="text-2xl" role="img" aria-hidden="true">
        {flag}
      </span>
    </button>
  );
};

export default LanguageToggle;
