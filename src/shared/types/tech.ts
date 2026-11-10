import { ElementType } from "react";

/**
 * Represents a technology icon with its visual properties
 */
export interface TechIcon {
  /** The React component for the icon */
  Icon: ElementType;
  /** Display name of the technology */
  name: string;
  /** Tailwind CSS color class for styling */
  color: string;
}

/**
 * Props for the scroll container component that displays tech icons
 */
export interface ScrollContainerProps {
  /** Array of tech icons to display */
  stack: TechIcon[];
  /** Scroll direction */
  direction: "left" | "right";
  /** Optional CSS class name */
  className?: string;
  /** Optional inline styles */
  style?: React.CSSProperties;
}
