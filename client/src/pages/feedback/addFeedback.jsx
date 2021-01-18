import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././signup.css";
import axios from "axios";
import {useParams} from "react-router";

const addFeedback = () => {
    const [dateShown, setDateShown] = useState("")
    const [name, setName] = useState("")
    const [local, setLocal] = useState("")
    const [family, setFamily] = useState("")
    const [timeline, setTimeline] = useState("")
    const [liked, setLiked] = useState("")
    const [notLike, setNotLike] = useState("")
    const [estimatedInterest, setEstimatedInterest] = useState("")
    const {id} = useParams();
    const submitFeedback = () => {
        console.log("home ID", id)
        
        const mydata = { dateShown: dateShown,
            name: name,
            local: local,
            family: family,
            timeline: timeline,
            liked: liked,
            notLike: notLike,
            estimatedInterest: estimatedInterest}
            console.log(mydata)
        axios.post("/api/createFeedback/" + id, mydata )
    }

    return (

        <Container>
            <div className="signupWrap">
                <Row>
                    <div className="signupInnerWrap">
                        <Col>
                            <h1>Feedback</h1>

                            <h5>What is your name?</h5>
                            <input onChange={(e) => { setName(e.target.value) }} type="text" className="txtarea" placeholder="First and Last" />

                            <h5>When did you see the house?</h5>
                            <input onChange={(e) => { setDateShown(e.target.value) }} type="date" className="txtarea" placeholder="Date" />

                            <h5>Are you currently living in state or out of state?</h5>
                            <select onChange={(e) => { setLocal(e.target.value) }} className="txtarea" type="text" placeholder="Local">
                                <option className="txtarea" value="In State">In State</option>
                                <option className="txtarea" value="Out of State">Out of State</option>
                            </select>

                            <h5>How many people live in your household?</h5>
                            <input onChange={(e) => { setFamily(e.target.value) }} className="txtarea" type="offer" placeholder="Family?">

                            </input>

                            <h5>When is the earliest you could move in to the house?</h5>
                            <input onChange={(e) => { setTimeline(e.target.value) }} className="txtarea" type="date" placeholder="Timeline" />

                            <h5>What was something you liked about the house?</h5>
                            <h6>Limit: 25 Characters</h6>
                            <input onChange={(e) => { setLiked(e.target.value) }} className="txtarea" type="text" maxlength="25" placeholder="Liked" />

                            <h5>What was something you didn't like about the house?</h5>
                            <h6>Limit: 25 Characters</h6>
                            <input onChange={(e) => { setNotLike(e.target.value) }} className="txtarea" type="text" maxlength="25" placeholder="Disliked" />

                            <h5>How would you rate this house on a scale of 1 to 10?</h5>
                            <select onChange={(e) => { setEstimatedInterest(e.target.value) }} className="txtarea" type="text" placeholder="Estimated Interest">
                                <option className="txtarea" value="one">1</option>
                                <option className="txtarea" value="two">2</option>
                                <option className="txtarea" value="three">3</option>
                                <option className="txtarea" value="four">4</option>
                                <option className="txtarea" value="five +">5</option>
                                <option className="txtarea" value="six">6</option>
                                <option className="txtarea" value="seven">7</option>
                                <option className="txtarea" value="eight">8</option>
                                <option className="txtarea" value="nine">9</option>
                                <option className="txtarea" value="ten +">10</option>
                            </select>

                            <p></p>
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

