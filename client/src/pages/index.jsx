import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Placeholder from "../images/placeholder.png";
import axios from "axios";

const MainPage = () => {
  const [homeData, setHomeData] = useState({})
  useEffect(() => {
    axios.get("/api/getHomes" )
      .then((res) => {
        setHomeData(res.data.result)
        console.log("Home details =", res.data.result.Users)
        console.log("data:", res.data.result)
      })
  }, [])
  
  

  console.log("this is homedata", homeData.firstName)


  return (
    <div className="indexContainer">
      <Container>
        <Row>
        <div className="searchbar">
          <Col>
            <h3 id="agentName">{homeData.firstName}</h3>
            {/* also implement dynamic agents name here */}
          </Col>
          </div>

        </Row>
        <Row>
        <div className="searchbar">
          <Col>
            <input className="rounded" placeholder="Search Address"></input>
            <p></p>
          </Col>
          <Button type="button" className="btn addHome btn-primary" href="/addHome">Add home</Button>
          </div>
        </Row>

        {homeData.Users && homeData.Users.length !== 0 && homeData.Users.map(item => {

            const homes = item.Homes
            const homesMap = homes.map(home=> {
              console.log("home id", home) 
              return(
               
                <Col>
                  <NavLink to={`/homedetails/`}>
                    <Card>
                      <Image className="card-img-top" src={Placeholder} fluid />
                      {/* implement agent updated photos */}
                    
                      <Col>
                        <div >
                          <p>
                            Address: {home.address}
                          </p>
                        </div>
                      Listing Price : ${home.listingPrice}

                      </Col> 

                      <Col>
                        <Row>
                          
        
                          <Col>
                            <div>
                              <p>
                                Offers: 
                              </p>
                            </div>
                            <Col>
                              <div>
                                <p>
                                  Sellers name:  {item.firstName} {item.LastName}
                                </p>
                              </div>
                            </Col>
                          </Col>
                        </Row>
                      </Col>
                    </Card>
                    </NavLink>
                  </Col>
                
              
                  
            )})
            
                return (
                  <Row>
                    {homesMap}
                  </Row>
                )
            })};
      </Container>
    </div>
  );
};

export default MainPage;