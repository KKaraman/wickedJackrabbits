import React from 'react'
// import {
//     BrowserRouter as Router,
//     } from "react-router-dom";
import { Navbar,Nav,NavDropdown, Container, Button, Row, Col} from 'react-bootstrap';
import "./components.css";
//import resume
// import WorkResume from "../images/keremKaraman_workResume";



class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div id="navContainer">
            <Container fluid>
                <Row>
                    
                        {/* <Router> */}
                        <div id="navbarId">
                            <Navbar fluid expand="lg" sticky="top">
                                <Navbar.Brand id="navTitle" href="/">Sellify <div class="logout"><Button>Log Out</Button></div> </Navbar.Brand>
                                
                                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                                {/* <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home Page</Nav.Link>
                                    <Nav.Link href="/addhome">Add House</Nav.Link>
                                    <Nav.Link href="/agentlogin">Agent Login</Nav.Link>
                                    <Nav.Link href="/sellerlogin">Seller Login</Nav.Link>
                                    <Nav.Link href="/createoffer">Create Offer</Nav.Link>
                                    <Nav.Link href="/addfeedback">Add Feedback</Nav.Link>
                                    <Nav.Link href="/homeownermain">My House</Nav.Link>
                                    <Nav.Link href="/agentmain">Main (agent)</Nav.Link>
                                    <Nav.Link href="/signupagent">SignUp (agent)</Nav.Link>
                                    <Nav.Link href="/signupseller">Signup (seller)</Nav.Link>
                                    <button id="logout">Log Out</button>
                                    </Nav>
                                    {/* <Form inline> */}
                                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form> */} 
                                {/* </Navbar.Collapse> */}
                            </Navbar>
                            </div>
                            <br />
                            {/* <Switch>
                                <Route exact path="/" component= { MainPage }>
                                    <MainPage />
                                </Route>
                                <Route path="/users" component = { UsersPage}>
                                    <UsersPage />
                                </Route>
                                <Route path="/user/:name" component ={ UserInfo }>
                                    <UserInfo />
                                </Route>
                            </Switch> */}
                        {/* </Router> */}
                    
                </Row>
            </Container>
            </div>
        )  
    }
}

export default BootstrapNavbar;