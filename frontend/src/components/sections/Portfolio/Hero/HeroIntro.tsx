// src/components/sections/Hero/HeroIntro.tsx
import { useNavigate } from "react-router";
import { Col, Button } from "react-bootstrap";
import type { HeroIntroProps } from "@/types/Portfolio";

export const HeroIntro = ({
  fullName,
  title,
  subtitle,
  quote,
  cvLinks,
}: HeroIntroProps) => {
  const navigate = useNavigate();
  return (
    <Col md className="text-center text-md-start ">
      <h1>
        <div
          className="display-1 fw-bold"
          data-aos="zoom-out"
          data-aos-easing="ease-in-sine"
          data-aos-delay="200"
        >
          {fullName}
        </div>
        <div
          className="display-3"
          data-aos="zoom-out"
          data-aos-easing="ease-in-sine"
          data-aos-delay="300"
        >
          {title}
        </div>
      </h1>

      <h2>
        <div
          className="display-6 text-secondary"
          data-aos="zoom-out"
          data-aos-easing="ease-in-sine"
          data-aos-delay="400"
        >
          {subtitle}
        </div>
      </h2>

      <blockquote
        cite="kingdom hearts"
        data-aos="zoom-out"
        data-aos-offset="50"
        data-aos-easing="ease-in-sine"
        data-aos-delay="500"
      >
        <p className="lead text-danger">{quote}</p>
      </blockquote>

      <Col className="d-flex flex-column align-items-center align-items-md-start gap-2">
        <Col className="d-flex gap-2 flex-wrap justify-content-center justify-content-md-start">
          <Button
            variant="outline-dark"
            href={cvLinks[0]?.href}
            target="_blank"
          >
            Download CV
          </Button>
          <Button variant="dark" href="#contact">
            Contacts
          </Button>
        </Col>
        <Button
          variant="primary"
          onClick={() => {
            navigate("/tutoring");
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 400);
          }}
        >
          Ripetizioni private
        </Button>
      </Col>
    </Col>
  );
};
