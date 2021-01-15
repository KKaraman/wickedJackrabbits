import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ".././signup.css";


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
                <div className="signupWrap">
                    <Row>
                    <div className="signupInnerWrap">
                    <Col>

                    <h1>House Details</h1>

                            <input onChange={(e) => { setAddress(e.target.value) }} className="txtarea" id="enterAddress" placeholder="Address" type="address"></input>
                        <input onChange={(e) => { setPrice(e.target.value) }} className="txtarea" id="enterPrice" placeholder="Asking Price" type="price"></input>

                        <p></p>

                    <h5>Create Homeowner's Login Info</h5>
 
                        <input onChange={(e) => { setSellerName(e.target.value) }} placeholder="Name" class="txtarea" id="sellerName" type="sellersName"></input>
                        <input onChange={(e) => { setSellerNumber(e.target.value) }} placeholder="Phone" class="txtarea" id="sellerNum" type="phoneNumber"></input>
                        <input onChange={(e) => { setSellerEmail(e.target.value) }}  placeholder="Email" class="txtarea" type="sellersEmail" ></input>

                        <p></p>

                    <h5>Create Homeowner's Password</h5>

                        <input onChange={(e) => { setSellerPassword(e.target.value) }} placeholder="Password" class="txtarea" type="sellersEmail" ></input>
                        
                        <p></p>

                        <Button onClick={submitHome} className="text-center justify-content-center" href="/">Add Home</Button>
                         <p></p>
                         <h5>Add Photo</h5>
                         <Button>Add Image</Button>
                         <Image>
                        {/* Upload image area */}
                         </Image>
                         <p></p>
                         <Button  href="/agentlogin" id="login" type="submit">Back to Main</Button>
                         <p></p>


                </Col>
                </div>
                </Row>
                </div>
            </Container>
        
    )
}

export default addHome;