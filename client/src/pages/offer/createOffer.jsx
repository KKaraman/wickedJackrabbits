import {Row, Col, Button, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./offer.css";

import Wrapper from "../../components/Wrapper";

const createOffer = () => {
    return (
        <Wrapper>
            <Container>
            <div className="offerWrap">
                <Row>
                    <Col className="colName">
                        Name
                        <Col>
                             <input className="txtarea" id="offerName" placeholder="" type="offer"></input>
                        </Col>
                    </Col>

                    <Col className="colAmount">
                        Amount
                        <Col>
                            <input className="txtarea" id="amount" placeholder="" type="offer"></input>
                        </Col>
                    </Col>

                    <Col className="colCash">
                        Cash?
                        <Col>
                            <select className="txtarea" placeholder="" type="offer">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </Col>  
                    </Col>  
                </Row>
                <Row><p></p></Row>
                <Row>
                    <div class="offerQuestion"> 
                When is the earliest you could close?
                </div>
                    <Col>
                        <Col>
                             <input className="txtarea" class="submitOffer" type="date"></input>
                        </Col>
                    </Col>

                </Row>
{/* 
                <Row>
                    <Col>
                        <input className="sm-4" placeholder="term" type="term"></input>
                    </Col>
                    <Col>
                        <select className="sm-4">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        Notes
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <textarea></textarea>
                    </Col>
                </Row> */}
                <Row>
                    <Col>
                        <Button href="/" className="text-center justifiy-content-center" type="submit">Submit offer</Button>
                    </Col>
                </Row>
                </div>
            </Container>
        </Wrapper>
    )
}

export default createOffer;