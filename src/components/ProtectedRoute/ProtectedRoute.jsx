import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LoggedInContext } from '../../context/LoggedInContext';

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  handleSignOut: PropTypes.func.isRequired,
}
function ProtectedRoute({ component: Component, ...props }) {
  const loggedIn = React.useContext(LoggedInContext);
  return (
    <Route>
      {() => loggedIn ? <Component {...props} /> : <Redirect to="/" />}
    </Route>
  )
}

export default ProtectedRoute;
