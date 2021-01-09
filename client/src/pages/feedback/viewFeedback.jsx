import { Container, Row, Col, Button, } from "react-bootstrap";
import "../offer/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "../../components/Wrapper";


const viewFeedback = () => {
        return (
            <Wrapper>
                <Container>
                    <Row className="text-center justify-content-center">Johns Feedback</Row>
                    <br/>
                    <Row>
                        <Col>Name</Col>
                        <Col>Showing Time</Col>
                        <Col>Showing Date</Col>
                    </Row>
                    
                    <Row>
                        <Col>Family?</Col>
                        <Col>Interest Level</Col>
                        <Col>Repeat?</Col>
                    </Row>
                    <br/>
                    <Row className="text-center justify-content-center">Additional Notes</Row>
                    
                    <Row>
                        <Button className="text-center justify-content-center">Update Feedback</Button>
                    </Row>
                </Container>
            </Wrapper>
            
        )
    
    
};

export default viewFeedback;