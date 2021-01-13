import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";


// import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";

// import Placeholder from "../images/placeholder.png";

import Wrapper from "../../components/Wrapper";
import "./homeOwner.css";

const hoMain = () => {
    // Do a get call to the /getHomes:id with the agent id. 
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
                            <div className="homeownermain">
                                <Col>
                                    <Row>
                                        <Col id="priceCol">
                                            <div>
                                                <p>
                                                    Listed Date
                                            <p id="homeListed">1/1/2021</p>
                                                </p>

                                            </div>
                                            <Col id="priceCol">
                                                <div>
                                                    <p>
                                                        Total Showings
                                            <p id="totalShowings">5</p>
                                                    </p>

                                                </div>
                                                <Col id="nameCol">
                                                    <div>
                                                        <p>
                                                            Sellers
                                            <p id="sellers">Johnsons</p>
                                                        </p>
                                                    </div>

                                                </Col>
                                            </Col>
                                        </Col>
                                        <Col id="offersCol">
                                            <div>
                                                <p>
                                                    Price
                                            <p id="price">$310,500.00</p>
                                                </p>
                                            </div>
                                            <Col id="offersCol">
                                                <div>
                                                    <p>
                                                        Upcoming Showings
                                            <p id="upcomingShowings">2</p>
                                                    </p>
                                                </div>
                                                <Col id="nameCol">
                                                    <div>
                                                        <p>
                                                            Total Offers
                                            <p id="offers">3</p>
                                                        </p>
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
                <div class="feedback">
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
        </Wrapper>
    )
};

export default hoMain;


