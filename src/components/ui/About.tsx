"use client";

import { GITHUB_USERNAME } from "@/lib/constants";
import { useTranslations } from "@/hooks/useTranslations";
import GithubStats from "@/components/github/StatsGithub";

/**
 * "About" section component.
 * Displays personal information and GitHub statistics.
 */
const About = () => {
  const { t } = useTranslations();

  return (
    <section
      id="sobre"
      className="w-full max-w-4xl mx-auto px-4 py-16 scroll-mt-16"
    >
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-linear-to-r bg-slate-600 dark:bg-slate-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {t.about.description.split("\n\n").map((paragraph, index) => {
            const isTitle = !paragraph.startsWith("•") && index > 0; // Only style titles after the first paragraph

            if (isTitle) {
              return (
                <h3
                  key={index}
                  className="text-xl font-semibold text-center text-slate-600 dark:text-slate-400"
                >
                  {paragraph}
                </h3>
              );
            }

            return (
              <p
                key={index}
                className="text-lg leading-relaxed text-gray-900 dark:text-gray-100 text-justify"
              >
                {paragraph}
              </p>
            );
          })}
        </div>

        <div className="pt-6">
          <GithubStats username={GITHUB_USERNAME} />
        </div>
      </div>
    </section>
  );
};

export default About;
