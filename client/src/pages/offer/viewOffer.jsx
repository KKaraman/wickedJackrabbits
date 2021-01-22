import { Row, Col, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import {useParams} from "react-router";
import {Link} from "react-router-dom"
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./offer.css";

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
                <h3 className="pageTitle">Offers</h3>
            </div>
            <div className="viewOffers">


            <Row>
                    <div className="offerBitsWrap">
                    <div className="offerBits">
                        <Link href="/selectedoffer/:id">
                            <Col>Name of the Buyer</Col>
                        </Link>
                        </div> 

                        <div className="offerBits">
                        <Col>Date of Offer</Col>
                        </div>

                        <div className="offerBits">
                        <Col>Offer Amount</Col>
                        </div>

                        <div className="offerBits">
                        <Col>
                        Earliest Closing</Col>
                        </div>
                    </div>
                    </Row>

            {agentData.Offers && agentData.Offers.length !== 0 && agentData.Offers.map(item => {
                return (

                    <Row>
                        <div className="offerBitsWrap">
                        <div className="offerBits">
                        <Link href="/selectedoffer/:id">
                            <Col> {item.name}</Col>
                        </Link>
                        </div>
                        <div className="offerBits">
                        <Col>
                         {item.dateOffered}</Col>
                        </div>
                        <div className="offerBits">
                        <Col>
                         {item.amount}</Col>
                        </div>
                        <div className="offerBits">
                        <Col>
                         {item.closingDate}</Col>
                        </div>
                        </div>
                    </Row>

                )
                
            })}

<Button  href="/homedetails/1" id="login" type="submit">BACK </Button> 

            </div>

        </Container>
    )
}

export default viewOffer;