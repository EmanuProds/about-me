// src/components/SectionHeader.tsx
import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <p className="text-primary uppercase tracking-widest text-sm mb-2">
        {subtitle}
      </p>
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-textLight leading-tight">
        {title}
      </h2>
    </motion.div>
  );
}
