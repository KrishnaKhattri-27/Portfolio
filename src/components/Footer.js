import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Krishna Khattri</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} KKK</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/KrishnaKhattri-27"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/krishna-khattri/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                 
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://codeforces.com/profile/khattri_krishna"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                 
                >
                  <SiCodeforces  />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Krishna_K271"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                 
                >
<FaTwitter />
                </a>
              </li>
       
    
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
