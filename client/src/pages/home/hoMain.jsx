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

            <div  id="wrapperId">
            <Container>
                {/* first row: Address */}
                <Row>
                    <Col>
                        <Card>
                            <Image>
                                {/* INSERT DYNAMIC IMAGE OF HOME THAT WAS CLICKED ON HERE */}
                            </Image>
                              <div>
                                    <p className="text-center">
                                        Address: "dynamic address put here"
                                    </p>
                             </div>
                       </Card>
                    </Col>
                </Row>
                {/* second row: Details */}
                <div id="details">

                <div className="box">
                <p>Price</p>
                <p id="price">Test</p>
                </div>

                <div className="box">
                <p>Offers</p>
                <p id="offers">Test</p>
                </div>

                <div className="box">
                <p>Viewings</p>
                <p id="viewings">Test</p> 
                </div>

                <div className="box">
                <p>Sellers</p>
                <p id="sellers">Test</p>
                </div>
                </div>

                <div className="feedback">
                {/* Row for Feedback */}
                <Row>

                    <Col>

                
                            <Button href="/viewfeedback">VIEW FEEDBACK</Button>


                        </Col>
                        <Col>

                            <Button href="/viewoffer">VIEW OFFERS</Button>

                        </Col>
                    </Row>

                </div>
            </Container>
            </div>

        
    )
};

export default hoMain;


