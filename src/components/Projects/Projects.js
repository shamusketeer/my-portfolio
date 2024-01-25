import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mealfinder from "../../Assets/Projects/mealfinder.png";
import cartapp from "../../Assets/Projects/cartapp.png";
import shahplayer from "../../Assets/Projects/shahplayer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cartapp}
              isBlog={false}
              title="Cart-App"
              description="Develop the react ecommerce Web application to utilize dummy API to get the data and show it into the web application. React web application for add, remove, and update the product
              into cart and add product into the web application."
              ghLink="https://github.com/shamusketeer/react-cart-project"
              demoLink="https://64d229d62821515bbcf8407d--eclectic-fudge-a79e96.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shahplayer}
              isBlog={false}
              title="Shah Player"
              description="Dvelop the music player clone static website to enhance the fundamental knowledge of HTML, CSS, and JavaScript.I used Core HTML And CSS knowledge to create this project In music player website add and remove song from playlist."
              ghLink="https://github.com/shamusketeer/musicplayer"
              demoLink="https://ehgp2s.csb.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mealfinder}
              isBlog={false}
              title="Meal Finder"
              description="Develop a web application for exploring and searching meal recipes, providing users with a wide range of culinary options Utilized the MealDB API to retrieve and display an extensive database of meal recipes with detailed information."
              ghLink="https://github.com/shamusketeer/mealapp.github.io"
              demoLink="https://shamusketeer.github.io/mealapp.github.io/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
