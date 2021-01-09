import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./feedback/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "../components/Wrapper";

const addHome = () => {
    return (
        <Wrapper>
            <Container>
                <Col>
                    <Image> 
                        {/* Upload image area */}
                    </Image>
                </Col>

                <Col>
                    <h2>New Home Details</h2>
                </Col>

                <Row>
                    <Col>
                        <input className="md-6" placeholder="Enter Address" type="address"></input>
                    </Col>
                    <Row>
                        <input className="md-6" placeholder="Enter Price" type="price"></input>
                    </Row>
                </Row>
            
                <Row>
                    <Col>
                        <input placeholder="Sellers Name" type="sellersName"></input>
                    </Col>
                    <Row>
                        <input placeholder="Seller Phone #" type="phoneNumber"></input>
                    </Row>
                </Row>

                <br></br>

                <Col>
                    <Row>
                        <input className="col-md-4 text-center" placeholder="Sellers Email" type="sellersEmail" ></input>
                    </Row>
                </Col>

                <Col>
                    <Row className="justify-content-center">
                        <Button className="text-center justify-content-center" href="/">Add Home</Button>
                    </Row>
                </Col>
            </Container>        
        </Wrapper>
    )
}

export default addHome;