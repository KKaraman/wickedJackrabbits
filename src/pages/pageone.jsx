import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import projects from "../projects.json";
import "./login.css";
class PageThree extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };


  // Map over this.state.projects and render a project component for each one
  render() {
    return (
      
      <Wrapper>
        <div className="addHouse"> 
        <Title>Add House</Title>
        <div class="houseimage"></div>
        <div id="button">
        <button>Add Image</button>
        </div>
        <div className="addhousecontent">
        <form>
  <label>
    Address
    <input type="text" name="name" />
  </label>
</form>
<form>
  <label>
    Owners
    <input type="text" name="name" />
  </label>
</form>
<form>
  <label>
    Asking Price
    <input type="text" name="name" />
  </label>
</form>
<form>
  <label>
    Contact
    <input type="text" name="name" />
  </label>
</form>
<input type="submit" id="addhousesubmit" value="Submit" />
</div>
</div>
      </Wrapper>
    );
  }
}

export default PageThree;

