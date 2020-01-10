import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Heading from "../../ui/heading/Heading";
import CreateUserForm from "./CreateUserForm";
import Paragraph from "../../ui/paragraph/Paragraph";
import RedirectContainer from "../../ui/userInfo/RedirectContainer";

const CreateUser = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={0} md={2} />
        <Col xs={12} md={8}>
          <Heading title="Create a new user" />
          <Paragraph align="center">
            Creating a new user will overwrite any old user you have created
          </Paragraph>
        </Col>
        <Col xs={0} md={2} />
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={0} md={2} />
        <Col xs={12} md={8}>
          <CreateUserForm />
        </Col>
        <Col xs={0} md={2} />
      </Row>
      <RedirectContainer>
        <h3>Aleady have a user?</h3>
        <Paragraph>
          Go to the <Link to="/login">Login Page</Link>
        </Paragraph>
      </RedirectContainer>
    </Container>
  );
};

export default CreateUser;
