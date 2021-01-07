import {Row, Col, Button, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Wrapper from "../components/Wrapper";

const createOffer = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Col>
                        price
                    </Col>
                    <Col>
                        term
                    </Col>
                    <Col>
                        cash?
                    </Col>   
                </Row>
                <Row>
                    <Col>
                        <input className="sm-4" placeholder="price offer" type="offer"></input>
                        
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
                </Row>
                <Row>
                    <Col>
                        <Button className="text-center justifiy-content-center">Submit offer</Button>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default createOffer;