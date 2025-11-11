// src/data/skillsData.ts
import { personalData } from "./personalData";
import type {
  TechnicalSkillProps,
  ProgrammingLanguage,
  Database,
  Framework,
  Library,
  SoftSkill,
} from "@/types/Portfolio";

const mapProgrammingLanguageToSkill = (
  lang: ProgrammingLanguage
): TechnicalSkillProps => ({
  name: lang.name,
  logos: lang.logos,
  percentage: lang.percentage,
  mastery: lang.mastery,
  frameworks: lang.frameworks,
  libraries: lang.libraries,
});

const mapDatabaseToSkill = (db: Database): TechnicalSkillProps => ({
  name: db.name,
  logos: db.logos,
  percentage: db.percentage,
  mastery: db.mastery,
  frameworks: undefined,
  libraries: undefined,
});

export const technicalSkills: TechnicalSkillProps[] = [
  ...personalData.skills.hardSkills.programmingLanguages.map(
    mapProgrammingLanguageToSkill
  ),
  ...personalData.skills.hardSkills.databases.map(mapDatabaseToSkill),
];

export const frameworks: Framework[] =
  personalData.skills.hardSkills.programmingLanguages
    .filter((lang) => lang.frameworks && lang.frameworks.length > 0)
    .flatMap((lang) => lang.frameworks!);

export const libraries: Library[] =
  personalData.skills.hardSkills.programmingLanguages
    .filter((lang) => lang.libraries && lang.libraries.length > 0)
    .flatMap((lang) => lang.libraries!);

export const softSkills: SoftSkill[] = personalData.skills.softSkills;
