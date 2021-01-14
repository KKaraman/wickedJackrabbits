import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import {useParams} from "react-router";
import axios from "axios";

const viewOffer = () => {
    const [agentData, setAgentData] = useState({})
    const {id} = useParams();
    useEffect(() => {
        axios.get("/api/getHome/" + id)
            .then((res) => {
                setAgentData(res.data.result)
                console.log(res.data.result)
                console.log("Offers ==", res.data.result.Offers)
            })
    }, [])

    //Need to use map function in here to get all offers etc. 
    return (
        <Container>
            <div>
                <h3>Offers</h3>
            </div>
            {agentData.Offers && agentData.Offers.length !== 0 && agentData.Offers.map(item => {
                return (
                    <Row>
                        <Col>{item.id}. {item.name}</Col>
                        <Col>{item.id}. {item.dateOffered}</Col>
                        <Col>{item.id}. {item.amount}</Col>
                        <Col>{item.id}. {item.closingDate}</Col>
                    </Row>
                )
            })}
        </Container>
    )
}

export default viewOffer;