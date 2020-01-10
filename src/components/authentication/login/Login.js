import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Heading from "../../ui/heading/Heading";
import LoginForm from "./LoginForm";
import Paragraph from "../../ui/paragraph/Paragraph";
import RedirectContainer from "../../ui/userInfo/RedirectContainer";

const Login = () => {
  return (
    <Container>
      <Heading title="Please log in to proceed" />
      <Row className="justify-content-md-center">
        <Col xs={0} md={2} />
        <Col xs={12} md={8}>
          <LoginForm />
        </Col>
        <Col xs={0} md={2} />
      </Row>
      <RedirectContainer>
        <h3>Don't have a user?</h3>
        <Paragraph>
          Click <Link to="/new-user">Here!</Link> to create one
        </Paragraph>
      </RedirectContainer>
    </Container>
  );
};

export default Login;
