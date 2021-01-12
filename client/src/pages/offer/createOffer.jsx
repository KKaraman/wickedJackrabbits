import { Row, Col, Button, Container } from "react-bootstrap";
import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


const createOffer = () => {
    const [dateOffered, setDateOffered] = useState("")
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [closingDate, setClosingDate] = useState("")
    const [moneyType, setMoneyType] = useState("")
    const submitOffer = () => {
        axios.post("/api/createOffer", {
            dateOffered: dateOffered,
            name: name,
            amount: amount,
            closingDate: closingDate,
            moneyType: moneyType,
        }).then(() => {
        res.sendStatus(200)
        })
    }
    return (
       
            <Container>
                <Row>
                   <Col sm={6}>
                   <input onChange={(e) => {setDateOffered(e.target.value)}} type="text" placeholder="Date Offered"/>
                   <input onChange={(e) => {setName(e.target.value)}} type="text" placeholder="name"/>
                   <input onChange={(e) => {setAmount(e.target.value)}} type="text" placeholder="amount"/>
                   <input onChange={(e) => {setClosingDate(e.target.value)}} type="text" placeholder="Closing Date"/>
                   <input onChange={(e) => {setMoneyType(e.target.value)}} type="text" placeholder="Money Type"/>
                   </Col>
                
                    <Col>
                        <Button onClick={submitOffer} href="/" type="submit">Submit offer</Button>
                    </Col>
                </Row>
            </Container>
        
    )
}

export default createOffer;
