import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Gyouk Chu </span>
            from <span className="purple"> Daegu, Repulic of Korea.</span>
            <br />
            I am currently a <span className="purple">M.S. student</span> in <span className="purple">Artificial Intelligence</span> at Korea Advanced Institute of Science and Technology (KAIST).
            I received a <span className="purple">B.S. degree</span> in <span className="purple">Electrical Engineering and Mathematical Science</span> at KAIST in 2025.
            <br />
            <br />
            My recent research interests focus on a natuarl language processing. More specifically, a domain adaptation of LLM and a synthetic data generation, especially in Korean.
            <br />
            <br />
            Apart from studying, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis 🏓 or Badminton 🏸
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping 😴
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Sleep is the best meditation."{" "}
          </p>
          <footer className="blockquote-footer">Dalai Lama</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
