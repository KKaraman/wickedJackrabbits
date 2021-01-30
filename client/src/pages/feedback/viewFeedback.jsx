import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const viewFeedback = () => {
    const [agentData, setAgentData] = useState({})
    const { id } = useParams();
    useEffect(() => {
        axios.get("/api/getHome/" + id)
            .then((res) => {
                setAgentData(res.data.result)
                console.log(res.data.result)
                console.log("Feedback ==", res.data.result.Feedbacks)
            })
    }, [])

    //Need to use map function in here to get all offers etc. 
    return (

        <Container>
            <div>
                <h3 className="pageTitle">Feedback</h3>
            </div>
            {agentData.Feedbacks && agentData.Feedbacks.length !== 0 && agentData.Feedbacks.map(item => {
                return (
                    <Row>
                        <div id="vfbRowWrap">
                        <Col> {item.name}</Col>
                        <Col> {item.dateShown}</Col>
                        <Col> {item.family}</Col>
                        <Col> {item.liked}</Col>
                        <Col> {item.notLike}</Col>
                        <Col> {item.estimatedInterest}</Col>
                        </div>
                    </Row>
                )
            })}
        </Container>
    )


};

export default viewFeedback;