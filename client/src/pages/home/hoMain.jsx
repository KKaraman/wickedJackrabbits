import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
// import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";
import Placeholder from "../../images/placeholder.png";
import "./homeOwner.css";

const hoMain = () => {
    // Do a get call to the /getHomes:id with the agent id. 
    return (


            <div  id="wrapperId">
            <Container>
                {/* first row: Address */}
                <div className="cardWrap">
                <Card>
                <Row>
                    <Col>
                            <Image className="card-img-top" src={Placeholder} fluid />
                                {/* INSERT DYNAMIC IMAGE OF HOME THAT WAS CLICKED ON HERE */}
                              <div>
                                    <p className="text-center">
                                        Address: "dynamic address put here"
                                    </p>
                             </div>
                    </Col>
                </Row>
                {/* second row: Details */}
                <div id="details">



                <div className="box">
                <p>
                    <div className="innerPart">
                    Home Listed
                    </div>
                    <p></p>
                    <div className="innerGenPart">
                        <p>Placeholder</p>
                    </div>
                </p>
                </div>

                <div className="box">
                <p>
                    <div className="innerPart">
                    Price
                    </div>
                    <p></p>
                    <div className="innerGenPart">
                        <p>Placeholder</p>
                    </div>
                </p>
                </div>

                <div className="box">
                <p>
                    <div className="innerPart">
                    Total Showings
                    </div>
                    <p></p>
                    <div className="innerGenPart">
                        <p>Placeholder</p>
                    </div>
                </p>
                </div>

                <div className="box">
                <p>
                    <div className="innerPart">
                    Average Rating 
                    </div>
                    <p></p>
                    <div className="innerGenPart">
                        <p>Placeholder</p>
                    </div>
                </p>
                </div>

                <div className="box">
                <p>
                    <div className="innerPart">
                    Number of Offers
                    </div>
                    <p></p>
                    <div className="innerGenPart">
                        <p>Placeholder</p>
                    </div>
                </p>
                </div>

                <div className="box">
                <p>
                    <div className="innerPart">
                    Average Offer Price
                    </div>
                    <p></p>
                    <div className="innerGenPart">
                        <p>Placeholder</p>
                    </div>
                </p>
                </div>


                </div>

                <div className="feedback">
                {/* Row for Feedback */}
                <Row>

                    <Col>

                
                            <Button href="/viewfeedback">VIEW FEEDBACK</Button>


                        </Col>
                        <Col>

                            <Button href="/viewoffer/:id">VIEW OFFERS</Button>

                        </Col>
                    </Row>

                </div>
                </Card>
                </div>
            </Container>
            </div>
    )
};

export default hoMain;


