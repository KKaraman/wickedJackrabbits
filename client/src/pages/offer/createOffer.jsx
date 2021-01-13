import { Row, Col, Button, Container } from "react-bootstrap";
import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./offer.css";


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
            <div className="offerWrap">
                <Row>
                   <Col>
                   <input onChange={(e) => {setDateOffered(e.target.value)}} className="txtarea" type="text" placeholder="Date Offered"/>
                   <p></p>
                    Buyer's Name
                   <input onChange={(e) => {setName(e.target.value)}} className="txtarea" type="text" placeholder="name"/>
                   <p></p>

                   Offer Amount
                   <input onChange={(e) => {setAmount(e.target.value)}} className="txtarea" type="text" placeholder="amount"/>
                   <p></p>

                   Earliest Closing Date
                   <input onChange={(e) => {setClosingDate(e.target.value)}} className="txtarea" type="date" placeholder="Closing Date"/>
                     <p></p>   
                       
                   <p className="payType">Payment Type 
                   <select onChange={(e) => {setMoneyType(e.target.value)}} className="txtarea" type="offer" placeholder="Money Type">
                        <option className="txtarea" value="cash">Cash</option>
                        <option className="txtarea" value="loan">Bank Loan</option>
                    </select>
                    </p>
                    <p>
                        <Button onClick={submitOffer} href="/" type="submit">Submit offer</Button>
                        </p>


                   </Col>
                
                    
                </Row>
                </div>
            </Container>
        
    )
}

export default createOffer;