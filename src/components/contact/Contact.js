import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Heading from "../ui/heading/Heading";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Container>
      <Heading title="Contact" />
      <Row>
        <Col xs={0} md={2} />
        <Col xs={12} md={8}>
          <ContactForm />
        </Col>
        <Col xs={0} md={2} />
      </Row>
    </Container>
  );
};

export default Contact;
