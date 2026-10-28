import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohan Kakade </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am a software developer specializing in <span className="purple">Java, Spring Boot, Microservices</span>, and event-driven architectures.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Distributed Systems & New Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source & Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Outdoor Sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build scalable systems that make a real difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rohan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
