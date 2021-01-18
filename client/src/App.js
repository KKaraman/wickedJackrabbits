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
import homeDetails from "./pages/home/homeDetails"
import selectedOffer from "./pages/offer/selectedOffer";
import selectedFeedback from "./pages/feedback/selectedFeedback"
// different components
import BootstrapNavbar from "./components/Navbar";
import addFeedback from "./pages/feedback/addFeedback";
import viewOffer from "./pages/offer/viewOffer";
import viewFeedback from "./pages/feedback/viewFeedback"
import hoMain from "./pages/home/hoMain.jsx";
import PrivateRoute from "./config/privateRoute";
import SellerRoute from "./config/sellerRoute";


function App() {
  return (
    <div>
      <BootstrapNavbar />
      <Router>
        <div className="blah">

          {/* Router cannot have more than one single child element */}
          <Switch>
            <Route exact path="/" component={SignUp} />
            {/* Render this only if the first route doesnt match */}
            
            <Route exact path="/sellerlogin" component= { SellerLogin } />
            <Route exact path="/agentlogin" component={ AgentLogin } />
            
            <PrivateRoute exact path="/agentmain" component={ MainPage } />
            <PrivateRoute exact path="/addhome" component={ addHome } />
            <PrivateRoute exact path="/createoffer/:id" component={ createOffer } />
            <PrivateRoute exact path="/addfeedback/:id" component={ addFeedback } />
            <PrivateRoute exact path="/homeownermain" component={ hoMain } />
            <PrivateRoute exact path="/homedetails/:id" component={homeDetails}/>
            <Route exact path="/viewoffer/:id" component={ viewOffer } />
            <Route exact path="/viewfeedback/:id" component={ viewFeedback } />



            <Route path="/404" render={
              () => (
                <h2>404: NOT A VALID URL PATH!</h2>
              )}
            />
            {/* Redirect tells react to go to a known path if nothing matches*/}
            {/* always have redirect as the last item */}
            <Redirect to="/" />;
          </Switch>
        </div>
      </Router>
      </div>
   
  );
}

export default App;
