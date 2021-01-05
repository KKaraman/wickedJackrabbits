import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import projects from "../projects.json";
import utils from "../utils/API";
import "./login.css";


class SignUp extends Component {

  //create  onclick event handler on submit button that calls the postUser function
  // make an onchange state component to prep for the onclick event

  // Map over this.state.projects and render a project component for each one
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>Sign Up Form</h2>
          <form className="signup">
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email-input" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="password-input" placeholder="Password"/>
            </div>
            <div style="display:none" id="alert" className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span> <span className="msg"></span>
            </div>
            <button type="submit" className="btn btn-default">Sign Up</button>
          </form>
          <br />
          <p>Or log in <a href="/login">here</a></p>
        </div>
      </div>
    </div>
    );
  }
}

export default SignUp;

