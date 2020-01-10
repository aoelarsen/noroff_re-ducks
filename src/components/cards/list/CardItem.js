import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import {
  CardDetailWrap,
  CardName,
  CardButton
} from "../../ui/cardStyles/CardStyle";

function CardItem({ id, name, image, history, rarity }) {
  return (
    <CardDetailWrap rarity={rarity} onClick={() => history.push(`/card/${id}`)}>
      <CardName>{name}</CardName>
      <img variant="top" src={image} alt={name} />
      <CardButton rarity={rarity} onClick={() => history.push(`/card/${id}`)}>
        View info
      </CardButton>
    </CardDetailWrap>
  );
}

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rarity: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(CardItem);
