import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
// import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Placeholder from "../images/placeholder.png";
// import Navbar from "../components/Navbar";
import API from "../utils/API.js";

function testPage() {
    // Setting our component's initial state
    const [test, setTest] = useState([])
  
    // Load all books and store them with setBooks
    useEffect(() => {
        getAllAgent()
    }, [])

    // Loads all books and sets them to books
    function getAllAgent() {
        API.getAgent()
            .then(res =>
                setTest(res.data)
            )
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

     // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
            API.saveBook({
                title: formObject.title,
                author: formObject.author,
                synopsis: formObject.synopsis
            }).then(() => setFormObject({
                title: "",
                author: "",
                synopsis: ""
            })).then(res => loadBooks())
                .catch(err => console.log(err));
        }
    };
  


    return (
        <div class="indexContainer">
        <Container>
          <Row>
            <div className="searchbar">
            <Col>
              <h3><div id="agentName">'div id="agentName"'</div></h3>
              {/* also implement dynamic agents name here */}
            </Col>
            </div>
          </Row>
  
          <Row>
          <div className="searchbar">
            <Col>
              <input className="rounded" placeholder="Search address"></input>
              <p></p>
            </Col>
            <Button type="button" className="btn addHome btn-primary" href="/addHome">Add home</Button>
            </div>
            
              
            
          </Row>
        </Container>
      </div >
    );
}


export default testPage;
