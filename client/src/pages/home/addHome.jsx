import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
            // AgentId: 1,
            address: address,
            listingPrice: price,
            dateListed: "10/12/20",
        }).then(() => {
        res.sendStatus(200)
        })
    }
    return (
       
            <Container>
                <Col>
                    <Image>
                        {/* Upload image area */}
                    </Image>
                </Col>
                
                    <h2>New Home Details</h2>
                
                <Row>
                    <Col>
                        <input onChange={(e) => { setAddress(e.target.value) }} className="md-6" id="enterAddress" placeholder="Enter Address" type="address"></input>
                        <input onChange={(e) => { setPrice(e.target.value) }} className="md-6" id="enterPrice" placeholder="Enter Price" type="price"></input>
                       <input onChange={(e) => { setSellerName(e.target.value) }} placeholder="Sellers Name" id="sellerName" type="sellersName"></input>
                        <input onChange={(e) => { setSellerNumber(e.target.value) }} placeholder="Seller Phone #" id="sellerNum" type="phoneNumber"></input>
                        <input onChange={(e) => { setSellerEmail(e.target.value) }} className="col-md-4 text-center" placeholder="Sellers Email" type="sellersEmail" ></input>
                        <input onChange={(e) => { setSellerPassword(e.target.value) }} className="col-md-4 text-center" placeholder="Sellers Password" type="sellersEmail" ></input>
                <Col>
                    <Row className="justify-content-center">
                        <Button onClick={submitHome} className="text-center justify-content-center" href="/agentmain">Add Home</Button>
                    </Row>
                </Col>
                </Col>
                </Row>

            </Container>
        
    )
}

export default addHome;