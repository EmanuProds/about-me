"use client";

import {
  FaGraduationCap,
  FaCertificate,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";
import { useTranslations } from "@/hooks/useTranslations";
import { academicRecords } from "@/lib/data";

const AcademicCard = ({ record }: { record: (typeof academicRecords)[0] }) => {
  const { t } = useTranslations();

  const getTranslatedDescription = (recordId: number) => {
    switch (recordId) {
      case 1:
        return t.academic.descriptions.ads;
      case 2:
        return t.academic.descriptions.bootcampReact;
      case 3:
        return t.academic.descriptions.awsPractitioner;
      default:
        return record.description;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "graduação tecnológica":
      case "graduação":
        return FaGraduationCap;
      case "curso de especialização":
      case "certificação profissional":
        return FaCertificate;
      default:
        return FaGraduationCap;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "graduação tecnológica":
        return "from-blue-500 to-purple-600";
      case "curso de especialização":
        return "from-green-500 to-teal-600";
      case "certificação profissional":
        return "from-orange-500 to-red-600";
      default:
        return "from-gray-500 to-slate-600";
    }
  };

  const Icon = getTypeIcon(record.type);
  const gradientColor = getTypeColor(record.type);

  return (
    <div className="group relative bg-gray-300/40 dark:bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-400/20 dark:border-gray-200/20 p-6 hover:bg-slate-400/40 dark:hover:bg-slate-600/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`p-3 rounded-xl bg-linear-to-br ${gradientColor} text-gray-100 shadow-lg`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-linear-to-r ${gradientColor} text-gray-100 shadow-sm`}
          >
            {record.type}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors min-h-14 line-clamp-2 mb-3">
        {record.course}
      </h3>

      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
        <FaBuilding className="w-4 h-4" />
        <span className="text-sm font-medium">{record.institution}</span>
      </div>

      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 mb-4">
        <FaCalendarAlt className="w-4 h-4" />
        <span className="text-sm">{record.duration}</span>
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 grow">
        {getTranslatedDescription(record.id)}
      </p>

      {record.certificateUrl && (
        <a
          href={record.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-100 bg-linear-to-r bg-slate-400 dark:bg-slate-600 hover:dark:bg-slate-700 transition-all duration-300 rounded-lg px-4 py-2 shadow-md hover:shadow-lg mt-auto w-full"
        >
          <FaCertificate className="w-4 h-4" />
          {t.academic.viewCertificate}
        </a>
      )}
    </div>
  );
};

const Academic = () => {
  const { t } = useTranslations();

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            {t.academic.title}
          </h2>
          <div className="w-24 h-1 bg-linear-to-r bg-slate-600 dark:bg-slate-400 mx-auto rounded-full" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {academicRecords.map((record) => (
            <AcademicCard key={record.id} record={record} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academic;
