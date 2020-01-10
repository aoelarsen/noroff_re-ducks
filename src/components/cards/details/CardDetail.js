import React from "react";
import PropTypes from "prop-types";
import {
  SingleCardContainer,
  SingleCardImg,
  SingleCardList
} from "../../ui/cardStyles/SingleCardStyle";
import Paragraph from "../../ui/paragraph/Paragraph";

function CardDetail({ details }) {
  const { name, imageUrl, colors, rarity, text } = details;

  return (
    <SingleCardContainer>
      <SingleCardImg src={imageUrl} alt={name} />
      <SingleCardList rarity={rarity}>
        <h5>
          Rarity: <span>{rarity}</span>
        </h5>
        <h5>
          Colors: <span>{colors}</span>
        </h5>
      </SingleCardList>
      <Paragraph>{text}</Paragraph>
    </SingleCardContainer>
  );
}

CardDetail.propTypes = {
  details: PropTypes.object.isRequired
};

export default CardDetail;
