// src/components/layout/Footer.tsx
import {
  Container,
  Row,
  Col,
  Nav,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { personalData } from "@/data";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";


const getSocialIcon = (name: string) => {
  const iconProps = { className: "fs-4", style: { cursor: "pointer" } };

  switch (name.toLowerCase()) {
    case "facebook":
      return <BiLogoFacebook {...iconProps} />;
    case "instagram":
      return <FaInstagram {...iconProps} />;
    case "linkedin":
      return <BiLogoLinkedin {...iconProps} />;
    case "github":
      return <FaGithub {...iconProps} />;
    default:
      return null;
  }
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { contactInfo, socialLinks } = personalData;

  return (
    <footer id="contact" className="footer">
      <Container fluid="lg" className="mt-5 pt-5">
        {/* Personal Info */}
        <div id="personal" className="text-center">
          <Row className="justify-content-center align-items-center">
            <Col className="lead">
              <i className="bi bi-geo-alt me-2"></i>
              {contactInfo.location}
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="lead">
              <i className="bi bi-phone me-2"></i>
              {contactInfo.phone}
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col className="lead">
              <i className="bi bi-envelope me-2"></i>
              {contactInfo.email}
            </Col>
          </Row>
        </div>

        {/* Social Links */}
        <div id="social" className="pb-4 pt-3">
          <Nav className="justify-content-center">
            {socialLinks.map((link) => (
              <Nav.Item key={link.name}>
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>{link.name}</Tooltip>}
                >
                  <Nav.Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {getSocialIcon(link.name)}
                    </span>
                  </Nav.Link>
                </OverlayTrigger>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        {/* Copyright */}
        <div className="text-small text-center pb-4">
          <small className="text-muted">
            ™ & © {currentYear} Tutti i diritti riservati.
          </small>
        </div>
      </Container>
    </footer>
  );
};
