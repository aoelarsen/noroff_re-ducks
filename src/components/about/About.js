import React from "react";
import Container from "react-bootstrap/Container";

import Heading from "../ui/heading/Heading";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <Container>
      <Heading title="About" />
      <AboutContent />
    </Container>
  );
};

export default About;
