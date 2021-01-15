import React from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
// import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Placeholder from "../images/placeholder.png";
// import Navbar from "../components/Navbar";

const MainPage = () => {
  return (
    <div class="indexContainer">
      <Container>
        <Row>
          <div className="searchbar">
          <Col>
            <h3><div id="agentName">'div id="agentName"'</div></h3>
            {/* also implement dynamic agents name here */}
          </Col>
          </div>
        </Row>

        <Row>
        <div className="searchbar">
          <Col>
            <input className="rounded" placeholder="Search address"></input>
            <p></p>
          </Col>
          <Button type="button" className="btn addHome btn-primary" href="/addHome">Add home</Button>
          </div>
          
            
          
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
