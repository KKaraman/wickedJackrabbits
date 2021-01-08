import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";


// import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";

// import Placeholder from "../images/placeholder.png";

import Wrapper from "../components/Wrapper";

const homeDetails = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Image>
                                {/* INSERT DYNAMIC IMAGE OF HOME THAT WAS CLICKED ON HERE */}
                            </Image>
                            <Col>
                                <div>
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
                    <Col>
                        <div>
                            <Button type="button" className="btn btn-primary" href="/createOffer">CREATE OFFER</Button>
                        </div>
                        <div>
                            <Button>ADD FEEDBACK</Button>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Button>VIEW OFFERS</Button>
                        </div>
                        <div>
                            <Button>VIEW FEEDBACK</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
};

export default homeDetails;


