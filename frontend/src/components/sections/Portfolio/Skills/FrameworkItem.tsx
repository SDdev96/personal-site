// src/components/sections/Skills/FrameworkItem.tsx
import {
  Row,
  Col,
  ProgressBar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import type { FrameworkItemProps } from "@/types/Portfolio";

import { renderLogos } from "@/utils";

export const FrameworkItem = ({
  name,
  logos,
  percentage,
  mastery,
}: FrameworkItemProps) => {
  const isInProgress = mastery === "in progress";

  return (
    <div className="framework mb-1">
      <Row className="justify-content-center align-items-center">
        {/* col 1 - Icon */}
        <Col xs={3} className="text-end pe-0">
          <OverlayTrigger placement="left" overlay={<Tooltip>{name}</Tooltip>}>
            <span className="rounded-circle">
              {renderLogos({ logos, name })} {name}
            </span>
          </OverlayTrigger>
        </Col>

        {/* col 2 - Progress Bar */}
        <Col xs={9}>
          <div className="progress" style={{ height: "18px" }}>
            <ProgressBar
              variant="warning text-black"
              now={percentage}
              striped={isInProgress}
              animated={isInProgress}
              label={isInProgress ? "in progress..." : `${mastery}`}
              style={{ width: `100%`, height: "100%" }}
              data-aos="fade-right"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
