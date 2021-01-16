import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";
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
      <Container>
      <div className="signupWrap">
        <Row>
        <div className="signupInnerWrap">
          <Col>
        <Row>
        <div className="searchAdd">
          <Col>
            <h3 id="agentName">{homeData.firstName}</h3>
            {/* also implement dynamic agents name here */}
          </Col>
          </div>

        </Row>
        <Row>
          <Col>
          <div className="searchAdd">
          <div className="searchBar">
            <input className="rounded searchBar" placeholder="Search Address"></input>
          </div>
          <div className="addHome">
          <Button type="button" className="addHome btn btn-primary" href="/addHome">Add Home</Button>
          </div>
          </div>
          </Col>

          
        </Row>
        <p></p>

        {homeData.Users && homeData.Users.length !== 0 && homeData.Users.map(item => {

            const homes = item.Homes
            const homesMap = homes.map(home=> {
              console.log("home id", home) 
              return(
               
                <Col>

                  <NavLink to={`/homedetails/`}>

                    <div className="cardWrap">

                    <Card>
                      <div className="genImage">
                      <Image className="card-img-top" src={Placeholder} fluid />
                      {/* implement agent updated photos */}
                      </div>
                      <div className="genWrap">


                          <div className="genPart">
                            <p>
                              <div className="innerPart">
                                 Address 
                              </div>
                              <p></p>
                              <div className="innerGenPart">
                                  <p>{home.address}</p>
                              </div>
                            </p>
                          </div>

                          <div className="genPart">
                          <p>
                                  <div className="innerPart">
                            Listing Price
                            </div>
                             <p></p> 
                             <div className="innerGenPart">
                              <p>${home.listingPrice}</p>
                              </div>
                          </p>
                              </div>


                            <div className="genPart">
                            <p>
                                  <div className="innerPart">
                                Total Offers 
                                </div>
                                <p></p>
                                <div className="innerGenPart">
                                  <p>Generated Text</p>
                                  </div>
                              </p>
                            </div>

                              <div className="genPart">
                                  <p>
                                  <div className="innerPart">
                                  Homeowner 
                                  </div> 
                                  </p>
                                  <p></p>
                                  <div className="innerGenPart">
                                    <p>{item.firstName} {item.LastName}
                                  </p>
                                  </div>
                              </div>

                            </div>


                    </Card>
                    </div>
                    </NavLink>
                  </Col>
                
              
                  
            )})
            
                return (
                  <Row>
                    {homesMap}
                  </Row>
                )
            })};
            </Col>
            </div>
            </Row>
            </div>
            
      </Container>

  );
};

export default MainPage;