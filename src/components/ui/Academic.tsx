"use client";

import React, { useState, useEffect } from "react";
import {
  FaGraduationCap,
  FaCertificate,
  FaCalendarAlt,
  FaBuilding,
  FaShieldAlt,
  FaRocket,
  FaClock,
} from "react-icons/fa";
import { IoChatbubble } from "react-icons/io5";
import { GiNinjaMask } from "react-icons/gi";
import { ImBlocked } from "react-icons/im";
import { useTranslations } from "@/hooks/useTranslations";
import { useCertificateModal } from "@/hooks/useCertificateModal";
import { academicRecords } from "@/lib/data";

// Constants for common Tailwind classes to maintain consistency
const CARD_BASE_CLASSES =
  "relative bg-gray-300/40 dark:bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-400/20 dark:border-gray-200/20 p-8 hover:bg-slate-400/40 dark:hover:bg-slate-600/40 active:bg-slate-400/40 dark:active:bg-slate-600/40 transition-all duration-300 hover:scale-[1.02] active:scale-[1.02] hover:shadow-lg active:shadow-lg flex flex-col h-full cursor-pointer";
const BUTTON_BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 rounded-lg px-4 py-2 shadow-md hover:shadow-lg active:shadow-lg mt-auto w-full";

/**
 * Component to render icons dynamically based on name.
 * @param iconName - Name of the icon to be rendered
 */
const IconComponent = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case "Clock":
      return <FaClock className="w-6 h-6" />;
    case "IoChatbubble":
      return <IoChatbubble className="w-6 h-6" />;
    case "FaShieldAlt":
      return <FaShieldAlt className="w-6 h-6" />;
    case "FaRocket":
      return <FaRocket className="w-6 h-6" />;
    case "GiNinjaMask":
      return <GiNinjaMask className="w-6 h-6" />;
    default:
      return <FaGraduationCap className="w-6 h-6" />;
  }
};

