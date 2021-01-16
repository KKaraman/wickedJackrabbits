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
             history.replace("/sellerlogin")
      )
    }
  />
)}


export default SellerRoute