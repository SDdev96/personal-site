// src/components/sections/Tutoring/Pricing.tsx
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const Pricing = () => {
  const plans = [
    {
      title: "Lezione Singola",
      price: "25",
      description: "per ora",
      variant: "outline-primary",
    },
    {
      title: "Pacchetto 10 Ore",
      price: "200",
      description: "€20/ora - Risparmia 20%",
      variant: "primary",
      featured: true,
    },
  ];

  return (
    <section id="pricing" className="py-5">
      <Container fluid="lg">
        <h2 className="text-center display-4 fw-bold mb-5" data-aos="fade-down">
          Prezzi
        </h2>
        <Row className="justify-content-center">
          {plans.map((plan, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card 
                className={`h-100 text-center shadow ${
                  plan.featured ? "border-primary border-2" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card.Body className="d-flex flex-column">
                  {plan.featured && (
                    <span className="badge bg-primary mb-3">Più Popolare</span>
                  )}
                  <h3 className="fs-4 mb-3">{plan.title}</h3>
                  <div className="display-3 fw-bold my-3 text-primary">€{plan.price}</div>
                  <p className="text-muted mb-4">{plan.description}</p>
                  <Button 
                    variant={plan.variant} 
                    className="mt-auto"
                    href="#contact"
                  >
                    Prenota
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};