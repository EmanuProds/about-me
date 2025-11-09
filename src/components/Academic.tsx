"use client";

import React from "react";
import { LuBookOpen, LuGraduationCap, LuCalendar, LuAward, LuLink } from "react-icons/lu";

interface AcademicCardProps {
  id: number;
  course: string;
  institution: string;
  type: string;
  duration: string;
  description: string;
  certificateUrl?: string;
}

const academicRecords: AcademicCardProps[] = [
  {
    id: 1,
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "Faculdade Tech",
    type: "Graduação Tecnológica",
    duration: "2022 - 2025",
    description:
      "Focado no desenvolvimento de software, banco de dados e gestão de projetos. Ênfase em arquitetura de microsserviços e desenvolvimento Full-stack.",
    certificateUrl: "https://minhafaculdade.com/certificado/ads",
  },
  {
    id: 2,
    course: "Bootcamp React & Next.js",
    institution: "Rocketseat",
    type: "Curso de Especialização",
    duration: "6 meses (400h)",
    description:
      "Imersão intensiva no ecossistema React, incluindo Redux, Testes Unitários e Integração, Performance Web e o framework Next.js.",
    certificateUrl: "https://rocketseat.com/certificado/bootcamp-rn",
  },
  {
    id: 3,
    course: "Certificação AWS Cloud Practitioner",
    institution: "Amazon Web Services (AWS)",
    type: "Certificação Profissional",
    duration: "2024",
    description:
      "Certificação que valida o conhecimento fundamental sobre a Nuvem AWS, seus serviços principais, segurança, arquitetura e modelo de faturamento.",
    certificateUrl: undefined,
  },
];

const AcademicCard: React.FC<AcademicCardProps> = ({
  course,
  institution,
  type,
  duration,
  description,
  certificateUrl,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden p-6 border border-gray-200 dark:border-gray-700 w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-sky-900/50">
      <div className="flex items-center mb-4">
        <LuGraduationCap className="w-8 h-8 text-sky-400 mr-3" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{course}</h3>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center">
        <LuBookOpen className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
        {institution}
      </p>

      <div className="flex flex-wrap gap-4 mb-4 text-sm">
        <span className="flex items-center text-sky-600 dark:text-sky-300 bg-sky-100 dark:bg-sky-900/30 px-3 py-1 rounded-full font-medium">
          <LuAward className="w-4 h-4 mr-1.5" />
          {type}
        </span>
        <span className="flex items-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 px-3 py-1 rounded-full font-medium">
          <LuCalendar className="w-4 h-4 mr-1.5" />
          {duration}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-6 border-t border-gray-200 dark:border-gray-700 pt-4">
        {description}
      </p>

      {certificateUrl && (
        <a
          href={certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-colors duration-200 text-sm font-semibold shadow-md"
          aria-label={`Ver certificado de ${course}`}
        >
          <LuLink className="w-4 h-4 mr-2" />
          Ver Certificado
        </a>
      )}
      {!certificateUrl && (
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm italic pt-2">
          Certificado indisponível publicamente.
        </p>
      )}
    </div>
  );
};

const Academic: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-extrabold text-slate-400 dark:text-slate-300 text-center mb-12">
        📚 Minha Formação Acadêmica
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {academicRecords.map((record) => (
          <AcademicCard key={record.id} {...record} />
        ))}
      </div>
    </section>
  );
};

export default Academic;
