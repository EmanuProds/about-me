"use client";

import React from "react";
import { useLoading } from "@/hooks/useLoading";
import {
  CARD_BASE_CLASSES,
  TECH_CARD_CLASSES,
  TECH_ICON_CLASSES,
  TECH_TEXT_CLASSES,
  STAT_CARD_CLASSES,
  VIDEO_CONTAINER_CLASSES,
  BUTTON_BASE_CLASSES,
} from "@/lib/cardStyles";

// Interface defining the props for the Card component
interface CardProps {
  id?: string; // Optional ID for the section element
  title?: string; // Optional title to display at the top of the section
  titleClass?: string; // Optional additional classes for the title
  children: (loading: boolean) => React.ReactNode; // Function that receives loading state and returns content
  maxWidth?: "4xl" | "6xl"; // Maximum width constraint for the section
  loadingDelay?: number; // Delay in milliseconds before setting loading to false
  scrollMargin?: string; // Scroll margin for anchor navigation
  py?: string; // Vertical padding for the section
}

// Main Card component that provides a consistent section layout with optional title and loading state
const Card: React.FC<CardProps> = ({
  id,
  title,
  titleClass = "",
  children,
  maxWidth = "4xl",
  loadingDelay = 800,
  scrollMargin = "16",
  py = "16",
}) => {
  // Use custom hook to manage loading state
  const loading = useLoading(loadingDelay);

  // Determine the appropriate max-width class based on prop
  const maxWidthClass = maxWidth === "6xl" ? "max-w-6xl" : "max-w-4xl";

  return (
    <section
      id={id}
      className={`w-full ${maxWidthClass} mx-auto px-4 py-${py}`}
      style={{ scrollMarginTop: `${parseInt(scrollMargin) * 4}px` }}
    >
      <div className="text-center space-y-8">
        {/* Render title section if title is provided */}
        {title && (
          <div className="space-y-4">
            <h2 className={`text-4xl font-bold text-gray-900 dark:text-gray-100 ${titleClass}`}>
              {title}
            </h2>
            {/* Decorative line under the title */}
            <div className="w-24 h-1 bg-linear-to-r bg-slate-600 dark:bg-slate-400 mx-auto rounded-full" />
          </div>
        )}

        {/* Render children content with loading state */}
        {children(loading)}
      </div>
    </section>
  );
};

// Re-export card styles for convenience
export {
  CARD_BASE_CLASSES,
  TECH_CARD_CLASSES,
  TECH_ICON_CLASSES,
  TECH_TEXT_CLASSES,
  STAT_CARD_CLASSES,
  VIDEO_CONTAINER_CLASSES,
  BUTTON_BASE_CLASSES,
} from "@/lib/cardStyles";

export default Card;
