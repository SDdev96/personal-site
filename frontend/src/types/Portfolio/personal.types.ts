// src/types/personal.types.ts
import type { Skills } from "./skill.types";

export interface CVLink {
  label: string;
  href: string;
}

export interface Experience {
  name: string;
  description: string;
  tags: string[];
  current: boolean;
}

export interface ContactInfo {
  location: string;
  phone: string;
  email: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
}

export interface PersonalData {
  imageSrc: string;
  imageAlt: string;
  fullName: string;
  bsc: string;
  msc: string;
  job: string;
  skills: Skills;
  experiences: Experience[];
  hobbies: string[];
  quote: string;
  cvLinks: CVLink[];
  projects: Project[];
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}

export interface ExperienceProps extends Experience {}

export interface ProjectProps extends Project {}
