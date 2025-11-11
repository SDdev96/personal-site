// src/components/sections/Skills/SoftSkill.tsx
import { Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import type { SoftSkillProps } from "@/types/Portfolio";
import { useCircularProgress } from "@/hooks";
import styles from "./SoftSkill.module.css";

export const SoftSkill = ({
  name,
  percentage,
  description,
}: SoftSkillProps) => {
  // Crea un ID valido rimuovendo spazi e caratteri speciali
  const gradientId = `GradientColor-${name.replace(/\s+/g, "-")}`;

  // IntersectionObserver hook
  const { ref: containerRef, inView } = useInView({
    threshold: 0.5, // Trigger quando il 50% è visibile
    triggerOnce: false, // Permette animazione anche quando esce e rientra
  });

  const { circleRef, displayValue } = useCircularProgress({
    percentage,
    inView: inView,
    duration: 1000,
  });

  return (
    <Col md={6} className="text-center fs-3 fw-light py-5">
      <div className={styles.container} ref={containerRef}>
        <div className={styles.skill}>
          <div className={styles.outer}>
            <div className={styles.inner}>
              <div className={styles.number}>{displayValue}%</div>
            </div>
          </div>

          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160"
            height="160"
          >
            <defs>
              <linearGradient id={gradientId}>
                <stop offset="0%" stopColor="#e91e63" />
                <stop offset="100%" stopColor="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              ref={circleRef}
              className={styles.circle}
              cx="80"
              cy="80"
              r="70"
              strokeLinecap="round"
              stroke={`url(#${gradientId})`}
            />
          </svg>
        </div>
      </div>
      <p className="fw-bold fs-4">{name}</p>
      {/* {description && <p className="text-muted small">{description}</p>} */}
    </Col>
  );
};
