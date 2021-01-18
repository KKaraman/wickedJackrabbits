import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import stockImage from "../../images/stockhouse.jpg"
// import Placeholder from "../images/placeholder.png";
import "./homeOwner.css";

const hoMain = () => {
    const [homeOwnerData, setHomeOwnerData] = useState({});
    const [homeData, setHomeData] = useState({});
    const [offerData, setOfferData] = useState(0);
    const [feedbackData, setFeedbackData] = useState(0);
    const [maxOfferData, setMaxOfferData] = useState(0);
    const [homeOffersURLId, setHomeOffersURLId] = useState("")
    const [homeFeedbackURLId, setHomeFeedbackURLId] = useState("")
    useEffect(() => {
        axios.get("/api/user_data/")
        .then((res) => {
            setHomeOwnerData(res.data.result)
            console.log("searching for homeowner deets:", res.data.result)
            setHomeOffersURLId("/viewoffer/" + res.data.result.id)
            setHomeFeedbackURLId("/viewfeedback/" + res.data.result.id)
            axios.get("/api/getHome/" + res.data.result.id)
            .then((res) => {
                console.log("information", res.data.result)
                setHomeData(res.data.result)
                setOfferData(res.data.result.Offers.length)
                setFeedbackData(res.data.result.Feedbacks.length)
                setMaxOfferData(res.data.result.Offers)
            })
        })
    }, []);
    return (
            <div  id="wrapperId">
            <Container>
                {/* first row: Address */}
                <h3>{homeOwnerData.firstName}</h3>
                <Row>
                    <Col>
                        <Card>
                        <Image className="card-img-top" src={stockImage} fluid />
                               
                            
                              <div>
                                    <p className="text-center">
                                        {homeData.address}
                                    </p>
                             </div>
                       </Card>
                    </Col>
                </Row>
                {/* second row: Details */}
                <div id="details">



                <div className="box">
                <p>
                    <div className="innerPart">
                    Home Listed
                    </div>
                    <p></p>
                    <div className="innerGenPart">
                        <p>{homeData.dateListed}</p>
                    </div>
                </p>
                </div>

                <div className="box">
                <p>
                    <div className="innerPart">
                    Price
                    </div>
                    <p></p>
                    <div className="innerGenPart">
                        <p>${homeData.listingPrice}</p>
                    </div>
                </p>
                </div>

                <div className="box">
                <p>
                    <div className="innerPart">
                    Total Showings
                    </div>
                    <p></p>
                    <div className="innerGenPart">
                        <p>{feedbackData}</p>
                    </div>
                </p>
                </div>

                <div className="box">
                <p>
                    <div className="innerPart">
                    Average Rating 
                    </div>
                    <p></p>
                    <div className="innerGenPart">
                        <p>Placeholder</p>
                    </div>
                </p>
                </div>

                <div className="box">
                <p>
                    <div className="innerPart">
                    Number of Offers
                    </div>
                    <p></p>
                    <div className="innerGenPart">
                        <p>{offerData}</p>
                    </div>
                </p>
                </div>

                <div className="box">
                <p>
                    <div className="innerPart">
                        Max Offer Price
                    </div>
                    <p></p>
                    <div className="innerGenPart">
                        <p>Placeholder</p>
                    </div>
                </p>
                </div>


                </div>

                <div className="feedback">
                {/* Row for Feedback */}
                <Row>

                    <Col>

                
                            <Button href={homeFeedbackURLId}>VIEW FEEDBACK</Button>


                        </Col>
                        <Col>

                            <Button href={homeOffersURLId}>VIEW OFFERS</Button>

                        </Col>
                    </Row>

                </div>
            </Container>
            </div>
    )
};

export default hoMain;


