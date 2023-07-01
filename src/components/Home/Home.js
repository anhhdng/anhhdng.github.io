import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/img/kiki.gif";
import Type1 from "./Type1";
import Techstack from "../About/Techstack";
import Aboutcard from "../About/AboutCard";
import aboutMe from "../../Assets/img/kiki-flying.gif";
import Toolstack from "../About/Toolstack";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type1/>  
              </div>
    
              <h1 className="heading-name">
                  <br/>
                  I'm
                  <strong className="main-name"> Anh Duong</strong>
                  ☘️
                </h1>
            </Col> 

            <Col md={4} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="home-img"
                style={{ maxHeight: "450px" , paddingTop: 80}}
              />
            </Col>
          </Row>

        </Container>
      </Container>
      <Container fluid className="about-section">

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About Me
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={aboutMe} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional Skillset
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Tools I use
        </h1>
        <Toolstack />


      </Container>
    </Container>
    </section>
  );
}

export default Home;
