// src/components/sections/Tutoring/TutoringHero.tsx
import { useNavigate } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaCalculator,
  FaLaptopCode,
  FaAtom,
  FaMicrochip,
  FaCode,
  FaRobot,
  FaProjectDiagram,
  FaChartLine,
} from "react-icons/fa";
import { BsGear, BsCpu, BsGraphUp } from "react-icons/bs";
import type { IconType } from "react-icons";
import styles from "./TutoringHero.module.css";

interface FloatingIcon {
  Icon: IconType;
  size: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animationClass: string;
}

export const TutoringHero = () => {
  const navigate = useNavigate();
  const floatingIcons: FloatingIcon[] = [
    {
      Icon: FaCalculator,
      size: 100,
      position: { top: "10%", left: "5%" },
      animationClass: styles.iconAnimate1,
    },
    {
      Icon: BsGraphUp,
      size: 100,
      position: { top: "15%", left: "25%" },
      animationClass: styles.iconAnimate7,
    },
    {
      Icon: FaProjectDiagram,
      size: 100,
      position: { top: "5%", left: "45%" },
      animationClass: styles.iconAnimate5,
    },
    {
      Icon: FaLaptopCode,
      size: 120,
      position: { top: "20%", right: "10%" },
      animationClass: styles.iconAnimate2,
    },
    {
      Icon: FaChartLine,
      size: 120,
      position: { top: "5%", right: "25%" },
      animationClass: styles.iconAnimate9,
    },
    {
      Icon: FaAtom,
      size: 90,
      position: { bottom: "30%", left: "15%" },
      animationClass: styles.iconAnimate3,
    },
    {
      Icon: FaMicrochip,
      size: 110,
      position: { bottom: "20%", right: "20%" },
      animationClass: styles.iconAnimate8,
    },
    {
      Icon: BsGear,
      size: 130,
      position: { top: "50%", left: "50%" },
      animationClass: styles.iconAnimate5,
    },
    {
      Icon: BsCpu,
      size: 130,
      position: { top: "70%", left: "30%" },
      animationClass: styles.iconAnimate10,
    },
    {
      Icon: FaCode,
      size: 80,
      position: { top: "70%", right: "5%" },
      animationClass: styles.iconAnimate6,
    },
    {
      Icon: FaRobot,
      size: 60,
      position: { top: "50%", right: "10%" },
      animationClass: styles.iconAnimate11,
    },
  ];

  return (
    <section
      id="tutoring-hero"
      className={`py-5 bg-white position-relative ${styles.heroSection}`}
    >
      {/* Sfondo con icone dinamiche */}
      <div className={styles.heroBgIcons}>
        {floatingIcons.map((item, index) => {
          const { Icon, size, position, animationClass } = item;
          return (
            <Icon
              key={index}
              className={`${styles.floatingIcon} ${animationClass}`}
              style={{
                fontSize: `${size}px`,
                ...position,
              }}
            />
          );
        })}
      </div>

      {/* Contenuto */}
      <Container fluid="lg" className={`my-5 ${styles.heroContent}`}>
        <Row className="justify-content-center align-items-center text-center">
          <Col md={8}>
            <h1 className="display-1 fw-bold">Lezioni Private</h1>
            <p className="lead fs-3" data-aos="fade-up" data-aos-delay="200">
              Matematica • Fisica • Informatica
            </p>
            <p
              className="fs-5 text-muted"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Ripetizioni personalizzate per studenti liceali e universitari
            </p>

            {/* Bottoni affiancati */}
            <div
              className="d-flex gap-3 justify-content-center flex-column flex-sm-row"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Button variant="primary" size="lg" href="#contact">
                Prenota una Lezione
              </Button>

              <Button
                variant="dark"
                size="lg"
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 400);
                }}
              >
                Chi sono
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
