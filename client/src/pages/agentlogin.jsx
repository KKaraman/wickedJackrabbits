import React, { useState } from "react";
import {Button} from "react-bootstrap"
import axios from "axios";
const AgentLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitAgent = () => {
    axios.post("/api/login", {
      email,
      password
    }).then((res) => {
      console.log(res)
    })
  }
  // Map over this.state.projects and render a project component for each one
  return (
    <div>
    <h1>Agent Login</h1>
    <div class="Container">
      <textarea onChange={(e) => { setEmail(e.target.value) }} className="agentEmail" placeholder="email"></textarea>
      <textarea onChange={(e) => { setPassword(e.target.value) }} className="agentPassword" placeholder="password"></textarea>
      <div class="center">

        <Button onClick={submitAgent} className="agentLogin" href="/agentmain" >Log In</Button>
      </div>
    </div>
    </div>
      
    );

}

export default AgentLogin;