const AcademicCard = ({
  record,
  loading = false,
}: {
  record: (typeof academicRecords)[0];
  loading?: boolean;
}) => {
  const { t, locale } = useTranslations();
  const { handleCertificateClick } = useCertificateModal();

  /**
   * Returns the translated academic record type based on type.
   * Uses specific translations for known types or the default type.
   * @param type - Academic record type key
   * @returns Translated type or default
   */
  const getTranslatedType = (type: string) => {
    if (type === "specializationCourse") {
      return locale === "en" ? "Specialization Course" : "Curso de Especialização";
    }
    return type;
  };

  /**
   * Returns the translated academic record title based on ID.
   * Uses specific translations for known records or the default title.
   * @param recordId - Unique academic record ID
   * @returns Translated title or default
   */
  const getTranslatedTitle = (recordId: number) => {
    switch (recordId) {
      case 1:
        return t.academic.titles.reactNativeExpo;
      case 2:
        return t.academic.titles.bootcampReactCSharp;
      case 3:
        return t.academic.titles.lgpdEnnor;
      case 4:
        return t.academic.titles.devlinks;
      case 5:
        return t.academic.titles.logicaProgramacao;
      default:
        return record.course;
    }
  };

  /**
   * Returns the translated academic record description based on ID.
   * Uses specific descriptions for known records or the default description.
   * @param recordId - Unique academic record ID
   * @returns Translated description or default
   */
  const getTranslatedDescription = (recordId: number) => {
    switch (recordId) {
      case 1:
        return t.academic.descriptions.reactNativeExpo;
      case 2:
        return t.academic.descriptions.bootcampReactCSharp;
      case 3:
        return t.academic.descriptions.lgpdEnnor;
      case 4:
        return t.academic.descriptions.devlinks;
      case 5:
        return t.academic.descriptions.logicaProgramacao;
      default:
        return record.description;
    }
  };

  /**
   * Returns the gradient color based on institution.
   * @param institution - Institution name
   * @returns Tailwind gradient class
   */
  const getInstitutionColor = (institution: string) => {
    switch (institution.toLowerCase()) {
      case "rocketseat":
        return "from-purple-500 to-purple-600";
      case "dio.io":
        return "from-blue-400 to-blue-500";
      case "dev samurai":
        return "from-gray-500 to-gray-600";
      case "ennor":
        return "from-green-500 to-teal-600";
      default:
        return "from-gray-500 to-slate-600";
    }
  };

  const gradientColor = getInstitutionColor(record.institution);

  if (loading) {
    return (
      <div className="bg-gray-300/40 dark:bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-400/20 dark:border-gray-200/20 p-8 animate-pulse">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-gray-400/30 w-12 h-12" />
          <div className="h-6 bg-gray-400/30 rounded w-20" />
        </div>
        <div className="h-6 bg-gray-400/30 rounded w-3/4 mb-4" />
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 bg-gray-400/30 rounded w-24" />
          <div className="h-4 bg-gray-400/30 rounded w-16" />
        </div>
        <div className="space-y-2 mb-4 grow">
          <div className="h-4 bg-gray-400/30 rounded" />
          <div className="h-4 bg-gray-400/30 rounded w-5/6" />
          <div className="h-4 bg-gray-400/30 rounded w-4/6" />
        </div>
        <div className="h-10 bg-gray-400/30 rounded w-full mt-auto" />
      </div>
    );
  }

  return (
    <div className={`group ${CARD_BASE_CLASSES}`}>
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`p-3 rounded-xl bg-linear-to-br ${gradientColor} text-gray-100 shadow-lg`}
        >
          <IconComponent iconName={record.icon || "default"} />
        </div>
        <div>
          <span
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-linear-to-r ${gradientColor} text-gray-100 shadow-sm select-none`}
          >
            {getTranslatedType(record.type)}
          </span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors mb-4 line-clamp-2 select-none">
        {getTranslatedTitle(record.id)}
      </h3>

      <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
        <div className="flex items-center mb-4 gap-2">
          <FaBuilding className="w-4 h-4 select-none" />
          <span className="text-sm font-medium select-none">
            {record.institution}
          </span>
        </div>
        <div className="flex items-center mb-4 gap-2 text-gray-500 dark:text-gray-500">
          <FaCalendarAlt className="w-4 h-4 select-none" />
          <span className="text-sm select-none">{record.duration}</span>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-sm text-justify leading-relaxed mb-4 grow select-none">
        {getTranslatedDescription(record.id)}
      </p>

      <button
        onClick={() => {
          if (record.certificateUrl && (record.id === 3 || record.id === 4)) {
            handleCertificateClick(record.certificateUrl, locale);
          }
        }}
        disabled={!(record.id === 3 || record.id === 4)}
        className={`${BUTTON_BASE_CLASSES} ${
          record.id === 3 || record.id === 4
            ? "text-white dark:text-gray-100 bg-slate-500 dark:bg-gray-600 hover:bg-slate-700 hover:shadow-lg cursor-pointer select-none"
            : "text-slate-500 dark:text-gray-100 bg-gray-300 dark:bg-gray-700 cursor-not-allowed opacity-60 select-none"
        }`}
      >
        {record.id === 3 || record.id === 4 ? (
          <>
            <FaCertificate className="w-4 h-4 select-none" />
            {t.academic.viewCertificate}
          </>
        ) : (
          <>
            <ImBlocked className="w-4 h-4 select-none" />
            {t.academic.certificateNotIssued}
          </>
        )}
      </button>
    </div>
  );
};

const Academic = () => {
  const { t, locale } = useTranslations();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulates a small loading delay to show the skeleton
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="formacao"
      className="w-full max-w-6xl mx-auto px-4 py-16 scroll-mt-12"
    >
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            {t.academic.title}
          </h2>
          <div className="w-24 h-1 bg-linear-to-r bg-slate-600 dark:bg-slate-400 mx-auto rounded-full" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {academicRecords.map((record) => (
            <AcademicCard
              key={`${record.id}-${locale}`}
              record={record}
              loading={loading}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academic;
