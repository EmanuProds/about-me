import { ElementType } from "react";

export interface ScrollContainerProps {
  stack: TechIcon[];
  direction: "left" | "right";
  className?: string;
  style?: React.CSSProperties;
}

export interface TechIcon {
  Icon: ElementType;
  name: string;
  color: string;
}
