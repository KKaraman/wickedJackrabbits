import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import axios from "axios";


// Router that checks if user is logged-in
// If not, redirect to "/login"
const SellerRoute = ({ component: Component, ...rest }) => {
  
  const history = useHistory();
  const [isAuthenticate, setAuthenticated] = React.useState(false)
  const [isLoading, setLoading] = React.useState(true)
  React.useEffect(() => {
  
     axios.get("/api/user_data")
    .then((res) => {
      res.data.email?
      (setAuthenticated(true))
      :
      (getAgent())
      //(axios.get("/api/agent_data").then(data)=>{if(data.data.email){setAuthenticated(true)}}
     
      setLoading(false);
    })
  }, [])

  function getAgent(){
    axios.get("/api/agent_data")
    .then(function(data){
      if(data.data.email){setAuthenticated(true)}
    })
  
  }


  if(isLoading){
    return(
      <div>
        Loading...
      </div>
    )
  }
  return(
   <Route
    {...rest}
    render={props =>
      isAuthenticate ? (
        <Component {...props} />
      ) : (
             history.replace("/sellerlogin")
      )
    }
  />
)}


export default SellerRoute