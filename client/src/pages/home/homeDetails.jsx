import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Placeholder from "../../images/placeholder.png"

const homeDetails = () => {
    return(
        <Container>
            <Row className="justify-content-center">
                
                    <Col>
                    <Card>
                      <Image className="card-img-top" src={Placeholder} fluid />
                    
                      <Col>
                        <div >
                          <p>
                            Address: 
                          </p>
                        </div>
                      Listing Price : $

                      </Col> 

                      <Col>
                        <Row>
                          
        
                          <Col>
                            <div>
                              <p>
                                Offers: 
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