import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PropTypes from 'prop-types'

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Login from 'views/Login'
import "assets/css/material-dashboard-react.css?v=1.10.0";
import { loginUserSelector } from 'store/selectors'
import { useSelector } from "react-redux";


const AuthRoute = ({ user, redirect, ...rest }) => {
    // if user is truthy display the route, else redirect.
    return user? <Route {...rest} /> : <Redirect to={redirect} />
  };
  
AuthRoute.propTypes = {
    user: PropTypes.object,
    redirect: PropTypes.string,
}
  

export default function App() {

    const loginUser = useSelector( loginUserSelector )

    return (
        <BrowserRouter>
        <Switch>
          <AuthRoute user={loginUser} path="/admin" component={Admin}  redirect="/login" />
          <AuthRoute user={loginUser} path="/rtl" component={RTL}  redirect="/login" />
  
          <Route path="/login" component={Login} />
  
          {/* default redirect to login if user is not logged in */}
          { loginUser?
            <Redirect from="/" to="/admin/dashboard" />:
            <Redirect from="/" to="/login" />            
          }
          
        </Switch>
      </BrowserRouter>
  
    )
}

