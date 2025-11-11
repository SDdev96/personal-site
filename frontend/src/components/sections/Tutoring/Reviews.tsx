// src/components/sections/Tutoring/Reviews.tsx
import { Container, Row, Col, Card } from "react-bootstrap";

export const Reviews = () => {
  const reviews = [
    {
      name: "Marco R.",
      text: "Grazie a Salvatore ho superato l'esame di Analisi 1 al primo tentativo!",
      rating: 5,
      subject: "Matematica",
    },
    {
      name: "Giulia S.",
      text: "Ottimo insegnante, spiega in modo chiaro e paziente.",
      rating: 5,
      subject: "Fisica",
    },
    {
      name: "Luca T.",
      text: "Preparazione eccellente per l'esame di maturità in informatica.",
      rating: 5,
      subject: "Informatica",
    },
  ];

  return (
    <section id="reviews" className="py-5">
      <Container fluid="lg">
        <h2 className="text-center display-4 fw-bold mb-5" data-aos="fade-down">
          Recensioni
        </h2>
        <Row>
          {reviews.map((review, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card 
                className="h-100 shadow-sm" 
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card.Body>
                  <div className="mb-2 text-warning">
                    {"⭐".repeat(review.rating)}
                  </div>
                  <Card.Text className="fst-italic">"{review.text}"</Card.Text>
                  <div className="mt-3">
                    <span className="badge bg-primary bg-opacity-10 text-primary">
                      {review.subject}
                    </span>
                  </div>
                  <footer className="text-muted mt-2">— {review.name}</footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};