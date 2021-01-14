import React from "react";

import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";


// import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import Placeholder from "../images/placeholder.png";

import Wrapper from "../components/Wrapper";
// import Navbar from "../components/Navbar";

const MainPage = () => {
  return (
    <Wrapper>
      
      <div class="indexContainer">
      <Container>
        <Row>
          <Col>
            <h3>"Agents Name"</h3>
            {/* also implement dynamic agents name here */}
          </Col>
        </Row>

        <Row>
          <Col>
          <input className="rounded" placeholder="Search address"></input>
          </Col>
          <Col>
          <Button type="button" className="btn btn-primary" href="/addHome">Add home</Button>
          </Col>
        {/* <Row>
          <Col size="md-12">
          <p>Here is a list</p>
                      <ul>
                        <li>List Item 1"</li>
                        <li>List Item 2"</li>
                        <li>List Item 3"</li>
                      </ul>
          </Col>
        </Row> */}
        </Row>
      </Container>
      </div>
    </Wrapper>
  );
};

export default MainPage;
