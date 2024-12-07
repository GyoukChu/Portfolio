import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiSlack,
  SiLinux,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc"
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
    </Row>
  );
}

export default Toolstack;
