// src/components/sections/Experiences/ExperienceCard.tsx
import { Row, Col, Badge } from "react-bootstrap";
import type { Experience } from "@/types/Portfolio";
import styles from "./ExperienceCard.module.css";

interface ExperienceCardProps extends Experience {
  index: number;
}

export const ExperienceCard = ({
  name,
  description,
  tags,
  current,
  index,
}: ExperienceCardProps) => {
  // Alterna allineamento: pari = left, dispari = right
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`text-start ps-0 pb-5 mb-5 ${
        current
          ? `position-relative rounded-3 ${styles["current-experience"]}`
          : ""
      }`}
    >
      {/* Badge "Current Role" */}
      {current && (
        <span className="position-absolute top-0 end-0 translate-middle-y bg-primary text-white px-3 py-1 rounded-pill fw-semibold z-1 shadow-sm">
          Current Role
        </span>
      )}

      {/* Titolo */}
      <Row className="justify-content-center align-items-center pe-0">
        <Col
          xs={12}
          md={11}
          className={`display-2 pb-2 ps-0 ${
            isLeft ? "text-md-start" : "text-md-end"
          } text-center`}
        >
          {name}
        </Col>
      </Row>

      {/* Descrizione */}
      <p
        className={`lead fw-light fs-3 px-3 px-md-3 ${
          isLeft
            ? `ms-md-5 ${styles["border-md-start"]}`
            : `me-md-5 ${styles["border-md-end"]}`
        } ${styles["border-sm-bottom"]} border-info border-2 ${
          isLeft ? "text-md-start" : "text-md-end"
        } text-center`}
      >
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div
          className={`d-flex flex-wrap gap-2 ${
            isLeft ? "justify-content-md-start" : "justify-content-md-end"
          } justify-content-center px-3 px-md-5 mt-3`}
        >
          {tags.map((tag) => (
            <Badge
              key={tag}
              bg="primary"
              className="bg-opacity-10 text-primary"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
