// src/components/sections/Tutoring/Services.tsx
import { useState, type JSX } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { BsCalculator, BsLightning, BsLaptop, BsX } from "react-icons/bs";
import styles from "./Services.module.css";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  levels: string[];
  detailedDescription: string;
  topics: string[];
}

export const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      icon: <BsCalculator size={48} />,
      title: "Matematica",
      description: "Algebra, Geometria, Analisi, Statistica ...",
      levels: ["Liceo", "Università"],
      detailedDescription:
        "Lezioni personalizzate di matematica per studenti liceali e universitari. Aiuto nella comprensione dei concetti fondamentali e preparazione esami.",
      topics: [
        "Trigonometria e funzioni goniometriche",
        "Limiti e continuità",
        "Studio di funzione completo",
        "Equazioni e disequazioni",
        "Geometria analitica",
        "Logaritmi ed esponenziali",
        "Sistemi lineari",
        "Algebra lineare e geometria",
        "Analisi matematica I, II",
        "Analisi complessa",
        "Funzioni di più variabili",
        "Calcolo differenziale e integrale",
        "Successioni e serie numeriche",
        "Statistica e probabilità",
        "Matematica discreta",
        "Equazioni differenziali",
        "Preparazione esami universitari",
        "E molto altro..",
      ],
    },
    {
      icon: <BsLightning size={48} />,
      title: "Fisica",
      description: "Meccanica, Magnetismo, Elettromagnetismo ...",
      levels: ["Liceo", "Università"],
      detailedDescription:
        "Lezioni di fisica con approccio integrato teoria-pratica. Dalla meccanica classica all'elettromagnetismo, con focus sulla risoluzione guidata di problemi complessi e preparazione mirata agli esami.",
      topics: [
        "Meccanica classica e cinematica",
        "Dinamica e leggi di Newton",
        "Lavoro, energia e quantità di moto",
        "Gravitazione universale",
        "Elettrostatica e legge di Coulomb",
        "Circuiti elettrici e leggi di Kirchhoff",
        "Campo magnetico e induzione elettromagnetica",
        "Elettromagnetismo ed equazioni di Maxwell",
        "E molto altro..",
      ],
    },
    {
      icon: <BsLaptop size={48} />,
      title: "Informatica",
      description: "Programmazione, Algoritmi, Database ...",
      levels: ["Liceo", "Università"],
      detailedDescription:
        "Dalla logica di programmazione ai progetti complessi. Competenze pratiche in Java, Python, C, JavaScript e tecnologie moderne. Approccio hands-on con progetti reali e best practices del settore.",
      topics: [
        "Fondamenti di programmazione",
        "Algoritmi e strutture dati",
        "Programmazione orientata agli oggetti",
        "Database SQL",
        "Web development (HTML, CSS, JavaScript)",
        "Framework moderni",
        "Reti di calcolatori e protocolli",
        "Design patterns e best practices",
        "Version control (Git, GitHub)",
        "Preparazione progetti universitari",
        "AI e Servizi RESTful",
        "E molto altro..",
      ],
    },
  ];

  const handleCardClick = (service: Service) => {
    if (window.innerWidth >= 1024) {
      setSelectedService(service);
    }
  };

  return (
    <>
      <section id="services" className="py-5">
        <Container fluid="lg">
          <h2 className="text-center display-4 fw-bold mb-5">Materie</h2>
          <Row>
            {services.map((service, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card
                  className={`h-100 text-center shadow-lg border bg-light ${styles.serviceCard}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  data-aos-duration="250"
                  onClick={() => handleCardClick(service)}
                >
                  <Card.Body>
                    <div className="text-primary mb-3">{service.icon}</div>
                    <Card.Title className="fs-3 fw-bold">
                      {service.title}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {service.description}
                    </Card.Text>
                    <div className="d-flex gap-2 justify-content-center mt-3">
                      {service.levels.map((level) => (
                        <span
                          key={level}
                          className="badge bg-primary bg-opacity-10 text-primary"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                    {window.innerWidth >= 1024 && (
                      <p className="text-primary mt-3 mb-0 small">
                        Clicca per maggiori dettagli
                      </p>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Modal per desktop */}
      <Modal
        show={selectedService !== null}
        onHide={() => setSelectedService(null)}
        size="xl"
        centered
        className={styles.serviceModal}
      >
        <Modal.Header className="border-0 pb-0">
          <Button
            variant="link"
            className="ms-auto text-dark"
            onClick={() => setSelectedService(null)}
          >
            <BsX size={32} />
          </Button>
        </Modal.Header>
        <Modal.Body className="pt-0">
          {selectedService && (
            <div className="text-center">
              <div className="text-primary mb-4">{selectedService.icon}</div>
              <h2 className="display-5 fw-bold mb-3">
                {selectedService.title}
              </h2>
              <div className="d-flex gap-2 justify-content-center mb-4">
                {selectedService.levels.map((level) => (
                  <span
                    key={level}
                    className="badge bg-primary bg-opacity-10 text-primary fs-6"
                  >
                    {level}
                  </span>
                ))}
              </div>
              <p className="lead text-muted mb-4">
                {selectedService.detailedDescription}
              </p>

              <div className="text-start">
                <Row className="g-2">
                  {selectedService.topics.map((topic, idx) => (
                    <Col key={idx} md={4}>
                      <div className="px-3 py-2 bg-primary bg-opacity-10 rounded text-primary border border-primary border-opacity-25 text-center">
                        <small className="fw-medium">{topic}</small>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="mt-4"
                href="#contact"
                onClick={() => setSelectedService(null)}
              >
                Prenota una Lezione
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
