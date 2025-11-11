// src/types/skill.types.ts
import type { IconType } from "react-icons";

export interface Icon {
  icon: IconType;
  color?: string;
  size?: number;
}

export type SkillLevel =
  | "in progress"
  | "basic"
  | "intermediate"
  | "advanced"
  | "expert"
  | "master";

// Base per skill con logo (SOLO array)
export interface SkillWithLogo {
  name: string;
  logos: (string | Icon)[]; // Array di stringhe o SkillIcon
  percentage: number;
  mastery: SkillLevel;
}

// Framework e Library estendono SkillWithLogo
export interface FrameworkOrLibrary extends SkillWithLogo {}

export type Framework = FrameworkOrLibrary;
export type Library = FrameworkOrLibrary;

// Base per tutte le skill tecniche
export interface TechnicalSkillData {
  name: string;
  percentage: number;
  mastery: SkillLevel;
}

// ProgrammingLanguage estende TechnicalSkillData
export interface ProgrammingLanguage extends TechnicalSkillData {
  logos: (string | Icon)[]; // Array
  frameworks?: Framework[];
  libraries?: Library[];
}

// Database estende TechnicalSkillData
export interface Database extends TechnicalSkillData {
  type: "SQL" | "NoSQL";
  logos: (string | Icon)[];
}

export interface HardSkills {
  programmingLanguages: ProgrammingLanguage[];
  databases: Database[];
  tools: string[];
}

export interface SoftSkill {
  name: string;
  percentage: number;
  description: string;
}

export interface Skills {
  hardSkills: HardSkills;
  softSkills: SoftSkill[];
}

export interface TechnicalSkillProps extends TechnicalSkillData {
  logos: (string | Icon)[];
  frameworks?: Framework[];
  libraries?: Library[];
}

export interface FrameworkItemProps extends FrameworkOrLibrary {}

export interface SoftSkillProps extends SoftSkill {}
