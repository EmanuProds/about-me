import { useState, useEffect } from "react";

/**
 * Custom hook to manage loading state with a configurable delay
 * @param delay - Delay in milliseconds before setting loading to false (default: 800)
 * @returns loading - Boolean indicating if still loading
 */
export const useLoading = (delay: number = 800): boolean => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return loading;
};
