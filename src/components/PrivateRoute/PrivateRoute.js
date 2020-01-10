import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = store => {
  return {
    auth: store.authenticated.isAuthenticated
  };
};

export default connect(mapStateToProps)(PrivateRoute);
