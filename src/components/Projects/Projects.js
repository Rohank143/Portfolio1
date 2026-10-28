import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few real projects I've built and contributed to recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Spring Boot & Kafka Microservices"
              description="Event-driven distributed microservices architecture built with Spring Boot and Apache Kafka. Implemented asynchronous topic-based message exchange, fault-tolerant consumers, and automated CI/CD pipeline integration with Jenkins."
              ghLink="https://github.com/Rohank143/springboot-kafka-microservices-main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Matching Engine Microservices"
              description="High-throughput financial exchange order matching engine. Supports FIX protocol sessions, order book management, risk validations, circuit breaker monitoring, and real-time event streaming with Redis and Kafka."
              ghLink="https://github.com/Rohank143"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Smart Contact Manager"
              description="Full-stack web application designed for secure contact and user profile management. Developed RESTful backend APIs, role-based access control, and persistence layers using Spring Boot and MySQL."
              ghLink="https://github.com/Rohank143/Smart_Contact_Manager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="LMAX Trading & Portfolio App"
              description="React.js-based trading and portfolio management application. Features real-time market data streaming, interactive dashboards, and full CRUD operations across financial instrument modules."
              ghLink="https://github.com/Rohank143/Lmax_React_Js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Java FIX Tester Automated Suite"
              description="Automated testing tool designed for exchange matching engine functional validation. Simulates high-frequency order flows, validates FIX protocol specifications, and verifies lifecycle transitions."
              ghLink="https://github.com/Rohank143/Java_FIX_Tester_Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Bank Management System"
              description="Core Java banking application providing complete account lifecycle management, transaction processing, balance tracking, and secure database interactions with MySQL and JDBC."
              ghLink="https://github.com/Rohank143/Bank-Management-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
