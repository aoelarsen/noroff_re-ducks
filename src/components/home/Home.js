import React from "react";
import Container from "react-bootstrap/Container";

import Heading from "../ui/heading/Heading";
import CardsList from "../cards/list/CardsList";

const Home = () => {
  return (
    <Container>
      <Heading title="Home" />
      <CardsList />
    </Container>
  );
};

export default Home;
