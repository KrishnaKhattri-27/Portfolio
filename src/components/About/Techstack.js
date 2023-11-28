import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiMysql,
  SiGithub,
  SiSocketdotio,
  SiTailwindcss,
  SiBootstrap 
} from "react-icons/si";
import { SiFirebase, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus style={{color:"#cd5ff8"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss style={{color:"#cd5ff8"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{color:"#cd5ff8"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{color:"#cd5ff8"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{color:"#cd5ff8"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{color:"#cd5ff8"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{color:"#cd5ff8"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub style={{color:"#cd5ff8"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase style={{color:"#cd5ff8"}}/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql style={{color:"#cd5ff8"}}/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava style={{color:"#cd5ff8"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs style={{color:"#cd5ff8"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSocketdotio style={{color:"#cd5ff8"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiBootstrap style={{color:"#cd5ff8"}}/>

      </Col>
    </Row>
  );
}

export default Techstack;
