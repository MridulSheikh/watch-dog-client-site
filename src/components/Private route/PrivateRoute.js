import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading} = useAuth()
    if(isLoading){
      return  <div style={{display:'flex',justifyContent:"center", alignItems:"center", height:"80vh"}}>
      <Spinner animation="border" className="m-5" />
      </div>
   }
    return (
        <div>
        <Route
        {...rest}
    render={({ location }) =>
    user.email ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: location }
        }}
      />
    )
  }
        />
        </div>
    );
};

export default PrivateRoute;