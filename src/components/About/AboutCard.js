import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I'm Anh. I'm currently a junior majoring in Computer Science at Kennesaw State University.
            I've been working as an undergraduate research assistant for the last two years focusing on
            developing a non-invasive blood glucose monitoring device. I expect to get my bachelor's degree 
            in December 2024 and Master of Science in Software Engineering in December 2025.
            <br />
            <br />
            In my free time, I enjoy listening to music, drawing/painting, cooking, and being in the garden!
            <br />
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
