// import React from "react";
import { Jumbotron, Container, Row, Col, Card } from "react-bootstrap";

function Project(props) {

    return (
    <Container fluid>
      <Jumbotron>
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <Card style={{ width: "18rem", height: "400px" }}>
            <Card.Img variant="top" src= { props.screenshot } />
              <Card.Body>
                <Card.Text>
                  <ul>
                    <li>
                      <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                      <strong>Deployment:</strong> {props.deployment}
                    </li>
                    <li>
                      <strong>Repository:</strong> {props.repository}
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
};

export default Project;
