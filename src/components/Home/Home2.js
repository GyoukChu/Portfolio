import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar_dalle.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import huggingfaceLogo from "../../Assets/hf-logo.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I've always been fascinated with deep learning and enjoy applying various technologies, from traditional machine learning methods to the latest deep learning methods, to solve real-world problems!
              <br />
              <br />(I think) I am fluent in 
              <i>
                <b className="purple"> Finetuning and Serving (Multimodal) LLMs. </b>
                In other words, I am good at handling pandas, pytorch, huggingface libraries, langchain and vllm, etc.
              </i>
              <br />
              <br />
              My fields of Interest are as follows:
              <br />
              <i>
                <b className="purple">Speech and Audio Processing </b>
                <br />
                I have experience performing tasks related to <i>audio anomaly detection</i>. Now, I focus on <i>Speech-to-Text (speech recognition & transcription) and Audio LLM</i>.
                <br />
                <b className="purple">Domain-Specific LLM </b>
                <br />
                I am interested in <i>Domain-Specific finetuning</i> for LLM. I have experience creating <i>specialized LLMs in the medical, legal, and mathematical fields</i>.
                <br />
                <b className="purple">Synthetic Data Generation </b>
                <br />
                The LLM which is specialized in Korean is still very underdeveloped. I think the biggest reason for this is the <i>lack of Korean data</i>, so I create Korean synthetic data.
                This includes not only data translation but also data creation, cleansing, and evaluation through multiple Frontier LLMs.
                <br />
              </i>
              <br />
              Whenever possible, I also apply my passion for computer vision research to gain a better and deeper insight.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
            <i className="myAvtar-description"> 
              My Avatar made by Dall-E 3
            </i>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/GyoukChu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://huggingface.co/ChuGyouk"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <img src={huggingfaceLogo} alt="Hugging Face" style={{ width: '24px', height: '24px' }} /> {/* SIZE CONTROL NEEDED */}
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gyouk-chu-7982112b4/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/chukyouwook"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
