// src/components/layout/Navbar.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

export const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  
  

  // Naviga items diversi per Portfolio e Tutoring
  const portfolioNavItems = [
    { href: "#about-me", label: "About Me", type: "scroll" },
    { href: "#skills", label: "Skills", type: "scroll" },
    { href: "#experiences", label: "Experiences", type: "scroll" },
    { href: "#projects", label: "Projects", type: "scroll" },
  ];

  const tutoringNavItems = [
    { href: "#services", label: "Services", type: "scroll" },
    // { href: "#pricing", label: "Pricing", type: "scroll" },
    // { href: "#reviews", label: "Reviews", type: "scroll" },
    { href: "#contact", label: "Contact", type: "scroll" },
    { href: "#faq", label: "FAQ", type: "scroll" },
  ];

  const navItems =
    location.pathname === "/tutoring" ? tutoringNavItems : portfolioNavItems;

  return (
    
    <BSNavbar
      expand="md"
      className="navbar-light fs-4"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container fluid="md">
        {/* Logo/Brand */}
        <BSNavbar.Brand as={Link} to="/" className="fw-bold">
          SD
        </BSNavbar.Brand>

        {/* Toggle button for mobile nav */}
        <BSNavbar.Toggle className="navbar-toggler" aria-controls="main-nav" aria-label="Toggle navigation"/>

        <BSNavbar.Collapse id="main-nav" className="justify-content-center ">
          <Nav className="navbar-nav">
            {/* Link tra pagine */}
            <Nav.Item className="px-3">
              <Nav.Link
                as={Link}
                to="/"
                active={location.pathname === "/"}
              >
                Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-3">
              <Nav.Link
                as={Link}
                to="/tutoring"
                active={location.pathname === "/tutoring"}
              >
                Lezioni Private
              </Nav.Link>
            </Nav.Item>

            {/* Divider */}
            <Nav.Item className="px-2">
              <span className="text-muted">|</span>
            </Nav.Item>

            {/* Link scroll nella pagina corrente */}
            {navItems.map((item) => (
              <Nav.Item key={item.href} className="px-3">
                <Nav.Link
                  href={item.href}
                  onClick={() => setExpanded(false)}
                >
                  {item.label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};