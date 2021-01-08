import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import API from "../utils/API"

// import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";

// import Placeholder from "../images/placeholder.png";

import Wrapper from "../components/Wrapper";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

const homeDetails = () => {
    // Not sure if this is where this useeffect is needed.
    // const [offer, setOffer] = useState("")
    
    // const { id } = useParams()
    // useEffect(() => {
    //     API.getBook(id)
    //     .then(res => setBook(res.data))
    //     .catch(err => console.log(err));
    // }, [])
    
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
                                        Address: {}
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
                            <Button href="/addfeedback">ADD FEEDBACK</Button>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Button href="/viewoffer">VIEW OFFERS</Button>
                        </div>
                        <div>
                            <Button href="/viewfeedback">VIEW FEEDBACK</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
};

export default homeDetails;


