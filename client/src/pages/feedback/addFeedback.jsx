import React, { useState } from "react";
import { Container, Row, Col, Button, Form, } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././signup.css";
import axios from "axios";

const addFeedback = () => {
    const [dateShown, setDateShown] = useState("")
    const [name, setName] = useState("")
    const [local, setLocal] = useState("")
    const [family, setFamily] = useState("")
    const [timeline, setTimeline] = useState("")
    const [liked, setLiked] = useState("")
    const [notLike, setNotLike] = useState("")
    const [estimatedInterest, setEstimatedInterest] = useState("")
    const submitFeedback = () => {
        axios.post("/api/createFeedback", {
            dateShown: dateShown,
            name: name,
            local: local,
            family: family,
            timeline: timeline,
            liked: liked,
            notLike: notLike,
            estimatedInterest: estimatedInterest,
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
                   <h1>Create an Offer</h1>
                                      
                   <h5>What is your name?</h5>
                   <input onChange={(e) => {setName(e.target.value)}} type="text" className="txtarea" placeholder="First and Last"/>
                    
                   <h5>When did you see the house?</h5>
                   <input onChange={(e) => {setDateShown(e.target.value)}} type="date" className="txtarea" placeholder="Date"/>
                   
                   <h5>Are you local?</h5>
                   <input onChange={(e) => {setLocal(e.target.value)}} className="txtarea" type="text" placeholder="Local"/>
                   
                   <h5>How many people would live in your household?</h5>
                   <input onChange={(e) => {setFamily(e.target.value)}} className="txtarea" type="text" placeholder="Family?"/>
                   
                   <h5></h5>
                   <input onChange={(e) => {setTimeline(e.target.value)}} className="txtarea" type="text" placeholder="Timeline"/>
                   
                   <h5></h5>
                   <input onChange={(e) => {setLiked(e.target.value)}} className="txtarea" type="text" placeholder="Liked?"/>
                   
                   <h5></h5>
                   <input onChange={(e) => {setNotLike(e.target.value)}} className="txtarea" type="text" placeholder="Not Liked?"/>

                   <input onChange={(e) => {setEstimatedInterest(e.target.value)}} className="txtarea" type="text" placeholder="Estimated Interest"/>
                
                    <Col>
                        <Button onClick={submitFeedback} href="/agentmain" type="submit">Submit Feedback</Button>
                    </Col>
                    </Col>
                    </div>
                </Row>
                </div>

                </Container>
            
            
        )
    
    

};

export default addFeedback;

   