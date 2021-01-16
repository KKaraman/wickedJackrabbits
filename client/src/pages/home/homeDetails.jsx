import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Placeholder from "../../images/placeholder.png"

import {useParams} from "react-router";
import axios from "axios";


const homeDetails = () => {

  //Neeed to copy Nathans route for the user call so you can get the user name. 
  const [homeDetails, setHomeDetails] = useState({})
  const [offerLength, setOfferLength]= useState(0)
  const {id} = useParams();
  useEffect(() => {
    axios.get("/api/getHome/" + id)
      .then((res) => {
        setHomeDetails(res.data.result)
        console.log(res.data.result)
        setOfferLength(res.data.result.Offers.length)  
      })
  }, [])
  return (
    <Container>
      <Row className="justify-content-center">

        <Col>
          <Card>
            <Image className="card-img-top" src={Placeholder} fluid />


            
            <Col>
              <div >
                <p>
                  Address: {homeDetails.address}
                          </p>
              </div>
                      Listing Price : $ {homeDetails.listingPrice}

                      </Col>

            <Col>
              <Row>


                <Col>
                  <div>
                    <p>
                      Offers: {offerLength}
                              </p>
                  </div>
                  <Col>
                    <div>
                      <p>
                        Sellers name:
                                </p>

                    </div>
                  </Col>

                </Col>
              </Row>
            </Col>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Button type="button" className="btn btn-dark" href="/createoffer">CREATE OFFER</Button>
        </Col>
        <Col>
          <Button type="button" className="btn btn-dark" href="/addfeedback">ADD FEEDBACK</Button>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Button type="button" className="btn btn-dark" href="/viewoffer/:id">VIEW OFFERS</Button>
        </Col>
        <Col>
          <Button type="button" className="btn btn-dark" href="/viewfeedback/:id">VIEW FEEDBACK</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default homeDetails;