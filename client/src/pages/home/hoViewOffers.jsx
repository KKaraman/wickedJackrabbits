import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";


// import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";

// import Placeholder from "../images/placeholder.png";


import "./homeOwner.css";

const hoViewOffers = () => {
    return (
        
            <Container>
                <div id="outerWrap">
                <Row>
                    <Col>
                        <Card>
                            <Image>
                                {/* INSERT DYNAMIC IMAGE OF HOME THAT WAS CLICKED ON HERE */}
                            </Image>
                            <Col>
                                <div className="singleWrap">
                                    <p className="text-center">
                                        Address: "dynamic address put here"
                                    </p>
                                </div>
                            </Col>
              <div className="homeownermain">
                            <Col>
                                <Row>
                                    <Col id="priceCol">
                                    <div className="singleWrap">
                                        <p>
                                            Price
                                            <p id="price">$$$$.$$</p>
                                        </p>
                                        
                                    </div>
                                    </Col>
                                    <Col id="offersCol">
                                    <div className="singleWrap">
                                        <p>
                                            Offers
                                            <p id="offer">$$$$.$$</p>
                                        </p>
                                    </div>
                                    </Col>
                                    <Col id="nameCol">
                                    <div className="singleWrap">
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
                            <Button type="button" className="btn btn-primary" href="/createOffer">CREATE OFFER</Button>
                        </div>
                        <div>
                            <Button>ADD FEEDBACK</Button>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Button type="button" className="btn btn-primary" href="./hoViewOffers.jsx">VIEW OFFERS</Button>
                        </div>
                        <div>
                            <Button>VIEW FEEDBACK</Button>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        
    )
};

export default hoViewOffers;