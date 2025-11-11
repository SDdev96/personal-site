import type { Icon } from "@/types/Portfolio";
import type { JSX } from "react";

interface RenderLogosOptions {
  logos: (string | Icon)[];
  name: string;
  imageWidth?: number;
  imageClassName?: string;
  iconClassName?: string;
}

export const renderLogos = ({
  logos,
  name,
  imageWidth,
  imageClassName = "me-0",
  iconClassName = "me-1",
}: RenderLogosOptions): JSX.Element => {
  return (
    <>
      {logos.map((logo, index) => {
        // Se è una stringa (path immagine)
        if (typeof logo === "string") {
          return logo.length > 0 ? (
            <img
              key={index}
              src={logo}
              width={imageWidth}
              alt={`${name} logo`}
              className={imageClassName}
            />
          ) : null;
        }

        // Se è un SkillIcon
        const icon = logo as Icon;
        const IconComponent = icon.icon;
        return (
          <IconComponent
            key={index}
            size={icon.size}
            color={icon.color}
            className={iconClassName}
          />
        );
      })}
    </>
  );
};
