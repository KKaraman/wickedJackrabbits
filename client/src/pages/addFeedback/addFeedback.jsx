import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "../../components/Wrapper";
import "./feedback.css";

const addFeedback = () => {
    return (
        <Wrapper>
            <Container>
                <Row >
                    <Col>
                        <h3 className="text-center justify-content-center">Add Feeback</h3> 
                    </Col>
                </Row>
                <br/>

                <Row id="feedbackChoices">
                    <Col className="sm-6">
                        <select>
                            <option value="family">Family?</option>
                            <option value="single">Single?</option>
                        </select>
                    </Col>
                    <Col className="sm-6">
                        <select >
                            <option value="local">Local?</option>
                            <option value="outofstate">Out of state?</option>
                        </select>
                    </Col>
                </Row> 
                <br/>
                <Row>
                    <Col>
                    <textarea name="feedback" rows="4" cols="35"></textarea>
                    </Col>
                </Row>  
                <br/>
                <Row id="submitfeedback">
                    <Col>
                        <Button href="/" className="text-center justifiy-content-center">Submit Feedback</Button>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
};

export default addFeedback;