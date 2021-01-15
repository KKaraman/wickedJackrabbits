import { Row, Col, Button, Container } from "react-bootstrap";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./signup.css"





const SignUp = () => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const createLogin = () => {
        axios.post("/api/signup", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: password
        }).then(() => {
        res.sendStatus(200)
        })
    }
    return (

            <Container>
            <div className="signupWrap">
                <Row>
                    <div className="signupInnerWrap">
                   <Col>
                   <h1>Sign Up</h1>
                   <input onChange={(e) => {setfirstName(e.target.value)}} className="txtarea" type="text" placeholder="First Name*"/>
                   <p></p>

                   
                   <input onChange={(e) => {setlastName(e.target.value)}} className="txtarea" type="text" placeholder="Last Name*"/>
                   <p></p>

                   <input onChange={(e) => {setEmail(e.target.value)}} className="txtarea" type="text" placeholder="Email*"/>
                   <p></p>   

                   <input onChange={(e) => {setphoneNumber(e.target.value)}} className="txtarea" type="text" placeholder="Phone*"/>
                   <p></p>   
                       
                   <h2>Create a Password</h2>
                    <p>Password requires 6 characters minimum</p>
                   <input onChange={(e) => {setPassword(e.target.value)}} className="txtarea" type="text" placeholder="Password"/>
                   <p></p>  
                  
                    <p>
                        <div class="buttoncss">
                        <Button onClick={createLogin} href="/" type="submit">Submit</Button>
                        </div>
                        </p>
                    <h5>Already signed up?</h5>                         

                    <Button  href="/agentlogin" id="login" type="submit">Log In as an Agent</Button>

                    <Button  href="/sellerlogin" id="login" type="submit">Log In as a Homeowner</Button>
<p></p>
                   </Col>
                </div>
                    
                </Row>
                </div>
            </Container>
        
    )

}

// export default createOffer;

// class SignUp extends Component {

//   //create  onclick event handler on submit button that calls the postUser function
//   // make an onchange state component to prep for the onclick event

//   // Map over this.state.projects and render a project component for each one
//   render() {
//     return (
//       <div className="container">
//       <div className="row">
//         <div className="col-md-6 col-md-offset-3">
//           <h2>Sign Up Form</h2>
//           <form className="signup">
//             <div className="form-group">
//               <label for="exampleInputEmail1">Email address</label>
//               <input type="email" className="form-control" id="email-input" placeholder="Email"/>
//             </div>
//             <div className="form-group">
//               <label for="exampleInputPassword1">Password</label>
//               <input type="password" className="form-control" id="password-input" placeholder="Password"/>
//             </div>
//             <div id="alert" className="alert alert-danger" role="alert">
//               <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
//               <span className="sr-only">Error:</span> <span className="msg"></span>
//             </div>
//             <button type="submit" className="btn btn-default">Sign Up</button>
//           </form>
//           <br />
//           <p>Or log in <a href="/login">here</a></p>
//         </div>
//       </div>
//     </div>
//     );
//   }
// }

export default SignUp;

