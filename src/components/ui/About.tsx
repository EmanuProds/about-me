"use client";

import { GITHUB_CONFIG } from "@/lib/constants";
import { useTranslations } from "@/hooks/useTranslations";
import GithubStats from "@/components/github/StatsGithub";
import Card from "@/components/layout/Card";

const AboutContent = ({ loading }: { loading: boolean }) => {
  const { t } = useTranslations();

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto space-y-4 animate-pulse">
        <div className="h-4 bg-gray-400/30 rounded" />
        <div className="h-4 bg-gray-400/30 rounded w-5/6" />
        <div className="h-4 bg-gray-400/30 rounded w-4/6" />
        <div className="h-4 bg-gray-400/30 rounded w-3/4" />
      </div>
    );
  }

  return (
    <>
      <div className="max-w-3xl mx-auto space-y-4">
        {t.about.description.split("\n\n").map((paragraph, index) => {
          const isTitle = !paragraph.startsWith("•") && index > 0;

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
        <GithubStats username={GITHUB_CONFIG.USERNAME} />
      </div>
    </>
  );
};

const About = () => {
  const { t } = useTranslations();

  return (
    <Card id="sobre" title={t.about.title} titleClass="mt-29" scrollMargin="28">
      {(loading) => <AboutContent loading={loading} />}
    </Card>
  );
};

export default About;
