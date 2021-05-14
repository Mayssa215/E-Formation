import React,{useState} from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => {
   const [userinfos, setuserinfos] = useState(JSON.parse(localStorage.getItem('profile')));
   return (
  <Route
  {...rest}
    render={(props) =>
  userinfos ? <Component {...props} /> : <Redirect to="/signin" />
    }
  ></Route>
   );
}
export default PrivateRoute;
