import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { connect } from "react-redux";
import { logOutUser } from "../../redux/actions";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../authentication/login/Login";
import CreateUser from "../authentication/createUser/CreateUser";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import CardDetailContainer from "../cards/details/CardDetailContainer";

import StyledNavUser from "../ui/userInfo/StyledNavUser";
import LogOutBtn from "../ui/userInfo/LogOutBtn";

function Layout({ auth, user, logOutUser }) {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink to="/" exact>
          <Navbar.Brand>Noroff Final CA</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about/" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact/" className="nav-link">
              Contact
            </NavLink>
          </Nav>
          {auth === true && (
            <>
              <Nav>
                <StyledNavUser>
                  Logged in as: <b>{user}</b>
                </StyledNavUser>
              </Nav>
              <LogOutBtn onClick={() => logOutUser()}>Log out</LogOutBtn>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/new-user" component={CreateUser} />
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/about/" component={About} />
          <PrivateRoute path="/contact/" component={Contact} />
          <PrivateRoute path="/card/:id" component={CardDetailContainer} />
        </Switch>
      </main>
    </Router>
  );
}

Layout.propsTypes = {
  auth: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
  logOutUser: PropTypes.func.isRequired
};

const mapStateToProps = store => {
  return {
    auth: store.authenticated.isAuthenticated,
    user: store.authenticated.displayName
  };
};

export default connect(mapStateToProps, { logOutUser })(Layout);
