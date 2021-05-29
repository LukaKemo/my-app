import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAdmin } = useContext(AuthContext);
  return (
    <Route {...rest} render={
      props => {isAdmin && <Component {...rest} {...props} />
     }} /> 
  )
}

export default ProtectedRoute;