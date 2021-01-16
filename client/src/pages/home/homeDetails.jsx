import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Placeholder from "../../images/placeholder.png";
import "../../App.css";


const homeDetails = () => {
    return(
        <Container>
            <Row className="justify-content-center">
                
                    <Col>
                    <div className="cardWrap">
                    <Card>
                      <div className="genImage">
                      <Image className="card-img-top" src={Placeholder} fluid />
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
                                  <p>Placeholder</p>
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
                              <p>Placeholder</p>
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
                                  <p>Placeholder</p>
                                  </div>
                              </p>
                            </div>

                              <div className="genPart">
                                  <p>
                                  <div className="innerPart">
                                  Homeowner 
                                  </div> 
                                  </p>
                                  <p></p>
                                  <div className="innerGenPart">
                                    <p>Placeholder
                                  </p>
                                  </div>
                              </div>

                            </div>


                    </Card>
                    </div>
                    </Col>
               </Row>
               <br></br>
            <Row>
                <Col>
                    <Button type="button" className="btn btn-dark" href="/createoffer">ADD OFFER</Button>
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