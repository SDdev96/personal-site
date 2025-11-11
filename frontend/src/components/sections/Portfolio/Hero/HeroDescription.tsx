// src/components/sections/Hero/HeroDescription.tsx
import { Row, Col } from "react-bootstrap";
import type { HeroDescriptionProps, DescriptionParagraph } from "@/types/Portfolio";

export const HeroDescription = ({
  title,
  paragraphs,
}: HeroDescriptionProps) => {
  const renderParagraph = (paragraph: DescriptionParagraph) => {
    if (paragraph.highlights && paragraph.highlights.length > 0) {
      const parts = paragraph.text.split(/(\{[0-9]+\})/);
      return (
        <>
          {parts.map((part, i) => {
            const match = part.match(/\{([0-9]+)\}/);
            if (match) {
              const highlightIndex = parseInt(match[1]);
              const highlight = paragraph.highlights![highlightIndex];
              return (
                <span key={i} className={highlight.className}>
                  {highlight.text}
                </span>
              );
            }
            return part;
          })}
        </>
      );
    }
    return paragraph.text;
  };

  return (
    <div id="description">
      <Row className="justify-content-center align-items-center pb-5">
        <Col md className="text-center text-md-start display-2 text-secondary">
          <p
            className="text-decoration-underline"
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            {title}
          </p>
        </Col>
        {paragraphs[0] && (
          <Col
            as="p"
            md={7}
            className={`text-center text-md-${
              paragraphs[0].alignment || "start"
            } fs-3 fw-light`}
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            {renderParagraph(paragraphs[0])}
          </Col>
        )}
      </Row>

      {paragraphs.length > 1 && (
        <Row className="justify-content-center align-items-center py-5">
          {paragraphs.slice(1).map((paragraph, index) => (
            <Col
              key={index}
              as="p"
              md
              className={`text-center text-md-${
                paragraph.alignment || "center"
              } fs-3 fw-light`}
              data-aos="fade-up"
              data-aos-offset={200 + index * 50}
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
            >
              {renderParagraph(paragraph)}
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};