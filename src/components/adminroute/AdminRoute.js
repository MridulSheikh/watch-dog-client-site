import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user, admin} = useAuth()
    if(!admin){
      return  <div style={{display:'flex',justifyContent:"center", alignItems:"center", height:"80vh"}}>
      <Spinner animation="border" className="m-5" />
      </div>
   }
    return (
        <div>
        <Route
        {...rest}
    render={({ location }) =>
    user.email && admin ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: "/",
          state: { from: location }
        }}
      />
    )
  }
        />
        </div>
    );
};

export default AdminRoute;