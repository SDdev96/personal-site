// src/components/sections/Hero/Hero.tsx
import { Container, Row } from "react-bootstrap";
import { HeroImage } from "./HeroImage";
import { HeroIntro } from "./HeroIntro";
import { HeroDescription } from "./HeroDescription";
import { personalData, heroDescriptionData } from "@/data";

export const Hero = () => {
  return (
    <section id="about-me">
      <Container fluid="lg" className="my-5 py-5">
        <Row className="justify-content-center align-items-center mb-5 pb-5">
          <HeroImage
            imageSrc={personalData.imageSrc}
            imageAlt={personalData.imageAlt}
          />
          <HeroIntro
            fullName={personalData.fullName}
            title={personalData.bsc}
            subtitle={personalData.job}
            quote={personalData.quote}
            cvLinks={personalData.cvLinks}
          />
        </Row>

        <HeroDescription {...heroDescriptionData} />
      </Container>
    </section>
  );
};
