import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import projects from "../projects.json";

class AgentLogin extends Component {
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
        <textarea className="agentEmail" placeholder="email"></textarea>
        <textarea className="agentPassword" placeholder="password"></textarea>
        <div class="center">
        <button className="agentLogin" onclick="agentLogin()">Log In</button>
        </div>
        </div>
        <p></p>
      </Wrapper>
    );
  }
}

export default AgentLogin