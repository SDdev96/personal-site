// src/components/sections/Hero/HeroProfile.tsx
import { Col } from "react-bootstrap";
import type { HeroImageProps } from "@/types/Portfolio";

export const HeroImage = ({ imageSrc, imageAlt }: HeroImageProps) => {
  return (
    <Col md={5} xs={7} className="text-center d-md-block">
      <img
        src={imageSrc}
        className="img-fluid rounded-circle shadow-lg rounded p-2"
        alt={imageAlt}
      />
    </Col>
  );
};
