import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ".././signup.css";


const addHome = () => {
    const [address, setAddress] = useState("")
    const [price, setPrice] = useState("")
    const [sellerFirstName, setSellerFirstName] = useState("")
    const [sellerLastName, setSellerLastName] = useState("")
    const [sellerEmail, setSellerEmail] = useState("")
    const [sellerPassword, setSellerPassword] = useState("")
    const submitHome = () => {
        axios.post("/api/createHome", {
            firstName: sellerFirstName,
            lastName: sellerLastName,
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

                    <div className="InnerWrap">

                    <h1>House Details</h1>

                            <input onChange={(e) => { setAddress(e.target.value) }} className="txtarea" id="enterAddress" placeholder="Address" type="address"></input>
                        <input onChange={(e) => { setPrice(e.target.value) }} className="txtarea" id="enterPrice" placeholder="Asking Price" type="price"></input>

                        <p></p>

                    <h5>Create Homeowner's Login Info</h5>
 
                        <input onChange={(e) => { setSellerFirstName(e.target.value) }} placeholder="First Name" class="txtarea" id="sellerName" type="First Name"></input>
                        <input onChange={(e) => { setSellerLastName(e.target.value) }} placeholder="Last Name" class="txtarea" id="sellerNum" type="Last Name"></input>
                        <input onChange={(e) => { setSellerEmail(e.target.value) }}  placeholder="Email" class="txtarea" type="sellersEmail" ></input>

                        <p></p>

                    <h5>Create Homeowner's Password</h5>

                        <input onChange={(e) => { setSellerPassword(e.target.value) }} placeholder="Password" class="txtarea" type="sellersEmail" ></input>
                        
                        <p></p>

                        <Button onClick={submitHome} className="text-center justify-content-center" href="/agentmain">Add Home</Button>
                         <p></p>
                         <div id="backtomain">
                         <Button  href="/agentmain" id="login" type="submit">Back to Main</Button>
                         </div>
                         <h5>Add Photo</h5>
                         <p></p>
                         <button>Add Image</button>
                         <Image>
                        {/* Upload image area */}
                         </Image>

                         <p></p>
                </div>
                </Col>
                </div>
                </Row>
                </div>
            </Container>
        
    )
}

export default addHome;