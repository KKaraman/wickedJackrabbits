import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StockPhoto from "../../images/stockhouse.jpg";
import "../../App.css";
import { useParams } from "react-router";
import axios from "axios";

const homeDetails = () => {
  //Neeed to copy Nathans route for the user call so you can get the user name. 
  const [homeDetails, setHomeDetails] = useState({})
  const [UserDetails, setUserDetails] = useState({})
  const [offerLength, setOfferLength] = useState(0)
  const [homeOffersURLId, setHomeOffersURLId] = useState("")
  const [homeFeedbackURLId, setHomeFeedbackURLId] = useState("")
  const [viewOfferURLId, setViewOfferURLId] = useState("")
  const { id } = useParams();
  useEffect(() => {
    axios.get("/api/getHomeDeet/" + id)
      .then((res) => {
        setHomeDetails(res.data.result)
        setOfferLength(res.data.result.Offers.length)
        setHomeOffersURLId("/createoffer/" + res.data.result.id)
        setHomeFeedbackURLId("/addfeedback/" + res.data.result.id)
        setViewOfferURLId("/viewoffer/" + res.data.result.id)
        setUserDetails(res.data.result.User)
        console.log(res.data.result)
      })
  }, [])
  return (
    <Container>
      <Row className="justify-content-center">

        <Col>
          <div className="cardWrap">
            <Card>
              <div className="genImage">
                <Image className="card-img-top" src={StockPhoto} fluid />
                {/* implement agent updated photos */}
              </div>
              <div className="genWrap">


                <div className="genPart">
                  <p>
                    <div className="innerPart">
                      Address
                              </div>
                    <p></p>
                    <div className="innerGenPart">
                      <p>{homeDetails.address}</p>
                    </div>
                  </p>
                </div>

                <div className="genPart">
                  <p>
                    <div className="innerPart">
                      Listing Price
                            </div>
                    <p></p>
                    <div className="innerGenPart">
                      <p>{homeDetails.listingPrice}</p>
                    </div>
                  </p>
                </div>


                <div className="genPart">
                  <p>
                    <div className="innerPart">
                      Total Offers
                                </div>
                    <p></p>
                    <div className="innerGenPart">
                      <p>{offerLength}</p>
                    </div>
                  </p>
                </div>

                <div className="genPart">
                  <p>
                    <div className="innerPart">
                      Homeowner
                                  </div>
                  <p></p></p>
                  <p>{UserDetails.firstName} <p></p> {UserDetails.lastName}</p>
                  <div className="innerGenPart">
                    <p>
                    </p>
                  </div>
                </div>

              </div>


            </Card>
          </div>
        </Col>
      </Row>

      <div className="genWrapb">



<div className="genPartb">
  <p>

    <Button type="button" className="btn btn-dark" href={homeOffersURLId}>ADD<div></div> OFFER</Button>

  </p>
</div>

<div className="genPartb">
  <p>

    <Button type="button" className="btn btn-dark" href={homeFeedbackURLId}>ADD<div></div> FEEDBACK</Button>

  </p>
</div>


<div className="genPartb">
  <p>

    <Button type="button" className="btn btn-dark" href="/viewoffer/:id">VIEW<div></div> OFFERS</Button>
 
  </p>
</div>

<div className="genPartb">
  <p>
    <Button type="button" className="btn btn-dark" href="/viewfeedback/:id">VIEW <div></div>FEEDBACK</Button>
    </p>
</div>

</div>

    </Container>
  )
}

export default homeDetails;