// src/components/sections/Projects/ProjectGrid.tsx
import type { ReactNode } from "react";
import styles from "./ProjectGrid.module.css";

interface ProjectGridProps {
  children: ReactNode;
}

export const ProjectGrid = ({ children }: ProjectGridProps) => {
  return <div className={styles.container}>{children}</div>;
};