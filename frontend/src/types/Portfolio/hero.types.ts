import type { CVLink } from "./personal.types";

export interface Highlight {
  text: string;
  className: string;
}

export interface DescriptionParagraph {
  text: string;
  highlights?: Highlight[];
  alignment?: "start" | "center" | "end";
}

export interface HeroDescriptionData {
  title: string;
  paragraphs: DescriptionParagraph[];
}

export interface HeroImageProps {
  imageSrc: string;
  imageAlt: string;
}

export interface HeroIntroProps {
  fullName: string;
  title: string;
  subtitle: string;
  quote: string;
  cvLinks: CVLink[];
}

export interface HeroDescriptionProps extends HeroDescriptionData {}
