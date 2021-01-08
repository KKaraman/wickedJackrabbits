import {Row, Col, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Wrapper from "../../components/Wrapper";

const viewOffer = () => {
    return (
        <Wrapper>
            <Container>
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

                <Row className="text-center justify-content-center">Additional Notes</Row>
                <br/>
                <Row>
                    <ol>
                        {/* populated dynamically */}
                    </ol>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default viewOffer;