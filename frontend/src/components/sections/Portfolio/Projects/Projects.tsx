// src/components/sections/Projects/Projects.tsx
import { Container } from "react-bootstrap";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectCard } from "./ProjectCard";
import { personalData } from "@/data/personalData";
import type { ProjectProps } from "@/types/Portfolio";
export const Projects = () => {
  const projects = personalData.projects;

  return (
    <section id="projects">
      <Container fluid="lg" className="my-5 py-5">
        <ProjectGrid>
          {projects.map((project: ProjectProps) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </ProjectGrid>
      </Container>
    </section>
  );
};
