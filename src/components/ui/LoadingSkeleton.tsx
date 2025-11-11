"use client";

import React from "react";

/**
 * Props for the LoadingSkeleton component.
 */
interface LoadingSkeletonProps {
  /** Optional message displayed below the spinner */
  message?: string;
  /** Loading spinner size */
  size?: "sm" | "md" | "lg";
}

/**
 * Loading component with animated spinner.
 * Displays a visual loading indicator with support for different sizes and messages.
 */
const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  message,
  size = "md",
}) => {
  // Size mapping to Tailwind classes
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const spinnerSize = sizeClasses[size];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-3">
        <div className="relative">
          <div
            className={`${spinnerSize} border-3 border-gray-300 dark:border-gray-600 border-t-slate-500 dark:border-t-slate-400 rounded-full animate-spin`}
          ></div>
        </div>

        {message && (
          <div className="text-center">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
