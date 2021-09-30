import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  loggedIn: PropTypes.bool.isRequired,
}
function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {() => props.loggedIn ? <Component {...props} /> : <Redirect to="/" />}
    </Route>
  )
}

export default ProtectedRoute;
