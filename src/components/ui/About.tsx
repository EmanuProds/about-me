"use client";

import { GITHUB_USERNAME } from "@/lib/constants";
import { useTranslations } from "@/hooks/useTranslations";
import GithubStats from "@/components/github/StatsGithub";

const About = () => {
  const { t } = useTranslations();

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-linear-to-r bg-slate-600 dark:bg-slate-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-100 text-justify">
            {t.about.description}
          </p>
        </div>

        <div className="pt-6">
          <GithubStats username={GITHUB_USERNAME} />
        </div>
      </div>
    </section>
  );
};

export default About;
