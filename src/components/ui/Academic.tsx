"use client";

import React from "react";
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
import Card, {
  CARD_BASE_CLASSES,
  BUTTON_BASE_CLASSES,
} from "@/components/layout/Card";

/**
 * Icon mapping for academic records
 */
const ACADEMIC_ICONS = {
  Clock: FaClock,
  IoChatbubble: IoChatbubble,
  FaShieldAlt: FaShieldAlt,
  FaRocket: FaRocket,
  GiNinjaMask: GiNinjaMask,
} as const;

/**
 * Component to render academic record icons dynamically
 */
const AcademicIcon = ({ iconName }: { iconName: string }) => {
  const Icon =
    ACADEMIC_ICONS[iconName as keyof typeof ACADEMIC_ICONS] || FaGraduationCap;
  return <Icon className="w-6 h-6" />;
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

  const getTranslatedType = (type: string) => {
    if (type === "specializationCourse") {
      return locale === "en"
        ? "Specialization Course"
        : "Curso de Especialização";
    }
    return type;
  };

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
          <AcademicIcon iconName={record.icon || "default"} />
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

const AcademicContent = ({ loading }: { loading: boolean }) => {
  const { locale } = useTranslations();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {academicRecords.map((record) => (
        <AcademicCard
          key={`${record.id}-${locale}`}
          record={record}
          loading={loading}
        />
      ))}
    </div>
  );
};

const Academic = () => {
  const { t } = useTranslations();

  return (
    <Card
      id="formacao"
      title={t.academic.title}
      titleClass="mt-28"
      maxWidth="6xl"
      scrollMargin="28"
      loadingDelay={1000}
    >
      {(loading) => <AcademicContent loading={loading} />}
    </Card>
  );
};

export default Academic;
