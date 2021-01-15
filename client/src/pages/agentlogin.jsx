import React, { useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import axios from "axios";
import "./signup.css";

const AgentLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitAgent = () => {
    axios.post("/api/login", {
      email,
      password
    }).then((res) => {
      console.log(res)
    })
  }
  // Map over this.state.projects and render a project component for each one
  return (
    <Container>
      <div className="signupWrap">
      <Row>
    <div className="signupInnerWrap">
      <Col>
    <h1>Agent Login</h1>

      <input onChange={(e) => { setEmail(e.target.value) }} className="txtarea" type="text" placeholder="Email*"></input>
      <p></p>
      <input onChange={(e) => { setPassword(e.target.value) }} className="txtarea" type="text" placeholder="Password*"></input>

      <p></p>

        <Button onClick={submitAgent} className="agentLogin btn" >Log In</Button>
        <p></p>
        <h5>Not an Agent?</h5>                         
        
        <Button  href="/" id="login" type="submit">Sign up </Button> 
        <Button  href="/sellerlogin" id="login" type="submit">Log In as a Homeowner</Button>

 

    </Col>
    </div>
    </Row>
    </div>
    </Container>
    );

}

export default AgentLogin;