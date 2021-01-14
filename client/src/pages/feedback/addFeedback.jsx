import React, { useState } from "react";
import { Container, Row, Col, Button, Form, } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "../../components/Wrapper";
import "./feedback.css";
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
            <Wrapper>
                <Container>
                <Row>
                   <Col sm={6}>
                   <input onChange={(e) => {setDateShown(e.target.value)}} type="text" placeholder="Date Shown"/>
                   <input onChange={(e) => {setName(e.target.value)}} type="text" placeholder="name"/>
                   <input onChange={(e) => {setLocal(e.target.value)}} type="text" placeholder="Local"/>
                   <input onChange={(e) => {setFamily(e.target.value)}} type="text" placeholder="Family?"/>
                   <input onChange={(e) => {setTimeline(e.target.value)}} type="text" placeholder="Timeline"/>
                   <input onChange={(e) => {setLiked(e.target.value)}} type="text" placeholder="Liked?"/>
                   <input onChange={(e) => {setNotLike(e.target.value)}} type="text" placeholder="Not Liked?"/>
                   <input onChange={(e) => {setEstimatedInterest(e.target.value)}} type="text" placeholder="Estimated Interest"/>
                   </Col>
                
                    <Col>
                        <Button onClick={submitFeedback} href="/" type="submit">Submit offer</Button>
                    </Col>
                </Row>

                </Container>
            </Wrapper>
            
        )
    
    

};

export default addFeedback;

   