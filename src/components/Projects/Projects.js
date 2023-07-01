import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong>Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Alexa Skill for GlucoCheck"
              description="About
              Alexa skill to retrieve requested glucose value from the GlucoCheck Database via REST API"
              ghLink="https://github.com/anhhdng/Alexa-Skill-for-GlucoCheck"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="GlucoCheck: Non-invasive blood glucose monitoring system"
              description="Research Project: Developing a non-invasive process 
              that can identify the exact value of blood glucose with 90% accuracy without taking a blood sample."
              demoLink="http://iotas.kennesaw.edu/?page_id=1483"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Alexa Controlling LED Light on Raspberry Pi"
              description="Using Python to have Alexa controlling LED switch status on Raspberry Pi via voice."
              ghLink="https://github.com/anhhdng/Alexa-Controlling-LED-on-Raspberry-Pi"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="The College Experience: CSE 1321 Game Project"
              description="Developed a basic game script using Java as a class project for Honors CSE 1321 course at KSU."
              ghLink="https://github.com/anhhdng/CSE1321-Project2"

            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
