import React from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import axios from "axios";


// Router that checks if user is logged-in
// If not, redirect to "/login"
const PrivateRoute = ({ component: Component, ...rest }) => {
  
  const history = useHistory();
  const [isAuthenticate, setAuthenticated] = React.useState(false)
  const [isLoading, setLoading] = React.useState(true)
  React.useEffect(() => {
    axios.get("/api/agent_data")
    .then((res) => {
      if(res.data.email){
        setAuthenticated(true);
      }
      setLoading(false);
    })
  }, [])

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
             history.replace("/agentlogin")
      )
    }
  />
)}


export default PrivateRoute