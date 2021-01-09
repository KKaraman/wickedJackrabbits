import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";


// import { Link, NavLink } from "react-router-dom";
import "../feedback/node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";

// import Placeholder from "../images/placeholder.png";

import Wrapper from "../../components/Wrapper";
import "./homeOwner.css";

const hoMain = () => {
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
                                            Price
                                            <p id="price">$$$$.$$</p>
                                        </p>
                                        
                                    </div>
                                    </Col>
                                    <Col id="offersCol">
                                    <div>
                                        <p>
                                            Offers
                                            <p id="offer">$$$$.$$</p>
                                        </p>
                                    </div>
                                    </Col>
                                    <Col id="nameCol">
                                    <div>
                                        <p>
                                            Sellers
                                            <p id="sellerName">Johnsons</p>
                                        </p>
                                    </div>
                                    </Col>
                                </Row>
                            </Col>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Button>ADD FEEDBACK</Button>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Button>VIEW FEEDBACK</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
};

export default hoMain;


