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
      
      <Container>
        <Row>
          <Col size="md-3" className="text-center" >
            <h3>"Agents Name"</h3>
            {/* also implement dynamic agents name here */}
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
          <input className="rounded" placeholder="Search address"></input>
          </Col>
          <Col>
          <Button type="button" className="btn btn-primary" href="/addhome">Add home</Button>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col className="text-center col-sm-6">
            <Card>
            
              <Image  className="card-img-top"  src={ Placeholder } fluid  />
              {/* implement agent updated photos */}
            
              <Col>
              <div >
                <p className="text-center">
                 Address: "dynamic address put here"
                </p>
              </div>
              </Col>
              
              <Col size="md-2">
              <Row>
              <div>
                <p className="">
                  price
                </p>
              </div>
              
              <Col size="md-2">
              <div>
                <p className="text-center" >
                  offers
                </p>
              </div>
              <Col size="md-2">
              <div>
                <p className="text-right">
                  Sellers name
                </p>
              </div>
              </Col>
              </Col>
              </Row>
              </Col>

              
            </Card>
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
