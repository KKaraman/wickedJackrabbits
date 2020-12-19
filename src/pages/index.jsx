import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";


// import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import Placeholder from "../images/placeholder.png";

import Wrapper from "../components/Wrapper";
// import Navbar from "../components/Navbar";

const MainPage = () => {
  return (
    <Wrapper>
      
      <Container>
        <Row>
          <Col size="md-3">
            <h3>About Me</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Image src={ Placeholder } fluid />
          </Col>
          <Col size="md-10">
            <p>
              This is our Project 3.  
            </p>

            <p>
              Wicked Jackrabbits are the coolest
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <p>Here is a list</p>
                      <ul>
                        <li>List Item 1"</li>
                        <li>List Item 2"</li>
                        <li>List Item 3"</li>
                      </ul>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default MainPage;
