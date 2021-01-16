import {Row, Col, Container, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const selectedOffer = () => {
    return(
        <Container>
            <Card>
                <Row className="justify-content-center">Selected name</Row> <br></br>

                
                <Row>
                    <Col>Offer Date</Col>
                    <Col>Price</Col>
                    <Col>Closing Date</Col>
                </Row>

                {/* data population */}
                <Row>
                    <Col>placeholder</Col>
                    <Col>test</Col>
                    <Col>info</Col>
                </Row>
                <br></br>
                <Row >
                    <Col >Money Type</Col>
                    <Col >Contingency</Col>
                </Row>

                {/* data population */}
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Card>
        </Container>
    )
};

export default selectedOffer;