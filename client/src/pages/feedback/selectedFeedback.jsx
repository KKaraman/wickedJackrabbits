import {Row, Col, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



const selectedFeedback = () => {
    return(
        <Container>
            <Row className="justify-content-center">Selected feedback name</Row>
            <br></br>
            
            <Row>
                <Col>Name</Col>
                <Col>Showing Time</Col>
                <Col> Showing Date</Col>
            </Row>
            {/* data pop */}
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <br></br>
            
            <Row>
                <Col>Family?</Col>
                <Col>Interest Level</Col>
                <Col>Repeat?</Col>
            </Row>
            {/* data pop */}
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <br></br>
            
            <Row className="justify-content-center">Additional Notes</Row>
            <Row className="justify-content-center">Notes</Row>
        </Container>

         
    )
};

export default selectedFeedback;