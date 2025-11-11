// src/data/heroData.ts
import type { HeroDescriptionData } from "@/types/Portfolio";
import { personalData } from "./personalData";

export const heroDescriptionData: HeroDescriptionData = {
  title: "Hi There!",
  paragraphs: [
    {
      text: `My name is {0} and I graduate at University of Salerno with a degree in {1}`,
      highlights: [
        { text: personalData.fullName, className: "fw-normal" },
        { text: personalData.bsc, className: "fw-normal" },
      ],
      alignment: "start",
    },
    {
      text: "I have a strong Passion and dedication for {0} and {1}. In particular, i love {2}",
      highlights: [
        {
          text: personalData.hobbies[0],
          className: "bg-secondary text-light rounded",
        },
        { text: personalData.hobbies[1], className: "bg-warning rounded" },
        {
          text: personalData.hobbies[2],
          className: "fs-2 text-danger fw-bold",
        },
      ],
      alignment: "center",
    },
    {
      text: "I'm a creative and motivated person and I'd love to keep growing and i aim to be the {0}",
      highlights: [{ text: "best", className: "display-4 fw-bold" }],
      alignment: "end",
    },
  ],
};