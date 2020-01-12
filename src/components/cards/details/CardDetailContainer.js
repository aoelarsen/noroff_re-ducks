import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import CardDetail from "./CardDetail";

import Heading from "../../ui/heading/Heading";
import SectionContainer from "../../ui/SectionContainer";
import SpinnerContainer from "../../ui/SpinnerContainer";

const CardDetailContainer = ({ hasLoadedCards, cards, match }) => {
  const id = match.params.id;
  const singleCard = cards.filter(card => card.id === id);
  const details = singleCard[0];

  if (!hasLoadedCards || !details) {
    return (
      <SpinnerContainer>
        <Spinner animation="border" className="spinner" />
      </SpinnerContainer>
    );
  }

  return (
    <SectionContainer>
      <Heading title={details.name} />
      <CardDetail details={details} />
    </SectionContainer>
  );
};

CardDetailContainer.propTypes = {
  match: PropTypes.object.isRequired,
  cards: PropTypes.array.isRequired,
  hasLoadedCards: PropTypes.bool.isRequired
};

const mapStateToProps = store => {
  return {
    cards: store.cardsReducer.cardsArray,
    hasLoadedCards: store.cardsReducer.hasLoadedCards
  };
};

export default connect(mapStateToProps)(CardDetailContainer);
