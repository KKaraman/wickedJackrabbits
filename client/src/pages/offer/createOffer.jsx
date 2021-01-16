import { Row, Col, Button, Container } from "react-bootstrap";
import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../signup.css";


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
            <div className="signupWrap">
                    <Row>
                    <div className="signupInnerWrap">
                        <Col>
                        <Col>
                        <h1>Create Offer</h1>
                    <input onChange={(e) => {setDateOffered(e.target.value)}} className="txtarea" type="date" placeholder="Date of Offer"/>
                        
                    <input onChange={(e) => {setName(e.target.value)}} className="txtarea" type="text" placeholder="Buyer's Name"/>

                    <input onChange={(e) => {setAmount(e.target.value)}} className="txtarea" type="text" placeholder="Offer Amount"/>
                    <p></p>

                    <h5>Earliest Closing Date</h5>
                    <input onChange={(e) => {setClosingDate(e.target.value)}} className="txtarea" type="date" placeholder="Closing Date"/>
                        <p></p>   
                        
                    <p className="payType"><h5>Payment Type</h5> 
                    <select onChange={(e) => {setMoneyType(e.target.value)}} className="txtarea" type="offer" placeholder="Money Type">
                            <option className="txtarea" value="cash">Cash</option>
                            <option className="txtarea" value="loan">Bank Loan</option>
                        </select>
                        </p>
                        <p>
                            <Button onClick={submitOffer} href="/agentmain" type="submit">Submit offer</Button>
                            </p>


                   </Col>
                   </Col>
                   </div>
                    </Row>
                </div>
            </Container>
        
    )
}

export default createOffer;