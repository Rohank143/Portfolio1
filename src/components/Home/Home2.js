import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              I am a passionate software engineer with strong expertise in architecting
              robust, scalable backend systems and distributed services.
              <br />
              <br />
              I am proficient in core languages and enterprise frameworks like
              <i>
                <b className="purple"> Java, Spring Boot, Microservices, and Python.</b>
              </i>
              <br />
              <br />
              My primary areas of interest include building
              <i>
                <b className="purple"> High-Throughput Matching Engines</b>,{" "}
                <b className="purple">Event-Driven Architectures with Apache Kafka</b>, and resilient{" "}
                <b className="purple">RESTful APIs</b>.
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for engineering production-grade systems using
              <b className="purple"> Java</b> and modern infrastructure like
              <i>
                <b className="purple"> Redis, SQL, Docker, and CI/CD pipelines</b>
              </i>
              , paired with modern frontends in
              <i>
                <b className="purple"> React.js</b>
              </i>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
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
                  href="https://github.com/Rohank143"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rohan-kakade-317377272/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rohan_kakade143/"
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
