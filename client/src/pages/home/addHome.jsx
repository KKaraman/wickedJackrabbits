import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./feedback/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "../components/Wrapper";
import axios from "axios";


const addHome = () => {
    const [address, setAddress] = useState("")
    const [price, setPrice] = useState("")
    const [sellerName, setSellerName] = useState("")
    const [sellerNumber, setSellerNumber] = useState("")
    const [sellerEmail, setSellerEmail] = useState("")
    const [sellerPassword, setSellerPassword] = useState("")
    const submitHome = () => {
        axios.post("/api/createHome", {
            firstName: sellerName,
            lastName: sellerNumber,
            email: sellerEmail,
            password: sellerPassword,
            AgentId: 1,
            address: address,
            listingPrice: price,
            dateListed: "10/12/20",
        }).then(() => {
            
        })
    }
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
                        <input onChange={(e) => { setAddress(e.target.value) }} className="md-6" placeholder="Enter Address" type="address"></input>
                    </Col>
                    <Row>
                        <input onChange={(e) => { setPrice(e.target.value) }} className="md-6" placeholder="Enter Price" type="price"></input>
                    </Row>
                </Row>
                <Row>
                    <Col>
                        <input onChange={(e) => { setSellerName(e.target.value) }} placeholder="Sellers Name" type="sellersName"></input>
                    </Col>
                    <Row>
                        <input onChange={(e) => { setSellerNumber(e.target.value) }} placeholder="Seller Phone #" type="phoneNumber"></input>
                    </Row>
                </Row>
                <br></br>
                <Col>
                    <Row>
                        <input onChange={(e) => { setSellerEmail(e.target.value) }} className="col-md-4 text-center" placeholder="Sellers Email" type="sellersEmail" ></input>
                    </Row>
                    <Row>
                        <input onChange={(e) => { setSellerPassword(e.target.value) }} className="col-md-4 text-center" placeholder="Sellers Password" type="sellersEmail" ></input>
                    </Row>
                </Col>
                <Col>
                    <Row className="justify-content-center">
                        <Button onClick={submitHome} className="text-center justify-content-center" href="/">Add Home</Button>
                    </Row>
                </Col>
            </Container>
        </Wrapper>
    )
}

export default addHome;