// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// different pages
import MainPage from "./pages/index";
import AgentLogin from "./pages/agentlogin";
import SellerLogin from "./pages/sellerlogin"
import addHome from "./pages/home/addHome"
import SignUp from "./pages/signup";
import createOffer from "./pages/offer/createOffer"

// different components
import Wrapper from "./components/Wrapper"
import BootstrapNavbar from "./components/Navbar";
import addFeedback from "./pages/feedback/addFeedback";
import viewOffer from "./pages/offer/viewOffer";
import viewFeedback from "./pages/feedback/viewFeedback"
import hoMain from "./pages/home/hoMain.jsx";


function App() {

  return (
    <Wrapper>
      <BootstrapNavbar />
      <Router>
        <div className="blah">

          {/* Router cannot have more than one single child element */}
          <Switch>
            <Route exact path="/test" component={SignUp} />
            <Route exact path="/" component={MainPage} />
            {/* Render this only if the first route doesnt match */}

            <Route exact path="/sellerlogin" component= { SellerLogin } />
            <Route exact path="/agentlogin" component={ AgentLogin } />
            <Route exact path="/addhome" component={ addHome } />
            <Route exact path="/createoffer" component={ createOffer } />
            <Route exact path="/viewoffer" component={ viewOffer } />
            <Route exact path="/viewfeedback" component={ viewFeedback } />
            <Route exact path="/addfeedback" component={ addFeedback } />
            <Route exact path="/homeownermain" component={ hoMain } />
            <Route exact path="/signupagent" component={ SignUp } />
            <Route exact path="/signupseller" component={ SignUp } />

            <Route path="/404" render={
              () => (
                <h2>404: NOT A VALID URL PATH!</h2>
              )}
            />
            {/* Redirect tells react to go to a known path if nothing matches*/}
            {/* always have redirect as the last item */}
            <Redirect to="/404" />;

          </Switch>
        </div>
      </Router>
    </Wrapper>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
