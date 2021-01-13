import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react"
import Wrapper from "../../components/Wrapper";
import axios from "axios";

const viewOffer = () => {
    const [agentData, setAgentData] = useState({})
    useEffect(() => {
        axios.get("/api/getHome/3")
            .then((res) => {
                setAgentData(res.data.result)
                console.log(res.data.result)
            })
    }, [])
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Col>name {agentData && agentData.Offers && agentData.Offers[0].name} </Col>
                    <Col>Showing Time</Col>
                    <Col>Showing Date</Col>
                </Row>

                <Row>
                    <Col>Family?</Col>
                    <Col>Interest Level</Col>
                    <Col>Repeat?</Col>
                </Row>

                <Row className="text-center justify-content-center">Additional Notes</Row>
                <br />
                <Row>
                    <ol>
                        {/* populated dynamically */}
                    </ol>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default viewOffer;