// src/components/sections/Tutoring/FAQ.tsx
import { Container, Accordion, Col, Row } from "react-bootstrap";

export const FAQ = () => {
  const faqs = [
    {
      question: "Dove si svolgono le lezioni?",
      answer:
        "Le lezioni possono essere svolte online su Discord o in presenza a Eboli/Salerno.",
    },
    {
      question: "Quanto durano le lezioni?",
      answer:
        "Ogni lezione dura 1 ora, ma possiamo accordarci per sessioni più lunghe se necessario.",
    },
    {
      question: "Come si prenota una lezione?",
      answer:
        "Puoi contattarmi compilando il form qui sotto che ti rimanda su WhatsApp al numero 3384591601 o tramite il chatbot qui sul sito. Ti risponderò entro 24 ore.",
    },
    {
      question: "Quali materiali servono?",
      answer:
        "Per le lezioni online ti serve solo un computer con connessione internet. Per quelle in presenza, porta i tuoi libri e appunti.",
    },
    {
      question: "Si può disdire una lezione?",
      answer: "Sì, preferibilmente almeno entro 24 ore di preavviso.",
    },
  ];

  return (
    <section id="faq" className="py-5">
      <Container fluid="lg">
        <h2 className="text-center display-4 fw-bold mb-5">
          Domande Frequenti
        </h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Accordion data-aos="fade-up">
              {faqs.map((faq, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
