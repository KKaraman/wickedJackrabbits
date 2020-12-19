import React from 'react'
// import {
//     BrowserRouter as Router,
//     } from "react-router-dom";
import { Navbar,Nav,NavDropdown, Container, Row, Col} from 'react-bootstrap'

//import resume
// import WorkResume from "../images/keremKaraman_workResume";



class BootstrapNavbar extends React.Component{

    render(){
        return(
            <Container fluid>
                <Row>
                    <Col>
                        {/* <Router> */}
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">Wicked Jackrabbits</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home Page</Nav.Link>
                                    <Nav.Link href="/one">Page One</Nav.Link>
                                    <Nav.Link href="/two">Page Two</Nav.Link>
                                    <NavDropdown title="Split DropDown Item" id="basic-nav-dropdown">
                                        
                                        <NavDropdown.Item href= "https://www.google.com">Google Again</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="https://www.yahoo.com">Yahoo</NavDropdown.Item>
                
                                        
                                        
                                    </NavDropdown>
                                    </Nav>
                                    {/* <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form> */}
                                </Navbar.Collapse>
                            </Navbar>
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
                    </Col>
                </Row>
            </Container>
        )  
    }
}

export default BootstrapNavbar;