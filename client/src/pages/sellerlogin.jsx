import React, { Component } from "react";
import "./login.css";

class PageThree extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };


  // Map over this.state.projects and render a project component for each one
  render() {
    return (
      <div>
       <h1> Seller Login</h1>
        <div class="Container">
        <textarea className="sellerEmail" placeholder="email"></textarea>
        <textarea className="sellerPassword" placeholder="password"></textarea>
        <div class="center">
        <Button className="sellerLogin" href="/homeownermain"> Log In</Button>
        </div>
        </div>
        </div>
      
    );
  }
}

export default PageThree;