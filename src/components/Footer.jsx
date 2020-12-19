import React from 'react'
// import {
//     BrowserRouter as Router,
//     } from "react-router-dom";
  import { Navbar,Container, Row, Col} from 'react-bootstrap'


class BootstrapFooter extends React.Component{

    render(){
        return(
            <Container fluid>
                <Row>
                    <Col>
                        {/* <Router> */}
                            <Navbar className="justify-content-center" bg="dark" variant="dark" expand="lg" sticky="bottom" >
                                <Navbar.Brand >Thank you for your visiting!</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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

export default BootstrapFooter;