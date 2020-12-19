import { Jumbotron, Container, Row, Col, Card, Button } from "react-bootstrap";

import GmailLogo from "../images/Gmail.png";


const PageOne = () => {
  return (
    <Container fluid>
      <Jumbotron>
        <h2 className="text-center">
         This is page one. 
        </h2>
        <br></br>
        <p></p>
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <Card style={{ width: "18rem", height: "450px" }}>
              <Card.Img variant="top" src= { GmailLogo } />
              <Card.Body>
                <Card.Title className="text-center">Find on Google</Card.Title>
                <Card.Text>
                  The easiest way to find things online is using google. <br></br>
                  <br></br>Please click the button below to search google me.
                </Card.Text>
                <Card.Body className="text-center">
                  <Button href="google.com">
                    Google
                  </Button>
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
};

export default PageOne;
