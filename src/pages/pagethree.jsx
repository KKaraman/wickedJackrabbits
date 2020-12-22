import React, { Component } from "react";
import Project from "../components/Project";
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
        <Title>Agent Login</Title>
        <div class="Container">
        <textarea className="AgentEmail" placeholder="email"></textarea>
        <textarea className="AgentPassword" placeholder="password"></textarea>
        <button class="agentLogin" onclick="AgentLogin()">Log In</button>
        </div>
        <p></p>
      </Wrapper>
    );
  }
}

export default PageThree;