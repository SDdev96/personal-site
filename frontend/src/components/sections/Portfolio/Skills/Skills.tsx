// src/components/sections/Skills/Skills.tsx
import { Container, Row } from "react-bootstrap";
import { technicalSkills, softSkills } from "@/data";
import { TechnicalSkill } from "./TechnicalSkill";
import { SoftSkill } from "./SoftSkill";

export const Skills = () => {
  return (
    <section id="skills">
      <Container fluid="lg" className="my-5 py-5">
        <Container fluid="lg" className="shadow-lg bg-white rounded p-5">
          {/* Technical Skills */}
          <div className="technical-skills pb-5">
            {technicalSkills.map((skill) => (
              <TechnicalSkill key={skill.name} {...skill} />
            ))}
          </div>

          {/* Soft Skills */}
          <div className="soft-skills">
            <Row className="justify-content-center align-items-center">
              {softSkills.map((skill) => (
                <SoftSkill key={skill.name} {...skill} />
              ))}
            </Row>
            <p className="text-center fs-3 fw-light py-5">And much more...</p>
          </div>
        </Container>
      </Container>
    </section>
  );
};
