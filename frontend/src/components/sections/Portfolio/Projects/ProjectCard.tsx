// src/components/sections/Projects/ProjectCard.tsx
import { useState } from "react";
import { Card, Modal, Badge, Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import styles from "./ProjectGrid.module.css";
import type { ProjectProps } from "@/types/Portfolio";

export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link,
}: ProjectProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* Card cliccabile */}
      <Card
        className={`${styles.item} h-100 shadow-lg rounded overflow-hidden`}
        onClick={handleShow}
      >
        <div className={styles.imageContainer}>
          {/* Immagine di sfondo */}
          {image ? (
            <img src={image} alt={title} className={styles.image} />
          ) : (
            <div
              className={styles.image}
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              }}
            />
          )}

          {/* Overlay con blur e titolo */}
          <div className={styles.overlay}>
            <h3 className={styles.title}>{title}</h3>
          </div>
        </div>
      </Card>

      {/* Modal con dettagli */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="bg-light">
          {/* Immagine */}
          {image && (
            <img
              src={image}
              alt={title}
              className="img-fluid rounded mb-3"
              style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
            />
          )}

          {/* Descrizione */}
          <p className="lead">{description}</p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="mb-3">
              <h6 className="fw-bold mb-2">Technologies:</h6>
              <div className="d-flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    bg="primary"
                    className="bg-opacity-10 text-primary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          {/* Link GitHub */}
          {link && (
            <Button
              variant="dark"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="me-2" />
              GitHub
            </Button>
          )}

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
