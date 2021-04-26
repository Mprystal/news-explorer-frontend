import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props}) => {
    
  return (
    <Route>
      {
        () => props.loggedin ? <Component {...props} />  : <Redirect to='./' />
      }
    </Route>
)}

export default ProtectedRoute; 