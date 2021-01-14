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
                <Row> 
                    <Col>
                    <p>
                        Price
                    </p>
                    <p>
                        Offers
                    </p>
                    <p>
                        Viewings
                   </p>
                      </Col>

                    
                    <Col>
                    <p>
                        Sellers
                    </p>
                    <p>
                        Sellers
                    </p>
                    <p>
                        Sellers
                    </p>
                    </Col>
                </Row>

                <div className="feedback">
                {/* Row for Feedback */}
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


