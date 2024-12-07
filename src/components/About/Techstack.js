import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
} from "react-icons/di";
import { 
  SiHuggingface,
  SiPandas,
  SiPytorch,
  SiLangchain,
  SiScikitlearn,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { TbSql } from "react-icons/tb";

import wandBIcon from "../../Assets/wandb_icon.png";

function WandBIcon({size = 72, alt = "Your Icon" }) {
  return <img src={wandBIcon} alt={alt} style={{ width: size, height: size }} />;
}

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHuggingface />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLangchain />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <WandBIcon/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      
    </Row>
  );
}

export default Techstack;
