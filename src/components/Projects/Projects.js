import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import KoMathTemp from "../../Assets/Projects/Korean-Math-temp.png";
import KoMedGemma2 from "../../Assets/Projects/Korean-Medical-Gemma2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KoMedGemma2}
              isBlog={false}
              title="Korean Medical LLM"
              description="COMING SOON"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KoMathTemp}
              isBlog={false}
              title="Korean Math-Specialized LLM"
              description="COMING SOON"
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
