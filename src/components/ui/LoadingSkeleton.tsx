"use client";

import React from "react";
import { LOADING_SKELETON_SIZE_CLASSES } from "@/lib/loadingStyles";

interface LoadingSkeletonProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  message,
  size = "md",
}) => {
  const spinnerSize = LOADING_SKELETON_SIZE_CLASSES[size];

  return (
    <div className="flex flex-col items-center justify-center p-4" role="status">
      <div className="flex flex-col items-center space-y-3">
        <div className="relative">
          <div
            className={`${spinnerSize} border-3 border-gray-300 dark:border-gray-600 border-t-slate-500 dark:border-t-slate-400 rounded-full animate-spin`}
            aria-hidden="true"
          />
        </div>

        {message && (
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 text-center">
            {message}
          </p>
        )}
      </div>
      {message && <span className="sr-only">{message}</span>}
    </div>
  );
};

export default LoadingSkeleton;
