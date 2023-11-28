import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import carbon from "../../Assets/carbon.png";
import amazon from "../../Assets/amazon.png"
import form from "../../Assets/form.png"
import travel from "../../Assets/Travel.png"
import travel1 from "../../Assets/travel1.png"
import idaar from "../../Assets/idaar.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="E-Commerce"
              description=" I have created the front end of a fully functional e-commerce website. his project was an incredible learning experience, and I'm excited to showcase the key features I've implemented- Secure Login and Logout, Robust Product Management, Advanced Filtering Options, Smart Search Functionality and responsiveness."
              ghLink="https://github.com/KrishnaKhattri-27/Ecommerce-"
              demoLink="https://smartmart1-com.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carbon}
              isBlog={false}
              title="Carbon Footprint Calculator"
              description="Our project, conducted in collaboration with IEEE, centered on creating a website to calculate user-specific carbon emissions, awarded virtual badges accordingly, and visualized data in charts. Notably, users could compare their emissions with friends, fostering a sense of competition. Our success in this endeavor was affirmed by winning the associated hackathon."
              ghLink="https://github.com/KrishnaKhattri-27/Carbon-Footprint"
              demoLink="https://carbonfootprint-calculator-aspj.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={idaar}
              isBlog={false}
              title="IDAAR Cell LNMIIT (In-Progress)"
              description="I with my team is currently working on a college project. In this website I'll be developing the complete frontend part and would also code some backend. The website is mainly developed for faculty to maintain their paper work. There will be three level of authorization in the website."
              ghLink="https://github.com/KrishnaKhattri-27/idaar_cell_lnmiit"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel Agency Website"
              description="I have also made a Travel Agency Website using vanila JS. It uses various concepts of HTML, CSS, Javascript, and is loadad with animations."
              ghLink="https://github.com/KrishnaKhattri-27/Travel-agency-landing-page"
              demoLink="https://krishnakhattri-27.github.io/Travel-agency-landing-page/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={form}
              isBlog={false}
              title="Multi Step Form"
              description="I have created my first project on javascript without taking help from any source. The UI have taken from Frontend Mentor website task sections."
              ghLink="https://github.com/KrishnaKhattri-27/Multi-Step-Form"
              demoLink="https://multistep-form31.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel1}
              isBlog={false}
              title="Travel Landing Page"
              description="This was my first project on basic HTML/CSS.."
              ghLink="https://github.com/KrishnaKhattri-27/Travelling-Clone-Webpage"
              demoLink="https://khatritravelagency.netlify.app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
