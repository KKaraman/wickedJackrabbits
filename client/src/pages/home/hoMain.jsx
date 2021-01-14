import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";


// import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";

// import Placeholder from "../images/placeholder.png";

import Wrapper from "../../components/Wrapper";
import "./homeOwner.css";

const hoMain = () => {
    return (
        <Wrapper> 
            <div  id="wrapperId">
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
              <div className="homeownermain">
                            <Col>
                                <Row>
                                    <Col id="firstCol">
                                    <div>
                                    <h3>Listed Date</h3>
                                            <p id="homeListed">1/1/2021</p>
                                    </div>
                                    <Col>
                                    <div>
                                    <h3>Total Viewings</h3>
                                            <p id="totalShowings">5</p>
                                    </div>
                                    <Col>
                                    <div>
                                    <h3>Pending Viewings</h3>
                                            <p id="upcomingShowings">2</p>
                                    </div>
                                    </Col>
                                    </Col>
                                    </Col>

                                    <Col id="secondCol">
                                    <div>
                                    <h3>Price</h3>
                                            <p id="price">$310,500.00</p>
                                    </div>
                                    <Col>
                                    <div>
                                    <h3>Total Offers</h3> 
                                            <p id="offers">3</p>
                                    </div>
                                    <Col>

                                    <div>
                                        <h3>Sellers</h3>
                                            <p id="sellers">Johnsons</p>
                                    </div>
                                    </Col>
                                    </Col>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                </Row>
                            </Col>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <div className="feedback">
                <Row>
                    <Col>
                
                            <Button>ADD FEEDBACK</Button>

                    </Col>
                    <Col>

                            <Button>VIEW FEEDBACK</Button>

                    </Col>
                </Row>
                </div>
            </Container>
            </div>
        </Wrapper>
        
    )
};

export default hoMain;


