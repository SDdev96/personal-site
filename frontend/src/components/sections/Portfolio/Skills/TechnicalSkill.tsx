// src/components/sections/Skills/TechnicalSkill.tsx
import { ProgressBar } from "react-bootstrap";
import type { TechnicalSkillProps } from "@/types/Portfolio";
import { FrameworkItem } from "./FrameworkItem";
import { renderLogos } from "@/utils";

export const TechnicalSkill = ({
  name,
  logos,
  percentage,
  mastery,
  frameworks,
  libraries,
}: TechnicalSkillProps) => {
  const isInProgress = mastery === "in progress";

  return (
    <>
      {/* Main Skill */}
      <div className="mb-1 pt-5">
        <span className="fw-bolder fs-3">
          {renderLogos({ logos, name })}
          {name}
        </span>
        <div className="progress" style={{ height: "25px" }}>
          <ProgressBar
            variant="info"
            now={percentage}
            striped={isInProgress}
            animated={isInProgress}
            label={isInProgress ? "in progress..." : `${percentage}%`}
            style={{ width: `100%`, height: "100%" }}
            data-aos="fade-right"
          />
        </div>
      </div>

      {/* Frameworks */}
      {frameworks && frameworks.length > 0 && (
        <div className="frameworks mb-3">
          {frameworks.map((framework) => (
            <FrameworkItem key={framework.name} {...framework} />
          ))}
        </div>
      )}

      {/* Libraries */}
      {libraries && libraries.length > 0 && (
        <div className="libraries mb-4">
          {libraries.map((library) => (
            <FrameworkItem key={library.name} {...library} />
          ))}
        </div>
      )}
    </>
  );
};
