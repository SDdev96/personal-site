import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import "./ContactForm.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  level: "liceo" | "università" | "";
  subject: string;
  topics: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  age?: string;
  level?: string;
  subject?: string;
  message?: string;
}

const subjects = ["Matematica", "Fisica", "Informatica"];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    level: "",
    subject: "",
    topics: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "danger";
    message: string;
  } | null>(null);

  // const validateEmail = (email: string): boolean => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  // const validatePhone = (phone: string): boolean => {
  //   const phoneRegex = /^\+?[0-9\s-]{6,15}$/;
  //   return phoneRegex.test(phone);
  // };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Il nome è obbligatorio";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "Il nome deve contenere almeno 2 caratteri";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Il cognome è obbligatorio";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Il cognome deve contenere almeno 2 caratteri";
    }

    // if (!formData.email.trim()) {
    //   newErrors.email = "L'email è obbligatoria";
    // } else if (!validateEmail(formData.email)) {
    //   newErrors.email = "Inserisci un indirizzo email valido";
    // }

    // if (!formData.phone) {
    //   newErrors.phone = "Il numero di telefono è obbligatorio";
    // } else if (!validatePhone(formData.phone)) {
    //   newErrors.phone = "Inserisci un numero di telefono valido";
    // }

    if (!formData.level) {
      newErrors.level = "Seleziona il tipo di studente";
    }

    if (!formData.subject) {
      newErrors.subject = "Seleziona una materia";
    }

    if (formData.message.trim().length > 1000)
      newErrors.message = "Il messaggio non può superare i 1000 caratteri";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Rimuovi l'errore quando l'utente inizia a digitare
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // const handleSubmit1 = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!validateForm()) {
  //     return;
  //   }

  //   setIsSubmitting(true);
  //   setSubmitStatus(null);

  //   try {
  //     // Simula chiamata API
  //     await new Promise((resolve) => setTimeout(resolve, 1500));

  //     console.log("Dati inviati:", formData);

  //     setSubmitStatus({
  //       type: "success",
  //       message: "Messaggio inviato con successo! Ti contatteremo presto.",
  //     });

  //     // Reset form
  //     setFormData({
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       phone: "",
  //       level: "",
  //       subject: "",
  //       topics: "",
  //       message: "",
  //     });
  //     setErrors({});
  //   } catch (error) {
  //     setSubmitStatus({
  //       type: "danger",
  //       message: "Errore nell'invio del messaggio. Riprova più tardi.",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit2 = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Formatta il messaggio per WhatsApp
      const message = `
  🎓 *NUOVA RICHIESTA DI CONTATTO*
  
  👤 *Dati Studente:*
  Nome: ${formData.firstName} ${formData.lastName}
  Email: ${formData.email}
  Tipo: ${formData.level === "liceo" ? "Liceo" : "Università"}
  
  📚 *Informazioni Corso:*
  Materia: ${formData.subject}
  ${formData.topics ? `Argomenti specifici: ${formData.topics}` : ""}
  
  💬 *Messaggio:*
  ${formData.message}
      `.trim();

      // Numero WhatsApp del destinatario (formato internazionale senza +)
      const phoneNumber = "393384591601"; // SOSTITUISCI CON IL TUO NUMERO

      // Codifica il messaggio per URL
      const encodedMessage = encodeURIComponent(message);

      // Crea il link WhatsApp
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Apri WhatsApp
      window.open(whatsappURL, "_blank");

      setSubmitStatus({
        type: "success",
        message: "Apertura di WhatsApp in corso...",
      });

      // Reset form dopo un breve delay
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          level: "",
          subject: "",
          topics: "",
          message: "",
        });
        setErrors({});
      }, 1500);
    } catch (error) {
      setSubmitStatus({
        type: "danger",
        message: "Errore nell'apertura di WhatsApp. Riprova più tardi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <Container fluid="lg" className="my-5 py-5 ">
        <Container fluid="lg" className="shadow-lg bg-white rounded p-5 ">
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="text-center display-4 fw-bold mb-4">Richiedi Informazioni</h2>

              {submitStatus && (
                <Alert
                  variant={submitStatus.type}
                  dismissible
                  onClose={() => setSubmitStatus(null)}
                >
                  {submitStatus.message}
                </Alert>
              )}

              <Form onSubmit={handleSubmit2} noValidate>
                {/* Nome e Cognome */}
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      {/* <Form.Label>Nome *</Form.Label> */}
                      <Form.Control
                        type="text"
                        name="firstName"
                        className="shadow"
                        value={formData.firstName}
                        onChange={handleChange}
                        isInvalid={!!errors.firstName}
                        placeholder="Nome*"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Group>
                      {/* <Form.Label>Cognome *</Form.Label> */}
                      <Form.Control
                        type="text"
                        name="lastName"
                        className="shadow"
                        value={formData.lastName}
                        onChange={handleChange}
                        isInvalid={!!errors.lastName}
                        placeholder="Cognome*"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Email e numero di telefono */}
                {/* <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        className="shadow"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        placeholder="Email*"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Telefono *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        className="shadow"
                        value={formData.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                        placeholder="Num. di cellulare*"
                      />
                      <Form.Text className="text-dark">
                        Se minorenne lascia il recapito di un tuo supervisore
                      </Form.Text>
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row> */}

                {/* tipo di studente */}
                <Col md={6} className="mb-3">
                  <Form.Group className="mb-3">
                    {/* <Form.Label>Tipo di studente *</Form.Label> */}
                    <div>
                      <Form.Check
                        type="radio"
                        id="liceale"
                        name="level"
                        label="Liceo"
                        value="liceo"
                        checked={formData.level === "liceo"}
                        onChange={handleChange}
                        isInvalid={!!errors.level}
                        inline
                      />
                      <Form.Check
                        type="radio"
                        id="universitario"
                        name="level"
                        label="Università"
                        value="università"
                        checked={formData.level === "università"}
                        onChange={handleChange}
                        isInvalid={!!errors.level}
                        inline
                      />
                    </div>
                    {errors.level && (
                      <div className="text-danger small mt-1">
                        {errors.level}
                      </div>
                    )}
                  </Form.Group>
                </Col>

                {/* Materia */}
                <Form.Group className="mb-3">
                  {/* <Form.Label>Materia di interesse *</Form.Label> */}
                  <Form.Select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    isInvalid={!!errors.subject}
                    className="shadow"
                  >
                    <option value="">Materia*</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.subject}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Argomenti specifici (opzionale) */}
                <Form.Group className="mb-3">
                  {/* <Form.Label>Argomenti specifici (opzionale)</Form.Label> */}
                  <Form.Control
                    type="text"
                    name="topics"
                    className="shadow"
                    value={formData.topics}
                    onChange={handleChange}
                    placeholder="Argomenti specifici"
                  />
                </Form.Group>

                {/* Messaggio */}
                <Form.Group className="mb-4">
                  {/* <Form.Label>Messaggio *</Form.Label> */}
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    className="shadow"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    placeholder="Aggiungi un messaggio personalizzato se lo desideri!"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Pulsante di invio */}
                <div className="d-grid gap-2">
                  <Button
                    variant="success"
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: "#25D366",
                      borderColor: "#25D366",
                      fontWeight: "500",
                    }}
                    className="d-flex align-items-center justify-content-center gap-2 shadow"
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Apertura WhatsApp...
                      </>
                    ) : (
                      <>
                        <FaWhatsapp size={24} />
                        Invia su WhatsApp
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};
