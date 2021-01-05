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
      <div className="addHouse">
      <Wrapper> 
        <Title>Add House</Title>
        <div class="houseimage"></div>
        <div id="button">
        <button>Add Image</button>
        </div>
        <form>
  <label>
    Address
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
<form>
  <label>
    Owners
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
<form>
  <label>
    Asking Price
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
<form>
  <label>
    Contact
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
      </Wrapper>
      </div>
    );
  }
}

export default PageThree;

