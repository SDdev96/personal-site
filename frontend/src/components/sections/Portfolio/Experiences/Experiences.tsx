import { Container } from "react-bootstrap";
import { experiencesData } from "@/data";
import { ExperienceCard } from "./ExperienceCard";

export const Experiences = () => {
  return (
    <section id="experiences">
      <Container fluid="lg" className="my-5 py-5">
        {experiencesData.map((experience, index) => (
          <ExperienceCard key={experience.name} {...experience} index={index} />
        ))}
      </Container>
    </section>
  );
};
